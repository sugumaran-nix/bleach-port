# ⚔ Bleach Portfolio — Fresher Developer Portfolio Template

A **production-ready, fully generic fresher portfolio template** built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

Visually inspired by **Bleach's Ichigo Kurosaki**:
- **Light theme** → Ichigo Normal Form (Soul Reaper): orange, cream, black
- **Dark theme** → Vasto Lorde / Hollowfied Form: bone white, void black, purple reiatsu

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── projects/        # Projects list + [slug] detail
│   ├── blog/            # Blog list + [slug] post
│   ├── contact/         # Contact form
│   ├── not-found.tsx    # 404 page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── ui/              # BackToTop
│   ├── sections/        # Hero, Skills, Projects, Education, Certs
│   └── effects/         # ReiatsuOrbs, HollowMask, ZanpakutoSlash
├── data/index.ts        # All mock content (replace with your own)
├── hooks/               # useTheme, useScrollReveal, useActiveSection
├── lib/                 # utils, theme helpers
└── types/index.ts       # TypeScript interfaces
```

---

## 🎨 Customisation

1. **Your Info** — Edit `src/data/index.ts` (name, projects, skills, education, certs, blog posts)
2. **Colours** — Tweak CSS variables in `src/app/globals.css` under `:root` and `.dark`
3. **Fonts** — Change `@import` in `globals.css` and `fontFamily` in `tailwind.config.ts`
4. **Pages** — Add/remove sections in `src/app/page.tsx`

---

## 📦 Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework, SSG, routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| React Hook Form | Contact form |
| React Hot Toast | Success toast |
| React Type Animation | Typewriter effect |

---

## 🌐 Resources & Credits

### Fonts
- **Google Fonts** — https://fonts.google.com — Bebas Neue, Rajdhani, Inter, JetBrains Mono
- **FontShare** — https://www.fontshare.com — Alternative font discovery
- **CDNFonts** — https://www.cdnfonts.com — Additional web fonts

### Design Inspiration
- **Dribbble** — https://dribbble.com — Portfolio card and layout inspiration
- **Behance** — https://www.behance.net — Fresher portfolio design patterns
- **Pinterest** — https://www.pinterest.com — UI mood boards and visual references

### Best Practices & Articles
- **Smashing Magazine** — https://www.smashingmagazine.com — CSS, accessibility, performance
- **Dev.to** — https://dev.to — Developer portfolio tips
- **Medium** — https://medium.com — Career and frontend development articles
- **Reddit r/webdev** — https://www.reddit.com/r/webdev — Community best practices

### UI Component Libraries (patterns referenced)
- **shadcn/ui** — https://ui.shadcn.com — Form and card component patterns
- **Radix UI** — https://www.radix-ui.com — Accessible nav and toggle patterns
- **Headless UI** — https://headlessui.com — Mobile menu accessibility
- **Magic UI** — https://magicui.design — Floating badge, animated text effects
- **Aceternity UI** — https://ui.aceternity.com — Background animations
- **UIverse** — https://uiverse.io — Skill cards, badge designs
- **Mantine** — https://mantine.dev — Footer and grid layouts
- **Chakra UI** — https://chakra-ui.com — Component composition patterns
- **HeroUI** — https://www.heroui.com — Card and input patterns
- **Orbit.kiwi** — https://orbit.kiwi — Education/timeline card patterns
- **MUI** — https://mui.com — Data display patterns
- **Ant Design** — https://ant.design — Form patterns
- **PrimeReact** — https://primereact.org — Timeline component patterns

### npm Packages
- **react-type-animation** — https://www.npmjs.com/package/react-type-animation — Hero typewriter
- **react-hook-form** — https://react-hook-form.com — Contact form
- **react-hot-toast** — https://react-hot-toast.com — Success notification
- **framer-motion** — https://www.framer.com/motion — All animations
- **lucide-react** — https://lucide.dev — Icons

---

## 📜 Theming Details

```
Light Mode = Ichigo Normal Form
  --accent:   #E8600A  (orange reiatsu)
  --bg:       #FFF8F0  (cream — soul reaper haori)
  --text:     #1A1210  (deep black — shinigami)

Dark Mode = Vasto Lorde / Hollow Ichigo
  --accent:   #BF2FBF  (purple hollow reiatsu)
  --bg:       #080608  (void — Hueco Mundo night)
  --text:     #E8E0D5  (bone mask white)
```

Theme is persisted to `localStorage` under key `bleach-portfolio-theme` and applied via a `<script>` in the `<head>` to prevent FOUC.

---

## ⚡ Features Checklist

- [x] Sticky Navbar with mobile menu
- [x] Dark / Light mode with localStorage persistence + no FOUC
- [x] Typewriter hero (react-type-animation)
- [x] Skills grid with animated progress bars (grouped by category)
- [x] Education cards with coursework and achievements
- [x] Certification cards with issuer and credential ID
- [x] Project cards with Live Demo + GitHub buttons
- [x] Project tag filter with animated reordering
- [x] Single project detail page with tech stack sidebar
- [x] Blog list with tag filter
- [x] Single blog post page with content renderer
- [x] Contact form (react-hook-form) with success toast
- [x] Back-to-top button
- [x] Fully responsive (mobile-first)
- [x] Framer Motion animations throughout
- [x] Bleach-inspired light & dark theme
- [x] 404 page ("Bankai Not Found")
- [x] TypeScript throughout
- [x] Zero real names / emails / photos

---

*Tite Kubo's Bleach — all character references are fan appreciation only.*
