## StreamLite - Streaming Dashboard Clone (Next.js 14 + TypeScript)

This is a simplified streaming service dashboard built with Next.js 14 App Router and TypeScript. It fetches data from the public TMDB API and demonstrates server components, optimized images, dynamic routing, and Tailwind CSS styling.

### Tech
- Next.js 14 App Router (Server Components)
- TypeScript
- Tailwind CSS

### Getting Started
1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` in the project root with your TMDB Bearer token:

```bash
TMDB_API_KEY=YOUR_TMDB_BEARER_TOKEN
```

You can generate a Read Access Token (v4 API) from your TMDB account settings and use that as the bearer token.

3. Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

### Notes
- All primary data fetching occurs in server components or server utilities, ensuring the API key remains on the server side.
- Images are optimized via Next.js `<Image/>` and remote patterns for `image.tmdb.org` are configured in `next.config.mjs`.

### Deployment (Vercel)
1. Push to GitHub
2. Import the repo into Vercel
3. Set `TMDB_API_KEY` in Vercel Project Settings → Environment Variables
4. Deploy

### Project Structure
- `app/page.tsx`: Home with hero banner and rows
- `app/movie/[id]/page.tsx`: Movie detail page
- `components/*`: UI components
- `lib/tmdb.ts`: Server-only fetch helpers
- `types/tmdb.ts`: TypeScript typings


