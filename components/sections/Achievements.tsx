'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { achievements } from '@/lib/data'
import { Award } from 'lucide-react'
import Image from 'next/image'

export function Achievements() {
  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year)

  const achievementsByType = {
    Competition: sortedAchievements.filter((a) => a.type === 'Competition'),
    Contest: sortedAchievements.filter((a) => a.type === 'Contest'),
    Rating: sortedAchievements.filter((a) => a.type === 'Rating'),
    Milestone: sortedAchievements.filter((a) => a.type === 'Milestone'),
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-accent font-medium mb-2">Recognition</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-balance mb-8">
              <span className="text-gradient">Achievements</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Competitions Section */}
        {achievementsByType.Competition.length > 0 && (
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-7 h-7 text-accent" />
                Competitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsByType.Competition.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="group rounded-xl border border-border glass overflow-hidden card-hover hover:border-accent"
                  >
                    {achievement.image && (
                      <div className="relative h-48 overflow-hidden bg-muted/50">
                        <Image
                          src={achievement.image}
                          alt={achievement.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold leading-tight group-hover:text-accent transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="flex-shrink-0 text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Contests Section */}
        {achievementsByType.Contest.length > 0 && (
          <ScrollReveal delay={0.05}>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-7 h-7 text-accent" />
                Programming Contests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsByType.Contest.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-6 rounded-xl border border-border glass card-hover hover:border-accent space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold leading-tight hover:text-accent transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="flex-shrink-0 text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Ratings Section */}
        {achievementsByType.Rating.length > 0 && (
          <ScrollReveal delay={0.08}>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-7 h-7 text-accent" />
                Platform Ratings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievementsByType.Rating.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-6 rounded-xl border border-border glass card-hover hover:border-accent space-y-2 text-center"
                  >
                    <h3 className="text-lg font-bold hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-accent font-medium pt-2">
                      Achieved in {achievement.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Milestones Section */}
        {achievementsByType.Milestone.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-7 h-7 text-accent" />
                Milestones
              </h2>
              <div className="space-y-4">
                {achievementsByType.Milestone.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-6 rounded-xl border border-border glass card-hover hover:border-accent"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold hover:text-accent transition-colors mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                      <span className="flex-shrink-0 text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
