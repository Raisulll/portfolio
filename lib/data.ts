export const siteConfig = {
  name: "MD Raisul Islam Rahad",
  email: "raisul.dev@gmail.com",
  location: "Dhaka, Bangladesh",
  description: "Robotics Enthusiast & Full-Stack Developer",
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Raisulll',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/raisul-islam-rahad',
    icon: 'linkedin',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/raisulislam.rahad.104/',
    icon: 'facebook',
  },
  {
    name: 'Email',
    url: 'mailto:raisul.dev@gmail.com',
    icon: 'mail',
  },
];

export const skills = [
  {
    category: "Programming Languages",
    // Added Java (CV), kept TypeScript (you're using it)
    techs: [
      "C/C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "Bash",
    ],
  },
  {
    category: "Web & Backend",
    // Added REST API, JWT, OAuth, WebSocket, Flutter — all explicitly in your CV
    // Removed Next.js (not in CV), MongoDB (you use PG/Oracle/Firebase/Supabase, not Mongo)
    techs: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "OAuth",
      "WebSocket",
      "Flutter",
    ],
  },
  {
    category: "Databases",
    // Separated into its own category — you have 4 distinct DBs, they deserve visibility
    techs: ["PostgreSQL", "OracleDB", "Firebase", "Supabase"],
  },
  {
    category: "Robotics & Embedded",
    // Added ESP32, Teensy, ZED Stereo Camera (all in CV)
    // Removed CUDA, Arduino, RaspberryPi — none of these appear anywhere in your CV
    techs: [
      "ROS",
      "OpenCV",
      "Jetson Xavier NX",
      "Jetson Orin Nano Super",
      "ESP32",
      "Teensy",
      "Depth Camera",
      "LiDAR",
    ],
  },
  {
    category: "AI & Computer Vision",
    // Removed TensorFlow, PyTorch — not in CV, big red flag to list these without experience
    // Based on actual project work: ZED depth, surveillance robot, Codebook AI, PagePlay chatbot
    techs: [
      "Computer Vision",
      "Autonomous Navigation",
      "Depth Estimation",
      "Object Detection",
      "LLM APIs",
    ],
  },
  {
    category: "Tools & Platforms",
    // Removed Docker, AWS, Figma, shadcn/ui — none in CV
    // Added GitHub (CV), LaTeX (CV)
    techs: ["Git", "GitHub", "Linux", "LaTeX", "Vercel", "VS Code"],
  },
];

export type Project = {
  id: number
  slug: string
  title: string
  category: string
  image: string
  thumbnail: string
  shortDesc: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  features: string[]
  github: string | null
  liveDemo: string | null
  year: number
  /** Optional deep-dive blocks rendered as the "How it works" section. */
  details?: { title: string; description: string }[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'autonomous-trolley',
    title: 'Autonomous Human-Following Trolley',
    category: 'Robotics',
    image: '/images/autonomous_trolley_cover.svg',
    thumbnail: '/images/autonomous_trolley_thumb.svg',
    shortDesc:
      'An intelligent trolley that autonomously follows a specific person using ZED stereo vision, YOLO detection, and person re-identification.',
    description:
      'A robotic trolley that autonomously follows a designated human operator. It fuses stereo depth perception from a ZED camera with person detection and re-identification, then navigates and avoids obstacles in real time on a modular ROS2 architecture.',
    problem:
      'Manually hauling carts and equipment is tiring and slows people down, while most "follow-me" systems lose the right person the moment a crowd, an obstacle, or changing lighting gets in the way.',
    solution:
      'I built a trolley that locks onto a specific operator using stereo depth and person re-identification, so it keeps following the correct person even when others walk past. YOLO + DeepSORT handle detection and tracking, ArUco markers offer an alternative follow mode, and visual SLAM with real-time obstacle avoidance keeps navigation safe — all orchestrated through ROS2.',
    techStack: [
      'ROS2',
      'Python',
      'C++',
      'ZED Stereo Camera',
      'YOLO',
      'DeepSORT',
      'OpenCV',
      'PyTorch',
      'Visual SLAM',
      'ArUco',
    ],
    features: [
      'Human following via person re-identification (ReID) that locks onto one operator',
      'Stereo depth perception and 3D spatial mapping with the ZED camera',
      'YOLO-based person detection paired with DeepSORT multi-object tracking',
      'ArUco marker tracking as an alternative, lighting-robust follow mode',
      'Real-time obstacle detection and avoidance',
      'Visual SLAM for localization and navigation',
      'Skeleton / body tracking for more robust human detection',
      'Modular ROS2 architecture with network video streaming and remote control',
    ],
    github: 'https://github.com/istiaqueahmedarik/Autonomous-Trolly',
    liveDemo: null,
    year: 2025,
    details: [
      {
        title: 'Modular ROS2 architecture',
        description:
          'The system is split into focused ROS2 nodes — camera publishing, detection, tracking, navigation, and control — so each capability can be developed, tested, and swapped independently. Dedicated apps cover production human-following, ArUco navigation, and obstacle-aware control.',
      },
      {
        title: 'Locking onto the right person',
        description:
          'YOLO detects people in frame and DeepSORT tracks them across frames, while a person re-identification (ReID) model fingerprints the designated operator. Together they let the trolley keep following the correct person even when others walk between them and the camera.',
      },
      {
        title: 'Depth-aware following',
        description:
          'The ZED stereo camera provides per-pixel depth, which the trolley uses to hold a comfortable following distance and build a 3D spatial map of its surroundings instead of relying on 2D vision alone.',
      },
      {
        title: 'Navigation and obstacle avoidance',
        description:
          'Visual SLAM handles localization and mapping while a real-time obstacle-detection layer lets the trolley slow down and reroute around people and objects in its path.',
      },
      {
        title: 'Fallback tracking modes',
        description:
          'When lighting or crowding makes ReID unreliable, the trolley falls back to ArUco-marker or skeleton/body tracking, and supports network video streaming for remote monitoring and joystick control.',
      },
    ],
  },
  {
    id: 2,
    slug: 'pageplay',
    title: 'PagePlay — Digital Library Platform',
    category: 'AI/Web',
    image: '/images/pageplay_cover.svg',
    thumbnail: '/images/pageplay_thumb.svg',
    shortDesc:
      'A digital library platform connecting readers, publishers, and admins — with an interactive in-browser PDF reader, AI book recommendations, reviews, and a blog.',
    description:
      'PagePlay is a full-stack digital library where readers discover and read books in the browser, publishers upload and sell their titles, and admins moderate the platform. It pairs an interactive PDF reader with AI-powered recommendations, reviews, and a blog across role-based experiences.',
    problem:
      'Reading and selling digital books is usually split across disconnected tools — one app to read, another to buy, and nowhere to discover what to read next or for independent publishers to reach readers directly.',
    solution:
      'I built PagePlay as one platform with three roles. Readers browse a catalog, read in an interactive in-browser PDF reader, build a personal library, write reviews, and get AI recommendations from a Gemini chatbot. Publishers upload books and track sales and revenue, while admins approve publishers, moderate content, and watch analytics — on a React + TypeScript frontend over an Express / PostgreSQL backend.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Supabase',
      'Gemini API',
    ],
    features: [
      'Three role-based experiences for readers, publishers, and administrators',
      'Interactive in-browser PDF reader with search, zoom, navigation, and bookmarks',
      'AI-powered book recommendations via a Gemini chatbot',
      'Text-to-speech read-aloud for books',
      'Personal library, reviews, and ratings',
      'Blog system with commenting',
      'Publisher dashboard with sales and revenue tracking',
      'Admin tools for publisher approval, content moderation, and analytics',
    ],
    github: 'https://github.com/Raisulll/PagePlay',
    liveDemo: null,
    year: 2024,
    details: [
      {
        title: 'Three roles, one platform',
        description:
          'Readers, publishers, and administrators each get a tailored experience. Readers discover and read books, publishers manage and sell their catalog, and admins approve publishers, moderate submissions, and oversee the whole platform.',
      },
      {
        title: 'Interactive PDF reader',
        description:
          'Books are read directly in the browser through a full PDF reader built on react-pdf and pdf.js — full-text search, zoom, page navigation, and bookmarking — so readers never leave the platform.',
      },
      {
        title: 'AI recommendations & read-aloud',
        description:
          "A Google Gemini–powered chatbot suggests books based on a reader's interests via the Vercel AI SDK, and a built-in text-to-speech engine can read books aloud for hands-free listening.",
      },
      {
        title: 'Publisher & admin tooling',
        description:
          'Publishers upload titles and track sales and revenue, while admins handle publisher approvals, content moderation, transaction monitoring, and platform analytics through dedicated dashboards.',
      },
      {
        title: 'Express + PostgreSQL backend',
        description:
          'A REST API on Express serves the React / TypeScript client, with PostgreSQL for data and Supabase handling authentication and file storage for book PDFs and assets.',
      },
    ],
  },
  {
    id: 3,
    slug: 'codebook',
    title: 'Codebook — Competitive Programming Codebook Builder',
    category: 'Desktop',
    image: '/images/codebook_cover.svg',
    thumbnail: '/images/codebook_thumb.svg',
    shortDesc:
      'A desktop app where competitive programmers share optimized code, collect snippets into a cart, and export a print-ready codebook PDF — with AI code explanations and real-time chat.',
    description:
      'Codebook is a desktop application for competitive programmers. Users share their optimized algorithms and templates, collect the ones they want into a cart, and generate a personal codebook PDF to carry into contests. A Gemini-powered assistant explains snippets and estimates time complexity, and users can chat with each other in real time.',
    problem:
      'Competitive programmers rely on a "codebook" — a curated set of optimized algorithms and templates they bring to contests — but assembling one means hunting through scattered repos and old submissions, with no easy way to share, understand, or compile them into a clean printable reference.',
    solution:
      'Codebook turns that into one workflow: programmers publish their best snippets, others browse and add the ones they need to a cart, and the app compiles the selection into a print-ready codebook PDF. A Gemini assistant explains how each snippet works and estimates its time complexity, while real-time chat lets users discuss approaches — with admins curating content and managing accounts.',
    techStack: [
      'Java',
      'Spring Boot',
      'Supabase',
      'PostgreSQL',
      'Gemini',
      'REST API',
    ],
    features: [
      'Share optimized algorithms and code templates with the community',
      'Add snippets to a cart and curate a personal collection',
      'Generate a print-ready codebook PDF from the selected snippets',
      'AI assistant that explains code and estimates time complexity (Gemini)',
      'Real-time chat between users',
      'Admin and user roles with content and account management',
    ],
    github: 'https://github.com/istiaqueahmedarik/Codebook',
    liveDemo: null,
    year: 2023,
    details: [
      {
        title: 'Build your contest codebook',
        description:
          'Competitive programmers publish their optimized algorithms and templates; others browse the library, add the snippets they want to a cart, and export the selection as a clean, print-ready codebook PDF to bring into contests.',
      },
      {
        title: 'AI code understanding',
        description:
          'A Google Gemini–powered assistant explains what a snippet does and estimates its time complexity, so users can trust and learn from the code they collect instead of pasting it blindly.',
      },
      {
        title: 'Real-time collaboration',
        description:
          'Built-in real-time chat lets users discuss problems, approaches, and shared snippets without leaving the app.',
      },
      {
        title: 'Roles & administration',
        description:
          "Regular users share and collect code, while admins manage accounts and curate the shared content that ends up in everyone's codebooks.",
      },
      {
        title: 'Java + Spring Boot backend',
        description:
          'The desktop client talks to a Spring Boot REST API, with Supabase (PostgreSQL, authentication, and storage) handling data and user accounts and Gemini powering the AI features.',
      },
    ],
  },
  {
    id: 4,
    slug: 'surveillance-robot',
    title: 'AI-Powered Surveillance Robot',
    category: 'Robotics',
    image: '/images/surveillance_robot_cover.svg',
    thumbnail: '/images/surveillance_robot_thumb.svg',
    shortDesc:
      'A mobile surveillance robot driven from a web dashboard — steered with an on-screen joystick over a real-time Socket.IO link, with an AI assistant for on-the-spot analysis.',
    description:
      'An AI-powered surveillance robot you operate from the browser. An ESP32-based robot connects to a Next.js dashboard where you drive it with an on-screen joystick over a real-time Socket.IO link, and an AI assistant — Google Gemini plus local Ollama models — helps interpret what the robot reports.',
    problem:
      'Monitoring an area manually is tedious and tied to a fixed spot, and most hobby robot builds give you raw teleoperation with no way to make sense of what the robot is seeing.',
    solution:
      'I paired an ESP32 robot with a Next.js control dashboard: a Socket.IO connection carries commands and telemetry in real time, an on-screen joystick steers the robot from any browser, and the Vercel AI SDK wires in Google Gemini and local Ollama models so an assistant can analyze and answer questions about what the robot encounters.',
    techStack: [
      'ESP32',
      'Arduino / C++',
      'Next.js',
      'TypeScript',
      'Socket.IO',
      'Gemini',
      'Ollama',
      'Tailwind CSS',
    ],
    features: [
      'Web dashboard to remotely operate the robot from any browser',
      'On-screen joystick control for intuitive steering',
      'Real-time command and telemetry link over Socket.IO',
      'ESP32 / Arduino firmware driving the robot hardware',
      'AI assistant powered by Google Gemini and local Ollama models',
      'Responsive UI built with Next.js, Tailwind, and Radix',
    ],
    github: 'https://github.com/istiaqueahmedarik/mmaProject',
    liveDemo: null,
    year: 2024,
    details: [
      {
        title: 'Browser-based teleoperation',
        description:
          'The robot is driven entirely from a Next.js web dashboard — an on-screen joystick sends movement commands, so you can operate it from a laptop or phone without any dedicated remote.',
      },
      {
        title: 'Real-time link over Socket.IO',
        description:
          'A Socket.IO connection carries control commands and telemetry between the dashboard and the robot with low latency, keeping driving responsive.',
      },
      {
        title: 'ESP32 firmware',
        description:
          "An Arduino/C++ sketch on an ESP32 receives commands and drives the robot's motors and onboard hardware.",
      },
      {
        title: 'AI assistant',
        description:
          'The Vercel AI SDK integrates Google Gemini alongside local Ollama models, so an assistant can analyze and answer questions about what the robot is monitoring.',
      },
    ],
  },
  {
    id: 5,
    slug: 'eyecare',
    title: 'EyeCare — Eye-Care Management Platform',
    category: 'Web',
    image: '/images/eyecare_cover.svg',
    thumbnail: '/images/eyecare_thumb.svg',
    shortDesc:
      'A full-stack platform connecting patients, doctors, hospitals, pharmacies, and delivery agencies for eye-care appointments, prescriptions, and medical-supply orders.',
    description:
      'EyeCare is a full-stack healthcare management system for eye care that brings five stakeholders — patients, doctors, hospitals, pharmacies, and delivery agencies — into one connected ecosystem covering appointments, prescriptions, medical-supply commerce, and delivery tracking.',
    problem:
      'Eye-care services are fragmented across separate systems — patients book appointments in one place, collect prescriptions in another, and buy eyewear or medicine somewhere else — making the whole journey slow, manual, and disconnected for everyone involved.',
    solution:
      'I built EyeCare as a single role-based platform where each stakeholder gets a tailored dashboard. Patients book specialists, view prescriptions, and order supplies; doctors manage appointments and write prescriptions; pharmacies run inventory and fulfil orders; and delivery agencies track deliveries — all on a React frontend backed by a Node/Express API over an Oracle database.',
    techStack: [
      'React',
      'Node.js',
      'Express',
      'Oracle Database',
      'PL/SQL',
      'Bootstrap',
      'Firebase',
      'Supabase',
      'Cloudinary',
      'Nodemailer',
    ],
    features: [
      'Role-based dashboards for patients, doctors, hospitals, pharmacies, and delivery agencies',
      'Appointment booking with doctor availability and status tracking',
      'Prescription creation, viewing, and download',
      'Medical-supply and eyewear store with cart, orders, and delivery tracking',
      'Pharmacy inventory management and order fulfilment',
      'OTP email verification and password reset via Nodemailer',
      'Image uploads for profiles and products via Cloudinary',
      'Transaction history across patients, shops, doctors, and hospitals',
    ],
    github: 'https://github.com/Raisulll/EyeCare',
    liveDemo: null,
    year: 2024,
    details: [
      {
        title: 'Five connected stakeholders',
        description:
          'Patients, doctors, hospitals, pharmacies, and delivery agencies each sign in to a role-specific dashboard, and the data model ties them together — an appointment links a patient to a doctor, a prescription links to that appointment, and an order links a patient to a pharmacy and a delivery agency.',
      },
      {
        title: 'Appointments & prescriptions',
        description:
          "Patients browse specialists and book against a doctor's available time slots; doctors review their schedule, consult, and issue prescriptions that patients can view and download, while hospitals coordinate their affiliated doctors.",
      },
      {
        title: 'Medical-supply commerce',
        description:
          'Pharmacies manage product inventory with images, patients add eyewear and supplies to a cart and place orders, and delivery agencies pick up assigned orders and update delivery status — with transactions recorded across every party.',
      },
      {
        title: 'Oracle-backed data layer',
        description:
          'The backend runs on an Oracle database with PL/SQL triggers, views, and functions — auto-generating order IDs, calculating patient age from date of birth, and enforcing referential integrity across the schema.',
      },
      {
        title: 'Auth, email & media services',
        description:
          'Firebase Admin handles authentication, Nodemailer sends OTP verification and password-reset emails, and Cloudinary stores profile and product images, all behind a RESTful Express API.',
      },
    ],
  },
  {
    id: 6,
    slug: 'virtualshop',
    title: 'VirtualShop — AI Shopping & Virtual Try-On',
    category: 'AI/Web',
    image: '/images/placeholder_virtualshop.svg',
    thumbnail: '/images/placeholder_virtualshop.svg',
    shortDesc:
      'A cross-platform shopping app with AR virtual try-on, a virtual closet, and a Gemini-powered shopping assistant.',
    description:
      'VirtualShop is a Flutter marketplace app where shoppers browse, try on, and buy products with the help of AI. It combines AR/3D product previews and a personal virtual closet with a Gemini-powered chat and voice assistant, all backed by a FastAPI + Supabase server with CLIP-based visual search.',
    problem:
      "Online shoppers can't tell how a product will actually look on them, and scrolling endless catalogs makes the right item hard to find — so they hesitate, return more, and lose trust in the store.",
    solution:
      'VirtualShop lets users try products on virtually with AR and a personal virtual closet, search the catalog by image using CLIP embeddings, and ask a Gemini-powered assistant — by text or voice — for recommendations. Sellers get their own dashboards, analytics, and storefronts, served by a FastAPI + Supabase backend with MCP tool-calling.',
    techStack: [
      'Flutter',
      'Dart',
      'FastAPI',
      'Python',
      'Supabase',
      'PostgreSQL (pgvector)',
      'Firebase',
      'Gemini',
      'CLIP',
      'AR / 3D',
    ],
    features: [
      'AR and 3D product previews with virtual try-on',
      'Personal virtual closet with shareable looks',
      'Gemini-powered shopping assistant via text and live voice',
      'Image-based semantic product search using CLIP embeddings',
      'Seller dashboards with analytics, products, and transactions',
      'Cart, checkout, reviews, likes, and product stories',
      'Firebase authentication with Google sign-in',
      'FastAPI + Supabase backend with MCP tool-calling',
    ],
    github: 'https://github.com/rf104/VirtualShop',
    liveDemo: null,
    year: 2025,
    details: [
      {
        title: 'AI shopping assistant',
        description:
          'A Gemini-powered assistant answers questions and recommends products through both chat and live voice, using speech-to-text and text-to-speech. On the server, FastAPI routes are auto-exposed as Model Context Protocol (MCP) tools, so the model can actually call backend functions — searching products, reading the cart, placing orders — instead of just replying with text.',
      },
      {
        title: 'Visual & semantic search',
        description:
          "Every uploaded product image is encoded into a 512-dimension CLIP (ViT-B-32) embedding stored in Supabase's pgvector database, letting shoppers find items by image or natural-language description rather than exact keywords.",
      },
      {
        title: 'AR try-on and virtual closet',
        description:
          'Products render as interactive 3D / AR models, and an in-app image editor with background removal lets users build a personal virtual closet of looks they can save and share with others.',
      },
      {
        title: 'Seller marketplace',
        description:
          'Sellers run their own storefronts through dedicated dashboards — adding and editing products, tracking transactions, reading reviews, and viewing analytics — alongside an admin view across the whole platform.',
      },
      {
        title: 'Cross-platform Flutter client',
        description:
          'A single Flutter codebase targets Android, iOS, web, and desktop, using Firebase for authentication and Supabase for data, storage, and realtime features.',
      },
    ],
  },
  {
    id: 7,
    slug: 'mongol-barota',
    title: 'MIST Mongol Barota — Mars Rover Team Website',
    category: 'Web',
    image: '/images/placeholder_mongolbarota.svg',
    thumbnail: '/images/placeholder_mongolbarota.svg',
    shortDesc:
      "The official website of MIST Mongol Barota — MIST's Mars Rover team — showcasing the team, its rovers, competitions, achievements, and recruitment.",
    description:
      'The official website for MIST Mongol Barota, the Mars Rover team of the Military Institute of Science and Technology. It presents the team and its divisions, the rovers they build, their competition record and achievements, news, media, research, sponsors, and a way for new members to join — built as a fast, responsive Next.js site.',
    problem:
      'A competitive university robotics team needs a credible public home — somewhere to show its rovers and results to sponsors and judges, share news, and recruit new members — instead of relying on scattered social-media posts.',
    solution:
      "As Team Lead, I built a polished, responsive website that tells the team's story end to end: dedicated pages for the team and its divisions, the rover fleet, competitions and achievements, news and media, research papers, sponsors, support, and member recruitment — with light/dark theming and a smooth, modern UI.",
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'shadcn/ui',
      'Recharts',
      'Vercel',
    ],
    features: [
      'Team and division profiles',
      'Rover showcase with build details',
      'Competitions and achievements pages',
      'News, media, and a photo gallery',
      'Research papers section',
      'Sponsors and support pages',
      'Member recruitment ("Join the team") with forms',
      'Responsive design with light and dark mode',
    ],
    github: 'https://github.com/Raisulll/MongolBarota_final',
    liveDemo: 'https://mongol-barota.mist.ac.bd/',
    year: 2025,
    details: [
      {
        title: 'A full team showcase',
        description:
          'Dedicated pages cover the team and its divisions, the rovers they build, their competition history, and achievements — giving sponsors, judges, and prospective members one credible place to understand the team.',
      },
      {
        title: 'News, media & research',
        description:
          "The site publishes news updates, a media and photo gallery, and a research-papers section so the team's ongoing work and results stay visible.",
      },
      {
        title: 'Recruitment & sponsorship',
        description:
          'A "Join" flow lets prospective members apply, while dedicated sponsors and support pages make it easy for backers to get involved.',
      },
      {
        title: 'Modern Next.js front end',
        description:
          "Built with Next.js and TypeScript, styled with Tailwind and Radix / shadcn UI components, with light/dark theming, charts via Recharts, and Vercel Analytics — deployed on Vercel and served at the team's official mist.ac.bd domain.",
      },
    ],
  },
];

export const experience = [
  {
    id: 1,
    organization: 'MIST Mongol Barota',
    role: 'Team Lead',
    period: 'June 2025 - Present',
    description:
      'Leading the overall team direction and strategy for University Rover Challenge 2026. Managing software, mechanical, and business divisions.',
    highlights: [
      'Overseeing development of autonomous rover for URC 2026',
      'Mentoring 50+ team members',
      'Managing technical roadmap and milestones',
      'Coordinating with stakeholders',
    ],
  },
  {
    id: 2,
    organization: 'MIST Mongol Barota',
    role: 'Software & Communication Co-Lead',
    period: 'March 2024 - May 2025',
    description:
      'Led software development team and managed technical communications for the rover project.',
    highlights: [
      'Developed autonomous navigation system (SLAM)',
      'Implemented real-time communication protocol',
      'Achieved 14th place in URC 2025',
      'Mentored 30+ software engineers',
    ],
  },
  {
    id: 3,
    organization: 'MIST Mongol Barota',
    role: 'Software Team Member',
    period: 'October 2022 - March 2024',
    description: 'Contributed to software systems for autonomous rover development.',
    highlights: [
      'Implemented OpenCV-based vision system',
      'Developed motor control firmware',
      'Contributed to SLAM algorithm optimization',
    ],
  },
  {
    id: 4,
    organization: 'MIST Computer Club',
    role: 'Executive Director',
    period: 'June 2025 - Present',
    description: 'Leading the computer club with focus on competitive programming and web development.',
    highlights: [
      'Organizing programming contests',
      'Managing 500+ club members',
      'Conducting workshops and seminars',
      'Coordinating inter-university competitions',
    ],
  },
  {
    id: 5,
    organization: 'MIST Computer Club',
    role: 'VP Programming & Mentor',
    period: 'April 2023 - June 2025',
    description: 'Mentored members in competitive programming and provided technical guidance.',
    highlights: [
      'Conducted 50+ training sessions',
      'Mentored 100+ competitive programmers',
      'Organized ICPC practice contests',
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: '11th Place — University Rover Challenge 2026',
    year: 2026,
    type: 'Competition',
    image: '/images/urc_2026_team.png',
    description:
      'Led MIST Mars Rover Society to secure 11th place worldwide in the prestigious University Rover Challenge 2026.',
  },
  {
    id: 2,
    title: '1st Runners-Up — Anatolian Rover Challenge 2024',
    year: 2024,
    type: 'Competition',
    image: '/images/anatolian_trophy_2024.png',
    description:
      'Achieved exceptional results with autonomous rover at Anatolian Rover Challenge, securing 1st runners-up position.',
  },
  {
    id: 3,
    title: '14th Place — University Rover Challenge 2025',
    year: 2025,
    type: 'Competition',
    image: '/images/urc_2025_team.png',
    description: 'Secured 14th place globally with improved autonomy and system integration.',
  },
  {
    id: 4,
    title: 'ICPC Asia Dhaka 2024 — Team MIST CodeCrafters',
    year: 2024,
    type: 'Competition',
    image: '/images/icpc_2024_team.png',
    description:
      'Competed in ICPC Asia Dhaka region as part of MIST CodeCrafters, advancing to regional finals.',
  },
  {
    id: 5,
    title: 'Independence Day Programming Contest 2023 — 2nd Place',
    year: 2023,
    type: 'Contest',
    image: '/images/independence_contest_2023.png',
    description: 'Secured 2nd place in national Independence Day programming contest.',
  },
  {
    id: 6,
    title: 'Competitive Programming',
    year: 2023,
    type: 'Milestone',
    image: null,
    description:
      'Active competitive programmer on Codeforces (Pupil, rating 1290) and CodeChef (3★, rating 1600), competing regularly in ICPC and national programming contests.',
  },
];

export const education = [
  {
    institution: "Military Institute of Science and Technology (MIST)",
    degree: "Bachelor of Science (B.Sc)",
    field: "Computer Science & Engineering",
    period: "2022 – 2026",
    cgpa: "3.43 / 4.00",
    status: "Graduated",
    thesis:
      "Multi-Modal Approach for Depth-Aware Autonomous Surveillance Navigation with Real-World Implementation",
    details:
      "One of Bangladesh's leading engineering universities under military administration, based in Dhaka. Known for its rigorous curriculum and strong emphasis on research and development in science and technology.",
  },
];
export const highlightStats = [
  { label: 'University Rover Challenge 2026', value: '11th Place' },
  { label: 'Anatolian Rover Challenge 2024', value: '1st Runners-Up' },
];
