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

## Kustomisasi

### Mengubah Informasi Personal

Edit file berikut untuk menyesuaikan informasi personal:

- `components/sections/Hero.tsx` - Nama dan tagline
- `components/sections/About.tsx` - Informasi tentang diri
- `components/sections/Skills.tsx` - Keahlian teknis
- `app/about/page.tsx` - Detail lengkap tentang diri, pendidikan, dan pengalaman
- `components/ui/Footer.tsx` - Link media sosial

### Mengubah Proyek

Edit file `components/sections/Projects.tsx` dan `app/projects/page.tsx` untuk menambahkan atau mengubah proyek yang ditampilkan.

### Mengubah Warna

Edit file `tailwind.config.ts` untuk mengubah skema warna:

```typescript
theme: {
  extend: {
    colors: {
      'primary': '#3490dc', // Ubah warna primary
      'secondary': '#ffed4a', // Ubah warna secondary
      'dark': '#2d3748', // Ubah warna dark
    },
  },
},
```

## Fitur Tambahan yang Bisa Diimplementasikan

- Mode dark/light dengan toggle
- Blog dengan MDX
- Animasi dengan Framer Motion
- Integrasi form kontak dengan backend (Supabase, Firebase, dll)
- i18n untuk multi-bahasa

## Lisensi

Proyek ini tersedia di bawah lisensi MIT.
