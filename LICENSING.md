# Licensing & Commercial Use

> **বাংলা সারসংক্ষেপ:** এই রিপোতে থাকা কোড PixInvent-এর **Materialize** কমার্শিয়াল টেমপ্লেট (ওপেন সোর্স/MIT নয়)। কমার্শিয়াল ব্যবহারের জন্য **প্রতি end product-এ একটি লাইসেন্স** লাগে — ইউজার ফ্রি হলে Regular, ইউজার/ক্লায়েন্ট চার্জ করলে Extended। ব্র্যান্ডিং সরানো/কোড এডিট করা লাইসেন্স বাতিল করে না। টেমপ্লেটটি (এডিট করা অবস্থায়ও) টেমপ্লেট হিসেবে পুনর্বিক্রয় বা সোর্স পাবলিক করা যাবে না।

This repository vendors the **Materialize** admin template by
[PixInvent](https://pixinvent.com/) in several stacks (HTML, Laravel, Django,
ASP.NET Core, Vue, Nuxt, Next.js). The template code is **commercial /
proprietary**, not open source.

## 1. Current status

| Item | Value |
| --- | --- |
| Template | Materialize v6.x (Next.js), Materialize v2.x (HTML), etc. |
| Template license | Commercial (Envato ThemeForest item) |
| Open-source license | **None** — there is no MIT/GPL/BSD grant on the template code |
| Intended use of this repo | One commercial **end product** for one client |
| Required purchase | **1 × Regular License** (a single end product where end users are *not* charged) |

If the end product later starts **charging end users** (subscription, paid
accounts, one-off payment) you must upgrade to an **Extended License** for that
same end product. A new end product / a second client / a second domain needs a
**new license**.

## 2. What the license allows

- Use the template in **one end product** (yours or your client's).
- **Modify it freely** — rebrand, restyle, add/remove features, restructure code.
  There is no "percentage changed" threshold that frees you from the license.
- Host it yourself, deploy to any cloud (Vercel etc.), keep the source private.
- Remove the original author's branding; attribution is not required.

## 3. What the license does **not** allow

- **Redistributing the template as a template** — selling, publishing or giving
  away the code (modified or not) as an admin theme/dashboard starter kit.
- **Publishing the source publicly** (public GitHub repo, npm package, ZIP on a
  blog). Keep the repository **private**.
- Using **one license for several end products / clients / domains**.
- Using the template's **demo assets** (PixInvent logos, banner artwork,
  marketplace screenshots) in your product.

If you need to ship the same product to many clients, or sell the customised
build as a product, you need a written agreement from PixInvent
(support@pixinvent.com) — an Extended License alone does not grant redistribution
rights on the template itself.

## 4. Proof of purchase

Keep these outside the repo (password manager / Drive), never committed:

- ThemeForest invoice / order number
- Item **purchase code** (needed for PixInvent support and re-downloads)
- Which end product + domain the license is registered for

## 5. Third-party components

The template bundles many third-party libraries and assets that carry **their
own** licenses. See [`THIRD-PARTY-NOTICES.md`](./THIRD-PARTY-NOTICES.md).
Two that need action in a real deployment: `mapbox-gl` (Mapbox account, token
and billing terms) and any paid Tiptap extension you decide to add.

## 6. Repository layout vs. licensing

| Path | Content | Licensing note |
| --- | --- | --- |
| `nextjs-version/typescript-version/full-version` | **White-labelled** end product (brand moved to `src/configs/brandConfig.ts`) | Template license + third-party notices |
| `nextjs-version/**/starter-kit`, `vue-*`, `nuxt-version`, `html-*`, `django-version`, `aspnet-core` | Untouched template code | Template license; remove from the repo if unused |
| `public/images/front-pages/**` | PixInvent marketing artwork | Replace or delete before launch |

## 7. Launch checklist

- [ ] Regular/Extended license purchased, invoice + purchase code stored
- [ ] Repository is **private** (and no public forks)
- [ ] Brand strings, logo, footers, support/docs links point to your own brand
- [ ] Template demo images replaced with licensed/own imagery
- [ ] `mapbox-gl` token + billing plan configured (or the map feature removed)
- [ ] Unused stacks (Vue/Nuxt/HTML/Django/ASP.NET) deleted from the repo
- [ ] `THIRD-PARTY-NOTICES.md` kept in the repo and shipped with the product
- [ ] `LICENSE`-like npm field kept as `SEE LICENSE IN LICENSING.md`

> Not legal advice. Envato's license terms and PixInvent's written confirmation
> are the authoritative source.
