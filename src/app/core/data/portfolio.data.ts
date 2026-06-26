export interface NavLink {
  label: string;
  href: string;
}

export interface KPIItem {
  value: string;
  label: string;
}

export interface TrustChip {
  label: string;
}

export interface ServiceCard {
  icon: string;
  name: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProjectArchNode {
  label: string;
  highlighted: boolean;
}

export interface ProjectCTA {
  label: string;
  href: string;
}

export interface Project {
  number: string;
  name: string;
  tag: string;
  outcome: string;
  tags: string[];
  description: string;
  archNodes: ProjectArchNode[];
  cta: ProjectCTA;
  filterTags: string[];
}

export interface SkillPill {
  label: string;
  isKey: boolean;
}

export interface SkillGroup {
  name: string;
  pills: SkillPill[];
}

export interface ProficiencyItem {
  name: string;
  level: string;
  width: number;
}

export interface LanguageCard {
  name: string;
  level: string;
}

export interface ExperienceBullet {
  text: string;
}

export interface ExperienceItem {
  period: string;
  badge: string;
  workType?: 'remote' | 'hybrid';
  role: string;
  company: string;
  description: string;
  bullets: ExperienceBullet[];
  techs: string[];
  isLive?: boolean;
}

export interface ContactLink {
  icon: string;
  main: string;
  sub: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#what' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const KPI_ITEMS: KPIItem[] = [
  { value: '3+', label: 'Years in production' },
  { value: '4', label: 'Industries served' },
  { value: '3', label: 'Working languages' },
  { value: '∞', label: 'Scalability ceiling' }
];

export const TRUST_CHIPS: TrustChip[] = [
  { label: 'SaaS Platforms' },
  { label: 'Gov Clients' },
  { label: 'Healthcare' },
  { label: 'EdTech' },
  { label: 'IoT Systems' },
  { label: 'Recruitment Tools' },
  { label: 'Real-time Apps' },
  { label: 'Telemedicine' }
];

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: '🚀',
    name: 'Build Your MVP',
    description: 'You have an idea and need a complete product built from scratch — fast, clean, and ready for real users. I handle architecture, backend, frontend, and deployment end-to-end.',
    tags: ['Full-stack delivery', 'Architecture', 'CI/CD setup', 'Production deploy']
  },
  {
    icon: '🤝',
    name: 'Join Your Team',
    description: 'You have a team and need a senior contractor who contributes from day one — no ramp-up, no hand-holding. I plug in, write clean code, and ship with your team.',
    tags: ['Backend engineering', 'Frontend dev', 'Code reviews', 'System design']
  },
  {
    icon: '🏗️',
    name: 'Own the Full Project',
    description: 'You have a brief and want someone to take full ownership. I scope it, hire talent if needed, lead delivery, and hand over a complete production-ready system with documentation.',
    tags: ['Project leadership', 'Team coordination', 'Full delivery', 'Handover docs']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss goals, constraints, and users. I ask the hard questions so nothing is assumed before we start.'
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'I design the system — data models, API contracts, tech choices — before writing a single line of code.'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Iterative development with regular check-ins. Clean code, tests included, documented as we go.'
  },
  {
    number: '04',
    title: 'Ship',
    description: 'Deployed, monitored, and handed over with docs. You own everything — code, infra, pipeline.'
  }
];

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Recruitment SaaS that evaluates candidates at scale',
    tag: 'Full-Stack · SaaS',
    outcome: 'Qodexia — secure test-taking, billing, CI/CD pipeline, Grafana monitoring',
    tags: ['Spring Boot', 'Angular', 'Keycloak', 'Docker'],
    description: 'Recruitment teams were drowning in unstructured interviews with no measurable output. I built a complete SaaS platform handling technical and behavioral evaluations, subscription billing, a secure proctored test engine, and a full Jenkins → SonarQube → Docker → Grafana pipeline so the team could ship weekly without breaking production.',
    archNodes: [
      { label: 'Angular SPA', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'API Gateway', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Keycloak', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Spring Cloud', highlighted: false },
      { label: '→', highlighted: false },
      { label: 'PostgreSQL', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Docker + Jenkins', highlighted: true }
    ],
    cta: { label: 'Visit →', href: 'https://evaliqo.com/' },
    filterTags: ['fullstack', 'backend']
  },
  {
    number: '02',
    name: 'IoT waste management system for the city of Riyadh',
    tag: 'Backend · IoT · Gov',
    outcome: 'IOTsquared — Riyadh Municipality, ZATCA, SIRC',
    tags: ['Spring Boot', 'ThingsBoard', 'Keycloak', 'Jenkins'],
    description: 'Backend engineering for three Saudi government clients under strict compliance and security requirements. Built an IoT waste tracking platform integrated with ThingsBoard for real-time sensor data, plus a ZATCA-compliant application managing import/export operations and regulatory reporting.',
    archNodes: [
      { label: 'Spring Boot', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'ThingsBoard IoT', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Keycloak Auth', highlighted: false },
      { label: '→', highlighted: false },
      { label: 'PostgreSQL', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Jenkins CI', highlighted: false }
    ],
    cta: { label: 'Discuss this work →', href: 'mailto:bader.semah1@gmail.com' },
    filterTags: ['backend']
  },
  {
    number: '03',
    name: 'Real-time platform for students managing study-abroad journeys',
    tag: 'Full-Stack · Real-time',
    outcome: 'DNDServ — video calls, WebSocket chat, AI autocomplete, ElasticSearch',
    tags: ['Spring Boot', 'WebSockets', 'Angular', 'ElasticSearch'],
    description: 'Students managing international programs had fragmented communication and zero real-time visibility. I built real-time video calling, WebSocket instant messaging with AI-powered autocomplete suggestions, appointment management, and ElasticSearch-powered full-text search across the entire platform.',
    archNodes: [
      { label: 'Angular', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'WebSockets', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Spring Boot', highlighted: false },
      { label: '→', highlighted: false },
      { label: 'ElasticSearch', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'MySQL', highlighted: false }
    ],
    cta: { label: 'Discuss this work →', href: 'mailto:bader.semah1@gmail.com' },
    filterTags: ['fullstack', 'realtime']
  },
  {
    number: '04',
    name: 'Complete telemedicine app — solo delivery in 6 months',
    tag: 'Full-Stack · Healthcare',
    outcome: 'Freelance — digital prescriptions, patient records, QR signature',
    tags: ['Spring Boot', 'Angular', 'JWT', 'MySQL'],
    description: 'Solo delivery of a full telemedicine platform in 6 months — from auth system to patient records, radiology reports, lab analyses, appointment scheduling, and legally-compliant electronic prescriptions signed with QR code digital signatures.',
    archNodes: [
      { label: 'Angular', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'Spring Boot', highlighted: false },
      { label: '→', highlighted: false },
      { label: 'Spring Security + JWT', highlighted: true },
      { label: '→', highlighted: false },
      { label: 'MySQL', highlighted: false },
      { label: '→', highlighted: false },
      { label: 'QR Digital Sign', highlighted: true }
    ],
    cta: { label: 'Discuss this work →', href: 'mailto:bader.semah1@gmail.com' },
    filterTags: ['fullstack', 'backend']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Backend',
    pills: [
      { label: 'Spring Boot', isKey: true },
      { label: 'Spring Cloud', isKey: true },
      { label: 'Spring Security', isKey: true },
      { label: 'Keycloak', isKey: false },
      { label: 'Eureka', isKey: false },
      { label: 'API Gateway', isKey: false },
      { label: 'Microservices', isKey: false },
      { label: 'WebSockets', isKey: false },
      { label: 'JWT / OAuth2', isKey: false },
      { label: 'Liquibase', isKey: false },
      { label: 'Maven', isKey: false }
    ]
  },
  {
    name: 'Frontend',
    pills: [
      { label: 'Angular', isKey: true },
      { label: 'TypeScript', isKey: true },
      { label: 'RxJS', isKey: false },
      { label: 'HTML5', isKey: false },
      { label: 'CSS3', isKey: false },
      { label: 'Bootstrap', isKey: false },
      { label: 'Responsive UI', isKey: false }
    ]
  },
  {
    name: 'Databases',
    pills: [
      { label: 'PostgreSQL', isKey: true },
      { label: 'MySQL', isKey: false },
      { label: 'ElasticSearch', isKey: false },
      { label: 'JPQL / SQL', isKey: false }
    ]
  },
  {
    name: 'DevOps & Tooling',
    pills: [
      { label: 'Docker', isKey: true },
      { label: 'Docker Compose', isKey: false },
      { label: 'Jenkins', isKey: false },
      { label: 'Nginx', isKey: false },
      { label: 'SonarQube', isKey: false },
      { label: 'Grafana', isKey: false },
      { label: 'Prometheus', isKey: false },
      { label: 'Nexus', isKey: false },
      { label: 'Git', isKey: false },
      { label: 'Jira', isKey: false }
    ]
  }
];

export const PROFICIENCY_ITEMS: ProficiencyItem[] = [
  { name: 'Backend (Java / Spring)', level: 'Expert', width: 90 },
  { name: 'Microservices & Architecture', level: 'Advanced', width: 87 },
  { name: 'Frontend (Angular / TS)', level: 'Expert', width: 83 },
  { name: 'Security (Keycloak / JWT)', level: 'Strong', width: 86 },
  { name: 'DevOps & CI/CD', level: 'Strong', width: 85 },
  { name: 'Database Design', level: 'Advanced', width: 84 }
];

export const LANGUAGE_CARDS: LanguageCard[] = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Pro' },
  { name: 'French', level: 'Pro' }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: 'Feb 2025 — Present',
    badge: 'Current',
    role: 'Full Stack Web Developer',
    company: 'IOTsquared — Tunisia 🇹🇳',
    description: 'Developed and maintained Necleus, an enterprise ecosystem of web applications used by major public-sector organizations across Saudi Arabia. The platform supports waste management, fleet management, contracting, landfill operations, planning, and real-time monitoring, integrating IoT data through ThingsBoard to provide operational visibility and analytics.\n\nResponsibilities\nDesigned, developed, and maintained full-stack features using Java, Spring Boot, Angular, and PostgreSQL.\nBuilt and enhanced RESTful APIs and responsive user interfaces for multiple business modules.\nIntegrated ThingsBoard telemetry into the platform to deliver real-time monitoring and operational insights.\nCollaborated with cross-functional teams in an Agile environment to deliver high-quality enterprise software.\nParticipated in code reviews, bug fixing, performance tuning, and continuous application improvements.\n\nKey Achievements\nOptimized the platform real-time monitoring map, improving the performance and responsiveness of live vehicle and asset tracking across multiple business domains.\nReduced the Angular application build time by approximately 50%, significantly improving development workflow and CI/CD efficiency.\nContributed to the implementation of a scalable real-time architecture using WebSockets, Redis, Kafka, and PostgreSQL to process and distribute live telemetry data.\nDelivered features supporting critical operations for Riyadh Municipality, ZATCA, SIRC, and multiple Saudi government ministries.\nContributed to the continuous evolution of a large-scale enterprise platform composed of multiple interconnected applications.',
    bullets: [
      { text: 'Optimized the platform real-time monitoring map, improving the performance and responsiveness of live vehicle and asset tracking across multiple business domains.' },
      { text: 'Reduced the Angular application build time by approximately 50%, significantly improving development workflow and CI/CD efficiency.' },
      { text: 'Contributed to the implementation of a scalable real-time architecture using WebSockets, Redis, Kafka, and PostgreSQL to process and distribute live telemetry data.' },
      { text: 'Delivered features supporting critical operations for Riyadh Municipality, ZATCA, SIRC, and multiple Saudi government ministries.' },
      { text: 'Contributed to the continuous evolution of a large-scale enterprise platform composed of multiple interconnected applications.' }
    ],
    techs: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Kafka', 'Redis', 'WebSockets', 'ThingsBoard', 'Docker', 'Git'],
    workType: 'hybrid',
    isLive: true
  },
  {
    period: 'Jan 2024 — Aug 2024',
    badge: '',
    role: 'Full Stack Web Developer',
    company: 'Qodexia — France 🇫🇷',
    description: 'Contributed to the development of <a href="https://evaliqo.com" target="_blank" rel="noopener noreferrer"><strong>Evaliqo</strong></a>, an AI-powered SaaS recruitment platform that helps organizations streamline hiring through intelligent candidate sourcing, skills assessments, AI matching, and applicant tracking. The platform automates recruitment workflows while providing recruiters with powerful evaluation and decision-making tools.\n\nResponsibilities\nDeveloped full-stack features using Java, Spring Boot, Angular, and PostgreSQL.\nDesigned and implemented secure REST APIs and responsive user interfaces.\nIntegrated Keycloak to provide secure authentication, authorization, role-based access control (RBAC), and identity management.\nBuilt and enhanced recruitment workflows, candidate management, and evaluation modules.\nIntegrated AI-powered services to improve candidate qualification and matching.\nOptimized application performance, security, and scalability.\nCollaborated with cross-functional teams in an Agile/Scrum environment to deliver high-quality software.\n\nKey Achievements\nContributed to the development of an AI-powered recruitment platform, improving hiring and candidate evaluation workflows.\nImplemented secure authentication and authorization using Keycloak, enabling centralized identity management and fine-grained access control.\nDeveloped scalable backend services and responsive Angular interfaces for a cloud-based SaaS application.\nEnhanced application performance and user experience through frontend and backend optimizations.\nContributed to the continuous evolution of a secure, scalable, and maintainable enterprise recruitment platform.',
    bullets: [
      { text: 'Contributed to the development of an AI-powered recruitment platform, improving hiring and candidate evaluation workflows.' },
      { text: 'Implemented secure authentication and authorization using Keycloak, enabling centralized identity management and fine-grained access control.' },
      { text: 'Developed scalable backend services and responsive Angular interfaces for a cloud-based SaaS application.' },
      { text: 'Enhanced application performance and user experience through frontend and backend optimizations.' },
      { text: 'Contributed to the continuous evolution of a secure, scalable, and maintainable enterprise recruitment platform.' }
    ],
    techs: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Keycloak', 'REST APIs', 'Docker', 'Git', 'JWT', 'OAuth 2.0', 'OpenID Connect (OIDC)', 'CI/CD', 'Agile/Scrum', 'AI Integration', 'SaaS Development'],
    workType: 'remote',
    isLive: false
  },
  {
    period: 'Jan 2023 — Sep 2023',
    badge: '',
    role: 'Full-Stack Java Developer',
    company: 'DNDServ — Tunisia 🇹🇳',
    description: 'Built a multi-module international mobility platform with real-time communication and intelligent search.',
    bullets: [
      { text: 'Real-time video calling and WebSocket instant messaging' },
      { text: 'AI-powered message autocomplete for better UX' },
      { text: 'ElasticSearch full-text search across the platform' }
    ],
    techs: ['Spring Boot', 'WebSockets', 'Angular', 'ElasticSearch', 'MySQL'    ],
    workType: 'remote',
    isLive: false
  },
  {
    period: 'May 2022 — Nov 2022',
    badge: '',
    role: 'Full-Stack Developer — Freelance',
    company: 'Healthcare Sector',
    description: 'Solo delivery of a complete telemedicine platform in 6 months.',
    bullets: [
      { text: 'Patient records, radiology reports, appointment scheduling' },
      { text: 'Electronic prescriptions with QR Code digital signature' },
      { text: 'JWT + Spring Security authentication system' }
    ],
    techs: ['Spring Boot', 'Spring Security', 'JWT', 'Angular', 'MySQL'    ],
    workType: 'remote',
    isLive: false
  }
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: '✉️',
    main: 'bader.semah1@gmail.com',
    sub: 'Email — preferred for project discussions',
    href: 'mailto:bader.semah1@gmail.com'
  },
  {
    icon: '💼',
    main: 'linkedin.com/in/semah-bader',
    sub: 'LinkedIn — view full profile',
    href: 'https://www.linkedin.com/in/semah-bader-4483671b8/'
  },
  {
    icon: '📱',
    main: '(+216) 94 344 306',
    sub: 'WhatsApp / Phone — Tunisia',
    href: 'tel:+21694344306'
  }
];

export interface FooterData {
  logoText: string;
  name: string;
  email: string;
  emailHref: string;
  tagline: string;
  year: string;
}

export const FOOTER_DATA: FooterData = {
  logoText: 'Bader',
  name: 'Bader Semah',
  email: 'bader.semah1@gmail.com',
  emailHref: 'mailto:bader.semah1@gmail.com',
  tagline: 'Available for freelance worldwide',
  year: '2025'
};
