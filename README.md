// README.md

# Portfolio Website with Next.js 15 + App Router + TypeScript

Website portofolio personal menggunakan Next.js 15 dengan App Router, TypeScript, dan Tailwind CSS.

## Fitur

- Desain responsif untuk semua ukuran perangkat
- Mode terang/gelap (bisa diimplementasikan)
- Halaman beranda dengan section hero, tentang, skill, proyek, dan kontak
- Halaman proyek dengan detail proyek lengkap
- Halaman tentang dengan informasi personal, pendidikan, dan pengalaman
- Halaman kontak dengan form kontak
- Type safety dengan TypeScript

## Teknologi

- [Next.js 15](https://nextjs.org/) - React framework dengan App Router
- [TypeScript](https://www.typescriptlang.org/) - JavaScript dengan type definitions
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library untuk UI

## Memulai

### Prasyarat

- Node.js (versi 18.17 atau lebih baru)
- npm atau yarn atau pnpm

### Instalasi

1. Clone repositori

   ```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependensi

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. Jalankan server development

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda

## Deployment

Website ini bisa di-deploy dengan mudah menggunakan [Vercel](https://vercel.com/) (direkomendasikan karena terintegrasi dengan baik dengan Next.js) atau [Netlify](https://www.netlify.com/).

### Deploy ke Vercel

1. Buat akun di [Vercel](https://vercel.com/)
2. Import proyek GitHub Anda
3. Tunggu hingga proses deploy selesai

### Deploy ke Netlify

1. Buat akun di [Netlify](https://www.netlify.com/)
2. Import proyek GitHub Anda
3. Set build command: `npm run build` atau `yarn build`
4. Set output directory: `out`

## Backend Integration

Portfolio ini telah terintegrasi dengan **Supabase** sebagai backend untuk:

- ✅ **Contact Form**: Form kontak yang functional dengan database storage
- ✅ **Project Management**: Kelola projects dari database
- ✅ **Admin Dashboard**: Panel admin untuk melihat pesan kontak
- ✅ **Visitor Analytics**: Tracking pengunjung website

### Setup Backend

1. **Quick Setup**: Ikuti panduan lengkap di [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

2. **Manual Setup**:

   ```bash
   # Install Supabase
   npm install @supabase/supabase-js

   # Copy environment variables
   cp .env.local.example .env.local

   # Edit .env.local dengan Supabase credentials Anda
   ```

3. **Database Schema**: Jalankan SQL di `supabase/schema.sql` di Supabase SQL Editor

### Fallback Strategy

- Jika Supabase tidak dikonfigurasi, website tetap berjalan dengan data statis
- Contact form akan menampilkan error message yang informatif
- Projects menggunakan data dari `lib/projectData.ts`

### API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Fetch projects dari database
- `GET /admin` - Admin dashboard (belum ada auth)

## Fitur Tambahan yang Bisa Diimplementasikan

- Mode dark/light dengan toggle
- Blog dengan MDX
- Animasi dengan Framer Motion
- ✅ ~~Integrasi form kontak dengan backend (Supabase, Firebase, dll)~~ **SELESAI**
- i18n untuk multi-bahasa
- Email notifications untuk contact form
- Authentication untuk admin panel
- File upload untuk project images
- SEO optimization
- PWA (Progressive Web App)

## Lisensi

Proyek ini tersedia di bawah lisensi MIT.
