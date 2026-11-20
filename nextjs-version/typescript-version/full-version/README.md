# Admin Dashboard (Next.js + MUI)

White-labelled build of the Next.js/TypeScript admin application. The original
vendor branding (PixInvent "Materialize") has been removed from the UI and
centralised in one config file.

> **License:** commercial template license — read [`../../LICENSING.md`](../../LICENSING.md)
> and [`THIRD-PARTY-NOTICES.md`](./THIRD-PARTY-NOTICES.md) before shipping.
> One license = one end product. Do not publish this source publicly.

## Requirements

- Node.js 20+
- pnpm 9+ (repo ships `pnpm-lock.yaml`) — `npm i -g pnpm`

## Getting started

```bash
cp .env.example .env.local     # then fill in the values
pnpm install
pnpm dev                       # http://localhost:3000
```

Demo login (seed data, change before launch): `admin@example.com` / `admin`.

## Rebranding (one file)

All brand-visible strings live in **`src/configs/brandConfig.ts`**:

| Key | Where it shows up |
| --- | --- |
| `name` | Logo text (`themeConfig.templateName`), page `<title>`, share dialog |
| `companyName` | Footers, legal/business-name placeholders |
| `tagline` / `description` | `<title>` and meta description |
| `websiteUrl` | Footer company link, "Visit Website" CTA on the marketing layout |
| `docsUrl`, `supportUrl`, `supportEmail` | Footer, side-menu "Documentation"/"Support" entries |
| `demoEmail` | Login page hint + fake auth user |

Every value can also be set through env vars (`NEXT_PUBLIC_BRAND_*`, see
`.env.example`), so staging and production can use different brands.

Still to replace manually before launch:

1. `src/@core/svg/Logo.tsx` — the SVG mark itself.
2. Demo imagery under `public/images/**` (avatars, cards, front-page marketing art).
3. `src/app/front-pages/**` — the template marketing site (landing, pricing,
   checkout). Delete it if the client product does not need a public site.
4. Demo/fake data under `src/fake-db/**` (`Acme Corp` placeholders).

## Scripts

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Dev server (Turbopack) |
| `pnpm build` / `pnpm start` | Production build / serve |
| `pnpm lint` / `pnpm lint:fix` | ESLint |
| `pnpm format` | Prettier |
| `pnpm build:icons` | Regenerate Iconify CSS bundle |
| `pnpm removeI18n` | Strip the i18n layer if the product is single-language |
| `pnpm migrate` | Prisma migrations (needs `DATABASE_URL`) |

## Project structure

```
src/
  @core/         layout engine, theme primitives, hooks (template core)
  @layouts/      vertical / horizontal / blank layouts
  @menu/         menu engine
  app/           App Router routes, API routes, metadata
  components/    shared UI (layout chrome, dialogs, …)
  configs/       brandConfig.ts, themeConfig.ts, i18n, primary colour
  data/          navigation menu definitions
  fake-db/       demo data (replace with the real API)
  views/         screens (dashboards, apps, pages)
```

## Deployment (Vercel)

1. Import the repository, set the project root to
   `nextjs-version/typescript-version/full-version`.
2. Add the env vars from `.env.example` (at minimum `NEXTAUTH_SECRET`,
   `NEXTAUTH_URL`, `DATABASE_URL`, `NEXT_PUBLIC_BRAND_*`).
3. `mapbox-gl` screens need `MAPBOX_ACCESS_TOKEN` **and** a Mapbox billing plan —
   remove the map views if the client does not want that cost.
4. Everything else builds with `pnpm build`.

## Support

Internal support only: see `brandConfig.supportEmail`. The template vendor does
not provide support for modified/white-labelled builds beyond the purchased
license terms.
