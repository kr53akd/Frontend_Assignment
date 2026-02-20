# Project Overview

This repository is a Next.js 13+ project (App Router) using TypeScript and Tailwind CSS. It contains a responsive site with a hero banner, video backgrounds, feature sections, and UI components.

**Key features:**
- Responsive, accessible components
- Background video sections (autoplay, muted, loop)
- Tailwind CSS for utility-first styling

---

## Tech Stack

- Next.js 13+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- ESLint

Specific versions are in `package.json`.

---

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm run start
```

Notes:
- If you use `pnpm` or `yarn`, substitute the package manager commands.
- The project uses static media placed under `/public` (e.g., `/public/videos`).

---

## Folder Structure

Top-level layout (truncated):

```
/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Navbar.tsx
│  ├─ HeroBanner.tsx
│  ├─ FeatureSection.tsx
│  └─ OurJourney.tsx
├─ public/
│  └─ videos/
├─ package.json
├─ tailwind.config.js (if present)
└─ tsconfig.json
```

Adjust paths as your project grows.

---

## Deployment Instructions

Recommended: deploy on Vercel for optimal Next.js support.

1. Push your repository to GitHub.
2. Import the repo on Vercel (https://vercel.com/new).
3. Use default build settings (`npm run build`, `npm start` or Vercel's defaults). Vercel auto-detects Next.js projects.

Manual (server):

```bash
npm run build
npx next start -p 3000
```

Environment variables: add any required env vars in Vercel dashboard or your hosting provider.

---

## Troubleshooting

- If video doesn't autoplay on mobile, ensure `muted` and `playsInline` are present on the `<video>` element.
- If Tailwind classes are not applying, verify `globals.css` includes Tailwind directives and `tailwind.config.js` is correctly set.
- To debug build issues, run `npm run build` and inspect the error traces.

---

If you want, I can also:
- Add detailed Tailwind/Ts/Eslint setup steps
- Create a `deploy` script for common hosts
- Add CI configuration (GitHub Actions)
