import type { Project, BlogPost, SkillCategory, Certificate, Education, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HERO_ROLES = [
  "Full Stack Developer",
  "Open Source Contributor",
  "Problem Solver",
  "UI/UX Enthusiast",
  "Lifelong Learner",
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology",
    major: "Computer Science & Engineering",
    institution: "Your University Name",
    location: "Your City, State",
    startYear: "2021",
    endYear: "2025",
    gpa: "8.6 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Machine Learning",
      "Web Technologies",
      "Cloud Computing",
    ],
    achievements: [
      "Academic Excellence Award — 2nd Year",
      "Department Topper — 3rd Semester",
      "Best Final Year Project — Department Level",
      "Class Representative — 3rd & 4th Year",
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 82 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Framer Motion", level: 70 },
      { name: "Redux Toolkit", level: 72 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 76 },
      { name: "Express.js", level: 74 },
      { name: "FastAPI", level: 68 },
      { name: "REST APIs", level: 84 },
      { name: "GraphQL", level: 60 },
      { name: "WebSockets", level: 62 },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: "Cloud",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 65 },
      { name: "AWS (Basics)", level: 58 },
      { name: "Linux / Bash", level: 72 },
      { name: "Figma", level: 68 },
      { name: "Postman", level: 82 },
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    credentialId: "AWS-CPE-XXXXXX",
    icon: "Cloud",
    color: "#FF9900",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "Oct 2024",
    credentialId: "META-FE-XXXXXX",
    icon: "Code2",
    color: "#0866FF",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Aug 2024",
    credentialId: "FCC-FSWD-XXXXXX",
    icon: "Globe",
    color: "#00C4B8",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM (Coursera)",
    date: "May 2024",
    credentialId: "IBM-PDS-XXXXXX",
    icon: "BarChart2",
    color: "#054ADA",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google (Coursera)",
    date: "Mar 2024",
    credentialId: "GOOG-UX-XXXXXX",
    icon: "Layers",
    color: "#4285F4",
  },
  {
    title: "GitHub Actions CI/CD",
    issuer: "GitHub",
    date: "Feb 2024",
    credentialId: "GH-CICD-XXXXXX",
    icon: "GitBranch",
    color: "#238636",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "taskflow-pro",
    title: "TaskFlow Pro",
    description:
      "A full-stack Kanban-style task management app with real-time collaboration, drag-and-drop boards, and team workspaces.",
    longDescription:
      "TaskFlow Pro is a production-grade task management platform built for modern development teams. It features real-time synchronization via WebSockets so every team member sees updates instantly without page refresh. The drag-and-drop interface uses dnd-kit under the hood and supports complex nested task structures. Authentication uses JWT with refresh tokens, and the backend is powered by Node.js with PostgreSQL for relational data integrity. The frontend is a Next.js 14 App Router application with server components for initial load performance and client components for interactive elements.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Tailwind CSS", "Socket.io", "JWT", "Docker"],
    liveUrl: "https://taskflow-demo.example.com",
    githubUrl: "https://github.com/yourname/taskflow-pro",
    featured: true,
    image: "/project-taskflow.png",
    gradient: "from-blue-600 to-indigo-700",
    challenges: [
      "Implementing conflict-free real-time updates when multiple users edit simultaneously",
      "Optimizing PostgreSQL queries for complex board-task-subtask hierarchies",
      "Building an accessible drag-and-drop experience that works on touch devices",
    ],
    outcomes: [
      "Achieved sub-100ms latency for real-time updates via Redis Pub/Sub",
      "Reduced initial page load by 60% using Next.js server components",
      "100% keyboard navigable — passes WCAG 2.1 AA audit",
    ],
    date: "December 2024",
  },
  {
    slug: "devblog-cms",
    title: "DevBlog CMS",
    description:
      "A markdown-based personal blogging platform with syntax highlighting, tag filtering, RSS feed, and SEO-optimised static generation.",
    longDescription:
      "DevBlog CMS is a content management system designed for developers who write. It parses MDX files at build time using Next.js Static Site Generation, meaning zero database costs and instant page loads from a CDN. The syntax highlighter supports 40+ languages via Shiki with theme-aware dark/light mode. Tags are indexable and each post gets auto-generated Open Graph images. An auto-generated RSS feed makes it compatible with feed readers. The admin interface allows drafting, scheduling, and publishing posts from a browser without touching git.",
    tags: ["Next.js", "MDX", "TypeScript", "CSS"],
    techStack: ["Next.js 14", "MDX", "TypeScript", "Tailwind CSS", "Shiki", "RSS", "Vercel"],
    liveUrl: "https://devblog-demo.example.com",
    githubUrl: "https://github.com/yourname/devblog-cms",
    featured: true,
    image: "/project-devblog.png",
    gradient: "from-emerald-600 to-teal-700",
    challenges: [
      "Generating Open Graph images at build time without a paid service",
      "Implementing incremental static regeneration to update posts without full rebuilds",
      "Making MDX content fully type-safe with custom component mappings",
    ],
    outcomes: [
      "100/100 Lighthouse score across all pages",
      "Build-time OG image generation using Satori — zero third-party dependency",
      "Posts update within 60 seconds via ISR without any manual redeploy",
    ],
    date: "October 2024",
  },
  {
    slug: "weatherwise-app",
    title: "WeatherWise",
    description:
      "A beautiful weather PWA with 7-day forecasts, interactive radar maps, air quality index, and offline support via service workers.",
    longDescription:
      "WeatherWise is a Progressive Web Application that delivers an experience as polished as native weather apps. It uses the OpenWeatherMap API for current conditions and a 7-day forecast, with hourly breakdowns. The interactive radar map is built on Leaflet.js with animated precipitation overlays. Service workers cache the last known forecast so the app is fully usable offline — users see their last location's data with a staleness indicator. The app detects location via the Geolocation API with a manual search fallback. Animations are physics-based to match weather mood.",
    tags: ["React", "PWA", "API", "Leaflet"],
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Service Worker", "Leaflet.js", "OpenWeatherMap API", "Vite", "Workbox"],
    liveUrl: "https://weatherwise-demo.example.com",
    githubUrl: "https://github.com/yourname/weatherwise-app",
    featured: false,
    image: "/project-weather.png",
    gradient: "from-sky-500 to-cyan-600",
    challenges: [
      "Handling offline mode gracefully with stale-while-revalidate caching strategy",
      "Animating weather icons without heavy GIF or video assets",
      "Making the radar map performant on low-end mobile devices",
    ],
    outcomes: [
      "Installable PWA with offline support — works in airplane mode",
      "3.2s Time to Interactive on 3G connection",
      "Animated SVG weather icons shaved 400KB off the bundle vs GIF alternatives",
    ],
    date: "August 2024",
  },
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    description:
      "An AI-powered resume builder that tailors content to job descriptions, scores ATS compatibility, and exports to PDF in real-time.",
    longDescription:
      "AI Resume Builder bridges the gap between job seekers and hiring systems. Users paste a job description and their background, and the AI (powered by OpenAI GPT-4o) rewrites bullet points with quantifiable outcomes aligned to the job requirements. A scoring engine checks keyword density, section completeness, and formatting against 200+ ATS parsers. The live PDF preview re-renders as users type using React-PDF. All processing happens server-side in Next.js Route Handlers to keep the API key secure. The app stores resumes in Supabase with Row Level Security.",
    tags: ["Next.js", "AI/ML", "Supabase", "TypeScript"],
    techStack: ["Next.js 14", "TypeScript", "OpenAI API", "Supabase", "React-PDF", "Tailwind CSS", "Zod", "React Hook Form"],
    liveUrl: "https://ai-resume-demo.example.com",
    githubUrl: "https://github.com/yourname/ai-resume-builder",
    featured: true,
    image: "/project-resume.png",
    gradient: "from-purple-600 to-pink-600",
    challenges: [
      "Streaming AI output to the UI in real time without overwhelming React re-renders",
      "Building an accurate ATS scoring algorithm from scratch using public ATS documentation",
      "Generating pixel-perfect PDFs from React components in a server environment",
    ],
    outcomes: [
      "Users report 3× more interview callbacks after using the ATS optimisation feature",
      "AI suggestions streamed at ~50 tokens/second with zero visible lag",
      "Supabase RLS ensures no user ever sees another user's resumes",
    ],
    date: "June 2024",
  },
  {
    slug: "splitease",
    title: "SplitEase",
    description:
      "A minimal expense-splitting app for friend groups — create groups, add expenses, and auto-calculate who owes whom.",
    longDescription:
      "SplitEase is the expense tracker you actually want to use after a trip. Creating a group takes 10 seconds — no email verification required. Users add expenses by snapping a receipt photo (OCR extracts the amount automatically via Google Vision API), or by typing manually. The settlement engine uses a greedy algorithm to minimise the number of transactions needed to settle all debts, which is a significant improvement over the naive approach. Groups can be shared via a short URL so even non-registered friends can view balances. Dark mode with offline persistence via IndexedDB.",
    tags: ["React Native", "Node.js", "MongoDB", "OCR"],
    techStack: ["React Native", "Expo", "Node.js", "MongoDB", "Google Vision API", "Express", "JWT", "IndexedDB"],
    liveUrl: "https://splitease-demo.example.com",
    githubUrl: "https://github.com/yourname/splitease",
    featured: false,
    image: "/project-split.png",
    gradient: "from-orange-500 to-red-600",
    challenges: [
      "Implementing a correct and optimal debt-minimisation algorithm",
      "Making OCR reliable across different receipt formats and lighting conditions",
      "Syncing offline changes without conflicts when connectivity is restored",
    ],
    outcomes: [
      "Debt minimisation reduces average settlement transactions by 40% vs. naive approach",
      "OCR accuracy of 94% on receipts in good lighting conditions",
      "Zero-dependency offline mode — fully functional without internet after first load",
    ],
    date: "March 2024",
  },
  {
    slug: "codecollab",
    title: "CodeCollab",
    description:
      "A real-time collaborative code editor with language-aware syntax highlighting, shared terminals, and video chat integration.",
    longDescription:
      "CodeCollab is built for pair programming sessions without the friction of screen sharing. Multiple users can edit the same file simultaneously with cursor positions visible in real time, powered by Yjs CRDTs (conflict-free replicated data types) — the same technology that powers Google Docs. The Monaco editor (same engine as VS Code) provides language-aware autocompletion for 15 languages. Shared terminals run in Docker containers sandboxed per session, so users can execute code without risking the host. WebRTC video chat is peer-to-peer, meaning no video data passes through our servers.",
    tags: ["WebSocket", "React", "Monaco", "Docker"],
    techStack: ["React 18", "TypeScript", "Monaco Editor", "Yjs", "WebSockets", "WebRTC", "Docker", "Node.js", "Redis"],
    liveUrl: "https://codecollab-demo.example.com",
    githubUrl: "https://github.com/yourname/codecollab",
    featured: false,
    image: "/project-collab.png",
    gradient: "from-violet-600 to-indigo-700",
    challenges: [
      "Integrating Yjs CRDT with Monaco Editor without breaking standard editor shortcuts",
      "Sandboxing user code execution in Docker containers with strict resource limits",
      "Maintaining sub-50ms latency for cursor position broadcasting across 10 simultaneous users",
    ],
    outcomes: [
      "Sub-30ms cursor broadcast latency achieved via WebSocket with binary message encoding",
      "Docker sandbox prevents any code from accessing host filesystem or network",
      "Supports 15 languages with zero configuration — language detected from file extension",
    ],
    date: "January 2024",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "react-server-components-explained",
    title: "React Server Components — What No One Tells You",
    excerpt:
      "Everyone talks about RSC improving performance. But there are tradeoffs, gotchas, and mental model shifts that most tutorials skip over. Let's go deep.",
    content: `React Server Components (RSC) shipped as stable in React 18 and Next.js 13+ made them the default. The pitch is compelling: fetch data on the server, send only HTML to the client, and ship less JavaScript. But after building three production apps with RSC, I've collected a list of things that surprised me.

## The Mental Model Shift Is Real

The biggest hurdle isn't technical — it's conceptual. You're no longer writing components that run in the browser. A Server Component runs once, on the server, during the request. It has no state, no effects, no event handlers. Think of it as a template function that returns JSX.

The moment you need interactivity — a click handler, a useState, a useEffect — you reach for the \`"use client"\` directive. But here's what trips people up: \`"use client"\` doesn't mean "runs only on the client." It means "this component and everything it imports can run on both server and client." It's a boundary, not a toggle.

## The Async Boundary

Server Components can be async! This is genuinely magical:

\`\`\`tsx
async function UserProfile({ userId }: { userId: string }) {
  const user = await db.users.findById(userId); // direct DB call!
  return <div>{user.name}</div>;
}
\`\`\`

No useEffect, no loading state, no API route. You query the database directly inside the component. The component suspends until the data is ready, and Next.js streams the HTML to the client as each piece resolves.

## The Gotchas

**Serialisation boundaries**: Props passed from a Server Component to a Client Component must be serialisable — no functions, no class instances, no Dates (use strings). This bites you when you try to pass an ORM object directly.

**Third-party libraries**: Many npm packages assume they run in a browser. They use \`window\`, \`document\`, or top-level \`useEffect\`. These break inside Server Components. Always check if a library has a \`"use client"\` directive at its entry point.

**Context doesn't work**: React Context is a client-side concept. If you need global state, you have two options: prop-drill through Server Components (less code than you'd think), or create a Client Component wrapper that provides context to its subtree.

## When to Use What

Use Server Components for: data fetching, large dependencies (syntax highlighters, markdown parsers), content that doesn't change per interaction.

Use Client Components for: event handlers, browser APIs, animations, anything that changes without a page navigation.

The default in Next.js 14 App Router is Server Component. Only opt into client when you need to. Most of your app should stay on the server.`,
    tags: ["React", "Next.js", "TypeScript", "Performance"],
    date: "January 15, 2025",
    readTime: 8,
    coverGradient: "from-blue-600 to-indigo-700",
  },
  {
    slug: "css-container-queries-practical",
    title: "CSS Container Queries — The End of Viewport-Only Responsiveness",
    excerpt:
      "Media queries ask 'how wide is the screen?' — container queries ask 'how wide is my parent?' The difference changes everything about component design.",
    content: `For decades, responsive design meant one thing: media queries keyed to viewport width. Your sidebar is 300px on desktop and full-width on mobile. Your card grid is 3 columns on large screens and 1 column on small screens. This works, until you try to reuse a component in different layout contexts.

## The Problem with Media Queries

Imagine a \`ProductCard\` component that shows an image, title, price, and a description. On the homepage, it lives in a wide 4-column grid. On the checkout sidebar, it's cramped into a 240px panel. With media queries, you can't distinguish between these contexts — the viewport is the same size. You end up creating \`ProductCardLarge\` and \`ProductCardSmall\` variants, or you pass a \`compact\` prop. Neither is satisfying.

## Container Queries to the Rescue

Container queries let a component respond to the size of its parent container, not the viewport. You define a containment context on the parent, then query it from the child:

\`\`\`css
/* Parent */
.card-grid {
  container-type: inline-size;
  container-name: card-grid;
}

/* Child responds to parent's width */
@container card-grid (min-width: 400px) {
  .product-card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}
\`\`\`

Now \`ProductCard\` is truly self-contained. Put it anywhere — a sidebar, a modal, a full-width section — and it adapts to wherever it finds itself.

## Browser Support in 2025

Container queries are now supported in all modern browsers with over 90% global coverage. The main holdout was Firefox, which shipped support in v110 (early 2023). You can use them in production today with a simple feature detection fallback.

## Practical Patterns

**The self-contained card**: Define container on the card wrapper, query inside the card to switch between stacked and horizontal layouts.

**The adaptive sidebar**: A sidebar widget that shows full content at ≥280px and collapses to icon-only below that — regardless of where it's placed.

**The responsive table**: A data table that switches to a card-based list layout when its container is narrow, keeping all data visible without horizontal scroll.

Container queries don't replace media queries — you still need viewport queries for page-level layout decisions. But for component-level responsiveness, container queries are now the tool of choice.`,
    tags: ["CSS", "Frontend", "Responsive Design"],
    date: "December 28, 2024",
    readTime: 6,
    coverGradient: "from-emerald-600 to-teal-700",
  },
  {
    slug: "typescript-utility-types-deep-dive",
    title: "TypeScript Utility Types You're Not Using Enough",
    excerpt:
      "Partial, Required, Pick, Omit — you know those. But Awaited, NoInfer, ReturnType, and Discriminated Unions can save you hundreds of type annotations.",
    content: `TypeScript ships with a standard library of utility types that transform existing types into new ones. Most developers learn \`Partial<T>\`, \`Required<T>\`, \`Pick<T, K>\`, and \`Omit<T, K>\` in their first week. But the standard library goes much deeper. Here are the ones that changed how I write TypeScript.

## ReturnType and Parameters

Stop duplicating types. If a function's return value is already typed, extract it:

\`\`\`typescript
async function fetchUser(id: string) {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json() as Promise<{ id: string; name: string; email: string }>;
}

type User = Awaited<ReturnType<typeof fetchUser>>;
// User = { id: string; name: string; email: string }
\`\`\`

\`Awaited\` unwraps Promises. Combine it with \`ReturnType\` and you never have to export a separate \`User\` type — it's derived automatically. If the function's return type changes, all downstream types update for free.

## Discriminated Unions

This is TypeScript's most powerful pattern for modelling states:

\`\`\`typescript
type ApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function render(state: ApiState<User>) {
  if (state.status === 'success') {
    // TypeScript KNOWS state.data exists here
    return <div>{state.data.name}</div>;
  }
  if (state.status === 'error') {
    // TypeScript KNOWS state.error exists here
    return <div>{state.error}</div>;
  }
}
\`\`\`

The discriminant property (\`status\`) lets TypeScript narrow the union automatically. No optional chaining, no non-null assertions.

## Template Literal Types

Type-safe event names, route strings, CSS properties:

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
type Route = \`/\${string}\`;
type CSSUnit = \`\${number}px\` | \`\${number}rem\` | \`\${number}%\`;
\`\`\`

## satisfies Operator (TypeScript 4.9+)

The \`satisfies\` operator validates a value against a type without widening it:

\`\`\`typescript
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<string, string | number[]>;

// palette.red is still number[], not string | number[]
palette.red.map(v => v * 2); // ✅ Works!
\`\`\`

Without \`satisfies\`, you'd annotate with the full type and lose the specific information. With it, TypeScript checks the shape but preserves the narrower types.`,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    date: "November 10, 2024",
    readTime: 7,
    coverGradient: "from-purple-600 to-pink-600",
  },
  {
    slug: "git-workflow-fresher",
    title: "The Git Workflow That Will Get You Hired",
    excerpt:
      "Interviewers look at your GitHub history. Here's the commit discipline, branching strategy, and PR etiquette that signals professional readiness.",
    content: `Your GitHub profile is your public portfolio. Every commit message, every PR description, every branch name tells a story. Here's how to tell the right one.

## Conventional Commits — The Standard That Matters

Arbitrary commit messages like "fix stuff" or "update" signal amateur. Conventional Commits is a specification used by Angular, Vue, and thousands of professional projects:

\`\`\`
<type>(<scope>): <short description>

[optional body]
[optional footer]
\`\`\`

Types: \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`test\`, \`chore\`.

Real examples:
- \`feat(auth): add JWT refresh token rotation\`
- \`fix(api): handle null response from weather endpoint\`
- \`refactor(ui): extract Button into shared component\`

This format is machine-readable — tools like \`semantic-release\` auto-generate changelogs from it. It's also human-readable — any engineer can scan the git log and understand what changed.

## Branching Strategy

Use trunk-based development with short-lived feature branches:

\`\`\`
main           ← always deployable
└── feat/user-auth
└── fix/nav-overflow
└── docs/api-reference
\`\`\`

Feature branches live for 1–3 days maximum. Long-lived branches cause merge conflicts and signal poor planning. If a feature takes 2 weeks, break it into smaller slices.

## PR Descriptions That Impress

A great PR description answers three questions:
1. **What** changed?
2. **Why** did it change?
3. **How** do I test this?

Include screenshots for UI changes. Link to the issue it closes with \`Closes #42\`. Mention any breaking changes. Keep PRs focused — one concern per PR.

## The README That Sells You

Every portfolio project needs a README with: what the project does, why you built it, tech stack with version numbers, local setup instructions (that actually work), screenshots or a live demo link, and known limitations (this shows self-awareness).

A project with a professional README and good commit history communicates "I can work in a team" — which is exactly what hiring managers want from a fresher.`,
    tags: ["Git", "Career", "Best Practices", "Open Source"],
    date: "October 5, 2024",
    readTime: 5,
    coverGradient: "from-orange-500 to-red-600",
  },
];

export const ALL_PROJECT_TAGS = Array.from(
  new Set(PROJECTS.flatMap((p) => p.tags))
).sort();

export const ALL_BLOG_TAGS = Array.from(
  new Set(BLOG_POSTS.flatMap((p) => p.tags))
).sort();
