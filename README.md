# DIPA Inhouse - Technical Test Slicing

Webapp ini dibuat sebagai bagian dari **technical test untuk posisi Senior Frontend Developer di DIPA Inhouse** dengan fokus pada kemampuan **slicing design menjadi code**.

## Struktur Halaman

Proyek ini terdiri dari **2 halaman utama**:

1. **Page Utama (Landing Page)** - `/`

   - Halaman landing page dengan berbagai section: Hero, Platform, Toolkit, Enterprise, Pricing, CTA, dan Footer
   - Dibuat dengan pendekatan **mobile-first responsive design**
   - Dioptimalkan untuk tampilan di berbagai ukuran perangkat (mobile, tablet, desktop)
   - _Alasan_: Landing page merupakan entry point utama yang harus dapat diakses dengan baik di semua perangkat untuk maksimalisasi reach dan user experience

2. **Page Dashboard** - `/dashboard`
   - Dashboard lengkap dengan berbagai fitur: Portfolio Overview, Assets, Markets, Stakings, dan Community
   - **Tidak terlalu mobile responsive** (dioptimalkan untuk desktop/tablet)
   - _Alasan_: Dashboard dengan kompleksitas data tinggi (charts, tables, multiple sections) lebih efektif digunakan di layar yang lebih besar untuk memaksimalkan produktivitas dan readability data

## Tech Stack

### Core Framework & Language

- **Next.js 16.0.8** (App Router) - Framework React untuk production dengan SSR, routing, dan optimizations
- **React 19.2.1** - Library UI dengan concurrent features terbaru
- **TypeScript 5** - Type safety untuk mengurangi bugs dan meningkatkan developer experience

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework untuk rapid development dan consistency
- **tw-animate-css** - Animasi CSS utilities untuk Tailwind

### UI Components

- **shadcn/ui** - Collection of reusable components yang dibangun di atas Radix UI dan Tailwind CSS (button, card, table, tabs, input, avatar, badge, separator, sheet, sidebar, skeleton, switch, tooltip, chart)
  - _Alasan_: Memberikan komponen yang production-ready, dapat di-customize penuh (bukan dependency npm), dan mudah dimodifikasi sesuai kebutuhan design
- **Radix UI** - Unstyled, accessible component primitives (@radix-ui/react-avatar, dialog, separator, switch, tabs, tooltip)
  - _Alasan_: Memberikan aksesibilitas out-of-the-box dengan kontrol penuh terhadap styling
- **Lucide React** - Icon library yang modern dan ringan

### Data Visualization & Tables

- **Recharts 2.15.4** - Library charting yang powerful dan customizable
  - _Alasan_: Mudah digunakan, mendukung berbagai chart types, dan terintegrasi baik dengan React
- **TanStack React Table 8.21.3** - Headless table library dengan fitur sorting, filtering, pagination
  - _Alasan_: Fleksibel, performant, dan memberikan kontrol penuh untuk custom table implementations

### Animation & Interactions

- **Motion 12.23.25** (Framer Motion) - Library animasi yang powerful untuk smooth transitions
  - _Alasan_: Memberikan animasi yang smooth dan performant untuk meningkatkan UX

### Utilities

- **class-variance-authority** - Utility untuk mengelola variant styling components
- **clsx & tailwind-merge** - Utilities untuk conditional className management
- **Husky** - Git hooks untuk code quality (pre-commit linting)

### Development Tools

- **ESLint** - Code linting untuk maintain code quality
- **PostCSS** - CSS processing

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) dengan browser untuk melihat hasil.

## Scripts

- `pnpm dev` - Menjalankan development server
- `pnpm build` - Build untuk production
- `pnpm start` - Menjalankan production server
- `pnpm lint` - Menjalankan ESLint
- `pnpm typecheck` - Type checking dengan TypeScript

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui style)
│   ├── dashboard/        # Dashboard-specific components
│   ├── hero/             # Hero section components
│   └── ...               # Other section components
├── constants/            # Constants dan configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Notes

- Proyek menggunakan **App Router** dari Next.js 16
- Menggunakan **TypeScript** untuk type safety
- Menggunakan **Tailwind CSS 4** dengan PostCSS
- Menggunakan **pnpm** sebagai package manager (bisa diganti dengan npm/yarn jika diperlukan)
