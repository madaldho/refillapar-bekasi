# Copilot Instructions: Dokterfire APAR Refill bogor Website

Selalu jawab dengan bahsa indonesia dan prosesnya

## Project Overview
This is an Astro-based business website for **Dokterfire**, specializing in APAR (Alat Pemadam Api Ringan) refill services in Bogor. The site uses Indonesian language and focuses on fire extinguisher refilling services for three media types: Powder, Foam, and CO2.

## Architecture & Tech Stack
- **Framework**: Astro 4.16.5 with TypeScript (strict mode disabled)
- **Styling**: TailwindCSS with custom utilities for text shadows and slide animations
- **SEO**: astro-seo package with comprehensive OpenGraph and Twitter meta tags
- **Analytics**: Google Analytics via Partytown for performance optimization
- **Images**: Astro's built-in Image component with WebP optimization
- **Font**: Nunito Sans loaded from Google Fonts

## Component Structure & Patterns

### Layout Hierarchy
```
BaseLayout.astro (root layout)
├── Navbar (fixed header with logo and CTA)
├── <slot /> (page content)
├── Footer (payment methods, social links)
└── Wangambang (floating WhatsApp button)
```

### Reusable Components
- **`Ctabase`**: Call-to-action section with WhatsApp contact (appears on all product pages)
- **`Sidewilayah`**: Sidebar with service areas, related products, and images
- **`Wangambang`**: Floating WhatsApp contact button with hover animations
- **`buttonprodukrobot`**: Dynamic WhatsApp button with product name injection via JavaScript

### Page Types & Structure
1. **Homepage** (`index.astro`): Hero, services overview, product cards, client carousel
2. **Product Pages** (refill services): Two-column layout with product details, tabs, and related products
3. **404 Page**: Custom glitch effect styling

## Key Conventions

### Meta Data Pattern
All pages require `titlemeta` and `descriptionmeta` props:
```astro
const titlemeta = "Page Title";
const descriptionmeta = "Page Description";
```

### Product Page Structure
Product pages follow a consistent pattern:
1. Product gallery (single image with thumbnails)
2. Product details (title, description, price, CTA buttons)
3. Tabbed content (Deskripsi, Info Lainnya)
4. Sidebar with `<Sidewilayah/>`
5. Related products section
6. `<Ctabase/>` component

### Contact Integration
WhatsApp number `62811842909` is used throughout for contact CTAs. All contact links include pre-filled messages specific to the service/page.

## Development Workflows

### Build Commands
- `npm run dev` - Development server
- `npm run build` - Production build with type checking
- `npm run preview` - Preview production build

### Image Optimization
Images are optimized using Astro's Image component with WebP format and 85% quality. Store images in `src/assets/` and import them for optimization.

### Custom Animations
TailwindCSS extended with:
- Text shadow utilities (`.text-shadow-sm` to `.text-shadow-xl`)
- Infinite slide animation for client logos (`animate-slide-left-infinite`)
- Pause animation utility (`.animation-pause`)

## Business Context
- **Target Market**: Bogor businesses needing fire extinguisher refills
- **Services**: Powder (ABC), Foam (AB), CO2 (BC) fire extinguisher refills
- **Key Features**: Free shipping, 2-year guarantee, COD payment, backup cylinder during service
- **Pricing**: Starts from Rp45,000 (Powder) to Rp360,000 (Foam)

## SEO & Performance Strategy
- Site URL: `https://refillaparbogor.dokterfire.com/`
- **Primary Keywords**: "refill apar bogor", "isi ulang apar bogor", "service apar bogor"
- **Secondary Keywords**: "refill apar murah", "apar bergaransi bogor", "dokterfire bogor"
- **Target**: Rank #1 on Google and AI search engines for APAR refill services in Bogor

### SEO Implementation:
- Comprehensive meta tags with geo-targeting for Bogor
- Structured Data (JSON-LD) for Local Business optimization
- Optimized Title Tags with primary keywords and emotional triggers
- Meta descriptions with emojis, benefits, and phone number
- robots.txt optimized for AI crawlers (GPTBot, Claude, ChatGPT)
- Alt tags with descriptive keywords for all images
- H1-H6 hierarchy with target keywords
- Internal linking between service pages
- Page speed optimization via Astro SSG and WebP images

### Content Strategy:
- Use Indonesian language with local Bogor terminology
- Include pricing, guarantees, and unique selling points in meta descriptions
- Emphasize "Gratis Ongkir", "COD", "Bergaransi 2 Tahun" in all content
- Local business information (address, phone, service areas)
- Client testimonials and trust signals

When working on this project, maintain the Indonesian business language, consistent contact information, and the established design patterns for optimal user experience and SEO performance. Always prioritize local SEO signals and user intent for APAR refill services in Bogor.