import medicoImg from "./assets/images/Medico.png";
import codequestImg from "./assets/images/CodeQuest.png";
import projectmgtImg from "./assets/images/Projectmgt.png";
import trimmrImg from "./assets/images/Trimmr.png";
import notifyImg from "./assets/images/Notify.png";

export const siteConfig = {
  name: "HardikDhameeja",
  title: "HardikDhameeja - FullStack Web Developer",
  description: "Frontend developer and designer based in New Delhi, India. Specializing in React, React Native and creating digital experiences that inspire and connect.",
  url: "https://HardikDhameeja.vercel.app",
  email: "HardikDhameeja0810@gmail.com",
  social: {
    github: "https://github.com/HardikDhameeja08",
    linkedin: "https://www.linkedin.com/in/HardikDhameeja08/",
    twitter: "https://x.com/HardikDhameeja08",
  },
};

export const projects = [
  {
  slug: "medico",
  name: "Medico - Doctor Appointment System",
  shortName: "Medico",
  tagline: "Simplifying healthcare access through seamless doctor appointment booking",
  description:
    "Medico is a healthcare platform that enables users to book appointments with verified doctors, manage patient medical history, track doctor availability, and communicate securely — all through a clean, user-friendly interface.",
  type: "Full Stack Development • Healthcare Platform",
  year: "2025",
  tools: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "JWT Authentication",
    "Tailwind CSS",
  ],
  image: medicoImg,
  link: "https://medico-frontend-beta.vercel.app/",
  liveUrl: "https://medico-frontend-beta.vercel.app/",
  sourceUrl: "https://github.com/hardik211005/Medico",
  featured: true,
  status: "Web Application",
  role: "Full Stack Developer",
  team: "Solo Project",
  platform: "Web (Healthcare SaaS)",

  tldr: {
    what:
      "A full-stack doctor appointment and healthcare management system",
    who:
      "Patients seeking reliable medical appointments and doctors managing schedules efficiently",
    challenge:
      "Coordinating appointments, availability, and patient records securely in one system",
    outcome:
      "A scalable MERN-based platform with authentication, scheduling, and medical record management",
    whyItMatters:
      "Healthcare systems fail when access and organization are poor — Medico bridges that gap digitally",
  },

  problem: {
    intro:
      "Accessing timely healthcare remains a challenge due to fragmented systems and manual processes.",
    points: [
      "Patients struggle to find available and verified doctors",
      "Appointment booking is often manual or unreliable",
      "Medical history is scattered across hospitals and paperwork",
      "Doctor availability is poorly communicated",
    ],
    coreInsight:
      "The core issue isn't the lack of doctors — it's the lack of a centralized, secure, and user-friendly system to manage healthcare interactions.",
  },

  nonGoals: [
    "Replacing hospital ERP systems",
    "Providing emergency medical services",
    "Offering AI-based diagnosis",
    "Handling insurance claim processing",
  ],

  systemOverview: {
    intro: "Medico operates as a centralized healthcare coordination platform:",
    steps: [
      {
        title: "User Authentication",
        description: "Secure login for doctors and patients using JWT",
      },
      {
        title: "Doctor Availability",
        description: "Doctors manage schedules and availability slots",
      },
      {
        title: "Appointment Booking",
        description: "Patients book appointments based on real-time availability",
      },
      {
        title: "Patient History",
        description: "Medical records stored and accessed securely",
      },
      {
        title: "Secure Communication",
        description: "Doctor-patient interaction within the platform",
      },
    ],
    note:
      "All sensitive healthcare data is protected through authentication and controlled access.",
  },

  technicalDecisions: [
    {
      title: "MERN Stack for Full Control",
      points: [
        "Unified JavaScript stack across frontend and backend",
        "Rapid development and scalability",
        "Strong ecosystem support",
      ],
      outcome:
        "Enabled fast iteration with a clean separation of concerns",
    },
    {
      title: "JWT-Based Authentication",
      points: [
        "Secure role-based access (Doctor / Patient)",
        "Stateless session handling",
        "Simplified authorization logic",
      ],
      outcome:
        "Improved security while keeping the system lightweight",
    },
    {
      title: "Calendar-Based Scheduling",
      points: [
        "Visual representation of doctor availability",
        "Reduced appointment conflicts",
        "Improved booking experience",
      ],
      outcome:
        "Clear scheduling reduced no-shows and confusion",
    },
  ],

  techStack: [
    { label: "Frontend", value: "React + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express" },
    { label: "Database", value: "MongoDB" },
    { label: "Authentication", value: "JWT" },
    { label: "Scheduling", value: "Calendar-based slot system" },
  ],

  challenges: [
    {
      title: "Appointment Conflict Handling",
      problem:
        "Multiple users attempting to book the same time slot.",
      fix:
        "Atomic booking logic with server-side validation",
    },
    {
      title: "Secure Medical Data Storage",
      problem:
        "Handling sensitive patient records responsibly.",
      fix:
        "Strict access control and authenticated routes",
    },
    {
      title: "Doctor Availability Accuracy",
      problem:
        "Keeping availability updated in real time.",
      fix:
        "Availability management dashboard for doctors",
    },
  ],

  observations: [
    "Patients value simplicity over feature overload",
    "Doctors prefer fast schedule management tools",
    "Authentication builds trust in healthcare platforms",
    "Clean UI improves confidence in medical systems",
  ],

  ethics: [
    "Role-based access to medical records",
    "No public exposure of patient data",
    "Secure authentication for all users",
    "Minimal data collection philosophy",
  ],

  learnings: [
    "Healthcare software demands clarity and trust",
    "Security must be designed, not added later",
    "UX directly impacts patient confidence",
    "Scalable backend design prevents future bottlenecks",
  ],

  futureWork: [
    "Prescription management",
    "Doctor rating and review system",
    "Notification and reminder system",
    "Telemedicine integration",
    "Advanced analytics for doctors",
  ],

  whatYouCanLearn: [
    "How to build full-stack healthcare platforms",
    "Implementing secure authentication systems",
    "Designing appointment scheduling logic",
    "Managing sensitive user data responsibly",
    "Building scalable MERN applications",
  ],

  finalNote:
    "Medico demonstrates how thoughtful full-stack engineering can simplify healthcare access. The project focuses on reliability, security, and user experience — the pillars of any successful healthcare platform.",
},

  
  {
  slug: "codequest",
  name: "CodeQuest – Gamified Learning Platform",
  shortName: "CodeQuest",
  tagline: "Turning coding practice into an engaging game-like experience",
  description:
    "CodeQuest is a full-stack gamified learning platform designed to make programming fun, interactive, and consistent. Users learn multiple programming languages through challenges, earn XP and rewards, unlock levels, compete on leaderboards, and practice coding using an in-built compiler.",
  type: "Full Stack Learning Platform • Gamification",
  year: "2025",
  tools: [
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "NextAuth",
    "Tailwind CSS",
  ],
  image: codequestImg,
  link: "https://codequest-two.vercel.app/",
  liveUrl: "https://codequest-two.vercel.app/",
  sourceUrl: "https://github.com/hardik211005/codequest-ai",
  featured: true,
  status: "Active Development",
  role: "Full Stack Developer",
  team: "Solo Project",
  platform: "Web Application",

  tldr: {
    what:
      "A gamified platform that helps users learn programming through challenges, rewards, and hands-on coding",
    who:
      "Beginners and intermediate learners who struggle with consistency and motivation in coding",
    challenge:
      "Keeping learners engaged while ensuring meaningful skill development",
    outcome:
      "A feature-rich learning platform with gamification, real-time coding practice, and progress tracking",
    whyItMatters:
      "Most learners quit coding due to lack of engagement — CodeQuest turns learning into a habit through game mechanics",
  },

  problem: {
    intro:
      "Learning to code is more about consistency than intelligence, yet most platforms fail to keep users engaged.",
    points: [
      "Traditional tutorials are passive and boring",
      "Lack of motivation leads to learning drop-offs",
      "No real-time practice environment in many platforms",
      "Progress tracking is often unclear or missing",
    ],
    coreInsight:
      "The real challenge isn’t access to content — it’s sustained engagement. Learning improves when progress feels rewarding and visible.",
  },

  nonGoals: [
    "Replacing formal computer science degrees",
    "Providing professional certification",
    "Competing with full-fledged IDEs",
    "Optimizing for large-scale enterprise learning",
  ],

  systemOverview: {
    intro: "CodeQuest is built as a progression-based learning ecosystem:",
    steps: [
      {
        title: "User Authentication",
        description: "Secure login and session management using NextAuth",
      },
      {
        title: "Learning Paths",
        description: "Structured challenges across multiple programming languages",
      },
      {
        title: "In-built Compiler",
        description: "Hands-on coding practice directly within the platform",
      },
      {
        title: "Gamification Engine",
        description: "XP, levels, rewards, and achievements for motivation",
      },
      {
        title: "Leaderboards",
        description: "Global rankings to encourage healthy competition",
      },
    ],
    note:
      "The system is designed to reward consistency and practice rather than passive consumption.",
  },

  technicalDecisions: [
    {
      title: "Next.js for Performance & SEO",
      points: [
        "Server-side rendering for faster load times",
        "Optimized routing and page transitions",
        "Improved SEO for educational discoverability",
      ],
      outcome:
        "Delivered a fast, scalable, and search-friendly learning platform",
    },
    {
      title: "Prisma as the Database ORM",
      points: [
        "Type-safe database queries",
        "Simplified schema migrations",
        "Cleaner data modeling",
      ],
      outcome:
        "Reduced backend bugs and improved development speed",
    },
    {
      title: "Gamification as Core Infrastructure",
      points: [
        "XP and level-based progression",
        "Reward-driven engagement loops",
        "Leaderboard-based motivation",
      ],
      outcome:
        "Significantly improved user retention and daily engagement",
    },
  ],

  techStack: [
    { label: "Frontend", value: "Next.js + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express.js" },
    { label: "Database", value: "Prisma ORM" },
    { label: "Authentication", value: "NextAuth" },
    { label: "Practice Engine", value: "In-built Code Compiler" },
  ],

  challenges: [
    {
      title: "Balancing Fun vs Learning",
      problem:
        "Over-gamification risked distracting users from actual skill development.",
      fix:
        "Ensured XP rewards were tied strictly to successful problem-solving",
    },
    {
      title: "Secure Code Execution",
      problem:
        "Running user-submitted code safely on the server.",
      fix:
        "Sandboxed execution and strict resource limits",
    },
    {
      title: "Progression Fairness",
      problem:
        "Preventing users from gaming the XP system.",
      fix:
        "Validation rules and difficulty-weighted scoring",
    },
  ],

  observations: [
    "Users stay longer when progress is visible",
    "Leaderboards significantly increase repeat visits",
    "Hands-on coding boosts confidence faster than tutorials",
    "Gamification improves consistency, not just engagement",
  ],

  ethics: [
    "Secure authentication and protected user sessions",
    "No execution of untrusted code without sandboxing",
    "Transparent scoring and ranking logic",
    "Minimal personal data collection",
  ],

  learnings: [
    "Gamification works only when aligned with learning goals",
    "Visible progress is a powerful motivator",
    "Security is critical when handling user-generated code",
    "Learning platforms must balance fun and rigor",
  ],

  futureWork: [
    "Additional programming languages",
    "Daily coding streaks and challenges",
    "Peer-to-peer challenges",
    "Advanced analytics for learner insights",
    "Mobile-first learning experience",
  ],

  whatYouCanLearn: [
    "How to build gamified learning platforms",
    "Designing XP and reward systems",
    "Implementing secure authentication",
    "Managing user progression and leaderboards",
    "Balancing UX and educational value",
  ],

  finalNote:
    "CodeQuest is built on the belief that learning to code should feel rewarding, not overwhelming. By combining solid engineering with thoughtful gamification, the platform encourages learners to show up every day and improve — one challenge at a time.",
},
{
  slug: "trimmr",
  name: "Trimmr - Professional URL Shortener",
  shortName: "Trimmr",
  tagline: "Short links. Deep insights.",
  description:
    "Trimmr is a professional URL shortening platform with built-in analytics and tracking. It enables users to create custom short links, monitor real-time click activity, analyze geographic data, generate QR codes, and manage URLs at scale for marketing and business use cases.",
  type: "Web Application • Analytics Platform",
  year: "2025",
  tools: [
    "React.js",
    "REST APIs",
    "Analytics",
    "Charts.js",
  ],
  image: trimmrImg,
  link: "https://github.com/hardik211005/url-shortener", // live demo (if available)
  sourceUrl: "https://github.com/hardik211005/url-shortener",
  featured: true,
  status: "Production-ready MVP",
  role: "Full Stack Developer",
  team: "Solo Project",
  platform: "Web Application",

  tldr: {
    what:
      "A URL shortener with real-time analytics and tracking capabilities",
    who:
      "Marketers, creators, and businesses who need insight into link performance",
    challenge:
      "Providing meaningful analytics while keeping link creation fast and simple",
    outcome:
      "A scalable URL shortening platform with real-time tracking and visual analytics",
    whyItMatters:
      "Short links are useless without insight — Trimmr turns clicks into actionable data",
  },

  problem: {
    intro:
      "Most URL shorteners focus on link creation but neglect performance insights.",
    points: [
      "No visibility into who clicks and where",
      "Delayed or limited analytics",
      "Lack of branding and custom URLs",
      "Poor tooling for bulk link management",
    ],
    coreInsight:
      "The real value of a short link lies not in its length, but in the data it captures.",
  },

  nonGoals: [
    "Compete with large-scale enterprise analytics platforms",
    "Replace full marketing automation suites",
    "Provide ad attribution or conversion tracking",
    "Guarantee 100% bot-free traffic",
  ],

  systemOverview: {
    intro:
      "Trimmr operates as a high-throughput link tracking system:",
    steps: [
      {
        title: "URL Submission",
        description: "User enters long URL and optional custom alias",
      },
      {
        title: "Validation & Shortening",
        description: "Real-time validation and unique short code generation",
      },
      {
        title: "Redirect & Tracking",
        description: "Redirect requests logged with metadata",
      },
      {
        title: "Analytics Engine",
        description: "Processes click, device, and location data",
      },
      {
        title: "Visualization Layer",
        description: "Charts and dashboards for insights",
      },
    ],
    note:
      "The system prioritizes speed on redirect paths while capturing detailed analytics asynchronously.",
  },

  technicalDecisions: [
    {
      title: "Fast Redirect Path with Async Analytics",
      points: [
        "Redirect latency kept minimal",
        "Analytics captured without blocking user navigation",
        "Ensures smooth end-user experience",
      ],
      outcome:
        "High performance even under frequent link access",
    },
    {
      title: "Charts.js for Visual Insights",
      points: [
        "Clear, readable analytics dashboards",
        "Easy comparison of traffic over time",
      ],
      outcome:
        "Users can quickly understand link performance",
    },
    {
      title: "Authentication for Link Ownership",
      points: [
        "Secure access to analytics",
        "Per-user link management",
      ],
      outcome:
        "Prevents data leakage and enables multi-user support",
    },
  ],

  techStack: [
    { label: "Frontend", value: "React.js + Tailwind CSS" },
    { label: "Backend", value: "REST APIs" },
    { label: "Analytics", value: "Click & geo tracking engine" },
    { label: "Visualization", value: "Charts.js" },
    { label: "Auth", value: "User authentication system" },
  ],

  challenges: [
    {
      title: "Real-Time Analytics Accuracy",
      problem:
        "Handling high-frequency click events without lag.",
      fix:
        "Efficient event logging and aggregation strategies",
    },
    {
      title: "Geographic Data Reliability",
      problem:
        "IP-based location data can be inconsistent.",
      fix:
        "Used reliable geo-IP sources with graceful fallbacks",
    },
    {
      title: "Bulk URL Processing",
      problem:
        "Creating and managing many links efficiently.",
      fix:
        "Batch operations and optimized API endpoints",
    },
  ],

  observations: [
    "Users value analytics more than link customization",
    "Real-time charts increase engagement",
    "QR code generation is frequently used",
    "Bulk tools are critical for marketing workflows",
  ],

  ethics: [
    "No selling or sharing of click data",
    "Transparent analytics collection",
    "Opt-in authentication for advanced insights",
    "Minimal data retention policy",
  ],

  learnings: [
    "Redirect performance is non-negotiable",
    "Analytics UX matters as much as raw data",
    "Simple products become powerful with the right insights",
    "Scalability must be planned early for tracking systems",
  ],

  futureWork: [
    "Campaign-level analytics",
    "Custom branded domains",
    "Advanced bot detection",
    "Webhook & API access for integrations",
    "Team-based link management",
  ],

  whatYouCanLearn: [
    "How to build URL shortening systems",
    "Designing real-time analytics pipelines",
    "Balancing performance with data collection",
    "Visualizing metrics effectively",
    "Building scalable tracking APIs",
  ],

  finalNote:
    "Trimmr demonstrates how even simple utilities can deliver powerful value when paired with thoughtful analytics. The project focuses on speed, clarity, and actionable insights rather than unnecessary complexity.",
},

  {
  slug: "projectflow",
  name: "Project Management Platform",
  shortName: "ProjectFlow",
  tagline: "Plan smarter. Collaborate better. Deliver faster.",
  description:
    "ProjectFlow is a full-stack project management platform built to streamline team collaboration and productivity. It allows users to create projects, assign tasks, manage deadlines, track progress in real time, and collaborate efficiently using role-based access control.",
  type: "Full Stack PERN Productivity App",
  year: "2025",
  tools: [
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "Tailwind CSS",
  ],
  image: projectmgtImg,
  link: "https://project-management-gs.vercel.app/", 
  liveUrl: "https://project-management-gs.vercel.app/",
  sourceUrl: "https://github.com/hardik211005/PROJECT-MANAGEMENT",
  featured: true,
  status: "Feature-complete prototype",
  role: "Full Stack Developer",
  team: "Team of 3",
  platform: "Web Application",

  tldr: {
    what:
      "A project management platform for creating projects, managing tasks, and tracking team progress",
    who:
      "Small teams and developers who need structured task and deadline management",
    challenge:
      "Keeping teams aligned on tasks, priorities, and deadlines in a single workspace",
    outcome:
      "A fully functional project management app with real-time task updates and role-based access",
    whyItMatters:
      "Poor project visibility leads to missed deadlines — ProjectFlow keeps everyone aligned",
  },

  problem: {
    intro:
      "Teams often rely on scattered tools and informal processes to manage projects.",
    points: [
      "Tasks are tracked across chats, notes, and spreadsheets",
      "Deadlines are missed due to lack of visibility",
      "No clear ownership of tasks",
      "Access control is weak or non-existent",
    ],
    coreInsight:
      "Productivity doesn’t fail because of lack of effort — it fails due to lack of structure and clarity.",
  },

  nonGoals: [
    "Replacing enterprise-scale tools like Jira or Asana",
    "Providing time tracking or billing features",
    "Supporting extremely large organizations",
    "Automating project planning using AI",
  ],

  systemOverview: {
    intro:
      "ProjectFlow is structured around a collaborative task lifecycle:",
    steps: [
      {
        title: "User Authentication",
        description: "Secure login using Clerk authentication",
      },
      {
        title: "Project Creation",
        description: "Create and manage multiple projects",
      },
      {
        title: "Task Management",
        description: "Assign tasks, set deadlines, and define priorities",
      },
      {
        title: "Role-Based Access",
        description: "Admin and member roles with controlled permissions",
      },
      {
        title: "Progress Tracking",
        description: "Real-time task status updates and dashboards",
      },
    ],
    note:
      "The system emphasizes clarity, accountability, and team alignment.",
  },

  technicalDecisions: [
    {
      title: "PERN Stack for Productivity Workflows",
      points: [
        "Next.js for fast UI and scalable routing",
        "Node.js + Express for API flexibility",
        "Prisma for structured relational data modeling",
      ],
      outcome:
        "Enabled rapid development with clean separation of concerns",
    },
    {
      title: "Clerk Authentication & RBAC",
      points: [
        "Secure authentication out of the box",
        "Role-based access for admin and team members",
        "Reduced auth boilerplate and security risks",
      ],
      outcome:
        "Simplified user management while improving security",
    },
    {
      title: "Real-Time Task Updates",
      points: [
        "Immediate feedback on task status changes",
        "Better collaboration and reduced miscommunication",
      ],
      outcome:
        "Teams stay aligned without constant manual updates",
    },
  ],

  techStack: [
    { label: "Frontend", value: "Next.js + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express.js" },
    { label: "Database", value: "Prisma ORM" },
    { label: "Authentication", value: "Clerk" },
    { label: "Authorization", value: "Role-Based Access Control" },
  ],

  challenges: [
    {
      title: "Task Ownership Clarity",
      problem:
        "Tasks lacked clear responsibility across team members.",
      fix:
        "Introduced explicit task assignment and role-based permissions",
    },
    {
      title: "Deadline Management",
      problem:
        "Missed deadlines due to poor visibility.",
      fix:
        "Deadline indicators and progress-based task states",
    },
    {
      title: "Balancing Simplicity vs Features",
      problem:
        "Too many features could overwhelm users.",
      fix:
        "Focused on essential project and task workflows",
    },
  ],

  observations: [
    "Teams complete tasks faster with clear ownership",
    "Real-time updates reduce unnecessary communication",
    "Role-based access improves accountability",
    "Clean dashboards increase daily engagement",
  ],

  ethics: [
    "Strict role-based data access",
    "Secure authentication and session handling",
    "No unnecessary data collection",
    "Focus on productivity over surveillance",
  ],

  learnings: [
    "Structure and clarity drive productivity",
    "RBAC is essential in collaborative tools",
    "UX simplicity matters more than feature count",
    "Scalable data models save time later",
  ],

  futureWork: [
    "Activity timelines and audit logs",
    "Team notifications and reminders",
    "Project analytics and insights",
    "Third-party integrations (Slack, GitHub)",
    "Kanban-style task boards",
  ],

  whatYouCanLearn: [
    "How to build collaborative productivity tools",
    "Implementing role-based access control",
    "Designing task and project data models",
    "Building scalable PERN applications",
    "Balancing UX simplicity with functionality",
  ],

  finalNote:
    "ProjectFlow showcases how thoughtful full-stack engineering can bring clarity and structure to team workflows. The project emphasizes productivity, collaboration, and clean design over unnecessary complexity.",
},
  
  

  
  {
  slug: "notify",
  name: "Notify - Secure Notes Application",
  shortName: "Notify",
  tagline: "Simple, secure, and distraction-free note taking",
  description:
    "Notify is a beginner-friendly full-stack notes application that allows users to create, manage, and securely store personal notes. It uses authentication and encryption to ensure privacy, while maintaining a clean and responsive user experience.",
  type: "Security Application • Full Stack Development",
  year: "2025",
  tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  image: notifyImg,
  link: "https://github.com/HardikDhameeja08/notify",
  sourceUrl: "https://github.com/HardikDhameeja08/notify",
  featured: true,
  status: "Learning-focused Full Stack Project",
  role: "Full Stack Developer",
  team: "Solo Project",
  platform: "Web Application",

  tldr: {
    what: "A secure notes application with authentication and private storage",
    who: "Students and beginners who want a simple and secure notes app",
    challenge: "Ensuring data privacy while keeping the app beginner-friendly",
    outcome: "A functional MERN-based notes app with authentication and encryption",
    whyItMatters:
      "Personal notes often contain sensitive information — Notify ensures they remain private and protected"
  },

  problem: {
    intro:
      "Most beginner note-taking apps focus on features but overlook security and privacy.",
    points: [
      "Notes are often stored insecurely or in plain text",
      "Users lack control over who can access their data",
      "Authentication is missing in basic notes apps",
      "Poor UX discourages consistent usage"
    ],
    coreInsight:
      "A notes app should prioritize privacy by default, not as an afterthought."
  },

  nonGoals: [
    "Replacing advanced productivity tools like Notion",
    "Real-time collaboration",
    "Cloud-based document sharing",
    "Complex markdown editing"
  ],

  systemOverview: {
    intro: "Notify follows a simple and secure flow:",
    steps: [
      {
        title: "User Authentication",
        description: "Signup and login using JWT-based authentication"
      },
      {
        title: "Note Creation",
        description: "Users create and manage personal notes"
      },
      {
        title: "Secure Storage",
        description: "Notes are stored securely and linked to authenticated users"
      },
      {
        title: "Encryption Layer",
        description: "Sensitive data is protected using encryption techniques"
      },
      {
        title: "Quick Access",
        description: "Copy-to-clipboard and fast retrieval of notes"
      }
    ],
    note:
      "Each note is accessible only to its owner, ensuring privacy and security."
  },

  technicalDecisions: [
    {
      title: "JWT-Based Authentication",
      points: [
        "Ensures secure access to user notes",
        "Prevents unauthorized data access",
        "Lightweight and easy to implement"
      ],
      outcome: "Improved security without complicating the user experience"
    },
    {
      title: "MERN Stack for Learning & Scalability",
      points: [
        "Clear separation of frontend and backend",
        "Hands-on exposure to full stack workflows",
        "Easy future expansion"
      ],
      outcome: "A solid foundation for learning full stack development"
    },
    {
      title: "Minimal UI with Tailwind CSS",
      points: [
        "Clean and distraction-free interface",
        "Fast styling iteration",
        "Mobile-responsive design"
      ],
      outcome: "Improved usability and readability"
    }
  ],

  techStack: [
    { label: "Frontend", value: "React + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express" },
    { label: "Database", value: "MongoDB" },
    { label: "Authentication", value: "JWT" },
    { label: "Security", value: "Encryption & Protected APIs" }
  ],

  challenges: [
    {
      title: "Securing User Notes",
      problem:
        "Ensuring that notes remain accessible only to authenticated users.",
      fix:
        "Implemented protected routes and user-specific data access"
    },
    {
      title: "State Management Simplicity",
      problem:
        "Avoiding unnecessary complexity in a beginner-focused project.",
      fix:
        "Used simple React state patterns instead of heavy libraries"
    },
    {
      title: "User Experience Balance",
      problem:
        "Adding security without hurting usability.",
      fix:
        "Kept authentication flows minimal and intuitive"
    }
  ],

  observations: [
    "Users prefer fast access over feature overload",
    "Authentication increases trust even in simple apps",
    "Minimal UI improves focus and usability",
    "Security-first thinking is valuable even for small projects"
  ],

  ethics: [
    "User data accessible only after authentication",
    "No public exposure of notes",
    "Secure API routes",
    "Minimal data collection"
  ],

  learnings: [
    "Security should be considered from day one",
    "Simple apps can still demonstrate strong engineering principles",
    "Full stack fundamentals matter more than fancy features",
    "UX and security must coexist"
  ],

  futureWork: [
    "Search and filtering for notes",
    "Tag-based organization",
    "Cloud sync support",
    "Offline-first PWA enhancements"
  ],

  whatYouCanLearn: [
    "How to build a secure full stack application",
    "Implementing authentication with JWT",
    "Protecting user-specific data",
    "Designing clean and minimal UIs",
    "Understanding security basics in web apps"
  ],

  finalNote:
    "Notify was built as a learning-focused project to understand full stack development and application security. It demonstrates that even simple applications can be thoughtfully designed with privacy, usability, and scalability in mind."
},

];

export const skills = {
  expertise: [
    "Full Stack Dev",
    "Web Design",
    "UI/UX Design",
    "Canva Designing",
  ],
  tools: [
    "ReactJs",
    "ExpressJs",
    "JavaScript",
    "MongoDB",
    "NodeJs",
    "HTML/CSS",
    "Figma/Canva",
    "NextJs",
    "Vercel",
    "Github"
  ],
};
