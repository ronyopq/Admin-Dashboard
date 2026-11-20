# Third-Party Notices — Next.js Admin Dashboard

This product is built on the **Materialize** admin template by PixInvent
(commercial license — see [`../../LICENSING.md`](../../LICENSING.md)) and on the
open-source packages below. Each package keeps its own license; nothing here
re-licenses them.

## Runtime dependencies (notable)

| Package | License | Action required in production |
| --- | --- | --- |
| `next`, `react`, `react-dom` | MIT | Keep the license text |
| `@mui/material`, `@mui/lab`, `@mui/material-nextjs` | MIT | Keep the license text |
| `@emotion/*` | MIT | — |
| `next-auth`, `@auth/prisma-adapter` | ISC / Apache-2.0 | — |
| `@prisma/client`, `prisma` | Apache-2.0 | — |
| `@reduxjs/toolkit`, `react-redux` | MIT | — |
| `@tanstack/react-table` | MIT | — |
| `@tiptap/*` (core + free extensions) | MIT | Paid Tiptap extensions (e.g. Collaboration, Comments) need a Tiptap subscription if added |
| `@fullcalendar/core`, `daygrid`, `timegrid`, `list`, `interaction` | MIT | Premium views (`@fullcalendar/timeline`, `resource-*`, `scheduler`) require a **FullCalendar Premium** license — not included |
| `apexcharts`, `react-apexcharts` | MIT | — |
| `recharts` | MIT | — |
| **`mapbox-gl`, `react-map-gl`** | **Mapbox Terms of Service** (not MIT) | Requires a Mapbox account + access token; usage is **metered/billed** beyond the free tier. Either configure `MAPBOX_ACCESS_TOKEN` + billing, or remove the map views |
| `keen-slider`, `cmdk`, `react-colorful`, `react-datepicker`, `react-dropzone`, `react-hook-form`, `react-player`, `react-perfect-scrollbar`, `react-toastify`, `valibot`, `date-fns`, `emoji-mart` | MIT | — |
| `bootstrap-icons` | MIT | Icon font |
| `@formkit/drag-and-drop` | MIT | — |

Full, generated list: `npx license-checker --summary` (add the package if you
want it as a dev dependency).

## Assets

| Asset | Origin | Action |
| --- | --- | --- |
| `public/images/avatars/**`, `public/images/apps/**`, `public/images/cards/**`, `public/images/pages/**` | Template demo imagery | Replace with own/licensed imagery before launch |
| `public/images/front-pages/**` (landing page, pricing, checkout, banners) | PixInvent marketing artwork | Delete these pages/assets if the marketing site is not part of the product |
| `public/images/logos/**` (brand logos of Angular, AWS, Figma, etc.) | Third-party trademarks | Use only for factual "integration" lists; do not imply endorsement |
| `src/@core/svg/Logo.tsx` | SVG mark shipped with the template | Replace with your own logo (see `src/configs/brandConfig.ts`) |
| Fonts (Inter etc. via `next/font`) | SIL Open Font License | — |
| Iconify icon set (`src/assets/iconify-icons`) | Individual icon licenses (mostly MIT/Apache) | Keep `bundle-icons-css.ts` output as is |

## Keeping this file accurate

When you add a dependency or an asset pack, add a row here. Before launch run:

```bash
npx license-checker --production --summary
```

and make sure no GPL/AGPL/commercial-only package slipped in.
