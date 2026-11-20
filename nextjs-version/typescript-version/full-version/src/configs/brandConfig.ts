/**
 * Brand Configuration
 * ---------------------------------------------------------------------------
 * This file is the SINGLE SOURCE OF TRUTH for every brand-visible string in
 * the app (name, company, support/docs links, demo account).
 *
 * The template ships as "Materialize" (PixInvent). This project is white-
 * labelled for a single commercial end product, so all vendor branding has
 * been moved here. Change the values below (or the matching env vars in
 * `.env`) once and the whole app follows — no need to hunt through components.
 *
 * NOTE (license): removing the original branding does NOT change the license
 * of the underlying template. The code is still covered by the PixInvent
 * commercial license you purchased (one license = one end product). See
 * `LICENSING.md` and `THIRD-PARTY-NOTICES.md` at the version root.
 */

export type BrandConfig = {
  /** Product name shown in the logo, page titles and share dialogs */
  name: string
  /** Legal / company name shown in footers and placeholders */
  companyName: string
  /** Short marketing line used in <title>/meta description */
  tagline: string
  /** Meta description for SEO */
  description: string
  /** Public marketing site of the end product */
  websiteUrl: string
  /** Help-centre / documentation URL. TODO: point to your own docs */
  docsUrl: string
  /** Support channel (helpdesk URL or mailto:) */
  supportUrl: string
  /** Support e-mail address */
  supportEmail: string
  /** Demo credentials advertised on the login page (seed data) */
  demoEmail: string
}

const brandConfig: BrandConfig = {
  // TODO: replace with your client's brand.
  name: process.env.NEXT_PUBLIC_BRAND_NAME || 'Nexus',
  companyName: process.env.NEXT_PUBLIC_BRAND_COMPANY || 'Nexus Technologies',
  tagline: process.env.NEXT_PUBLIC_BRAND_TAGLINE || 'Admin Dashboard',
  description:
    process.env.NEXT_PUBLIC_BRAND_DESCRIPTION ||
    'Secure admin dashboard for managing users, billing, reports and day-to-day operations.',
  websiteUrl: process.env.NEXT_PUBLIC_BRAND_WEBSITE || 'https://example.com',
  docsUrl: process.env.NEXT_PUBLIC_BRAND_DOCS_URL || '#', // TODO: your documentation URL
  supportUrl: process.env.NEXT_PUBLIC_BRAND_SUPPORT_URL || 'mailto:support@example.com',
  supportEmail: process.env.NEXT_PUBLIC_BRAND_SUPPORT_EMAIL || 'support@example.com',
  demoEmail: process.env.NEXT_PUBLIC_BRAND_DEMO_EMAIL || 'admin@example.com'
}

export default brandConfig
