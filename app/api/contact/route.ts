import { siteConfig } from '@/lib/data'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c] as string,
  )

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Misconfiguration — log on the server, stay vague to the client.
    console.error('RESEND_API_KEY is not set.')
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 },
    )
  }

  let body: { name?: unknown; email?: unknown; message?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = String(body?.name ?? '').trim()
  const email = String(body?.email ?? '').trim()
  const message = String(body?.message ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  // Resend's REST API — no SDK dependency needed.
  // `onboarding@resend.dev` works without a verified domain (sends to your own inbox).
  // Once you verify a domain, swap `from` to e.g. "Portfolio <contact@yourdomain>".
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [siteConfig.email],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111;">
        <h2 style="margin:0 0 16px;">New portfolio message</h2>
        <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p style="margin:16px 0 4px;"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      </div>`,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    console.error('Resend error:', res.status, detail)
    return NextResponse.json(
      { error: 'Failed to send message. Please email me directly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
