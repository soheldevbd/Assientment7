# বাজার দর (BazarDor)

A responsive Bengali-first market price dashboard built from the supplied Figma/Penpot assignment files. The app displays essential grocery prices, categories, daily risers/fallers, product detail comparisons, authentication screens, and profile editing.

## Stack
- Next.js App Router 16 + React 19 + TypeScript
- Tailwind CSS 4 (with custom responsive design tokens and styles)
- Better Auth with MongoDB adapter
- Lucide React icons, react-hot-toast
- BazarDor products API with a local fallback dataset

## Features
1. Responsive Bengali home page and animated market ticker.
2. Category browsing with numeric price sorting.
3. Price-change highlights and product detail pages with market comparison.
4. Email/password authentication using Better Auth, optional Google/GitHub OAuth.
5. Protected profile view and profile name update.
6. Loading, empty, error/404 states and toast feedback.
7. Responsive layouts for mobile, tablet, and desktop.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables
- `MONGODB_URI`: MongoDB connection string. Database name used by the app is `bazardor`.
- `BETTER_AUTH_SECRET`: long random secret (32+ characters).
- `BETTER_AUTH_URL`: base URL, e.g. `http://localhost:3000`.
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: optional Google OAuth credentials.
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`: optional GitHub OAuth credentials.

OAuth buttons only work after credentials are configured. The product API may be unavailable in some environments; the app then uses sample data from `lib/products.ts`. Sample prices are illustrative, not live quotes.

## Build and deploy

```bash
npm run build
npm start
```

Set the same environment variables in your hosting platform before deployment. Keep the `.env.local` file private and never commit credentials.

## API used
- `https://api.api-store.workers.dev/api/bazardor/products`
- Alternative: `https://api.abcz.workers.dev/api/bazardor`

## Git commits
For the assignment's commit-history requirement, initialize Git in your own repository and make at least eight meaningful commits as you review and refine the project. This archive does not fabricate a commit history.
