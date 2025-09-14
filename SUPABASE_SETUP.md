# Setup Backend dengan Supabase

Proyek portfolio ini telah diintegrasikan dengan Supabase sebagai backend untuk menangani:

- Contact form submissions
- Project management
- Visitor analytics
- (Opsional) Blog management

## 🚀 Quick Start

### 1. Buat Akun Supabase

1. Kunjungi [https://supabase.com](https://supabase.com)
2. Buat akun baru atau login
3. Klik "New Project"
4. Isi detail project:
   - Organization: Pilih atau buat organization
   - Name: `my-portfolio` (atau nama sesuai keinginan)
   - Database Password: Buat password yang kuat
   - Region: Pilih region terdekat (misalnya: Southeast Asia - Singapore)
5. Klik "Create new project"

### 2. Setup Database Schema

1. Tunggu project selesai di-setup (biasanya 2-3 menit)
2. Di dashboard Supabase, buka menu **SQL Editor**
3. Copy seluruh isi file `supabase/schema.sql`
4. Paste ke SQL Editor dan klik "Run"
5. Schema database akan dibuat otomatis

### 3. Konfigurasi Environment Variables

1. Di dashboard Supabase, buka **Settings > API**
2. Copy **Project URL** dan **anon public key**
3. Buka file `.env.local` di root project
4. Update dengan nilai yang sebenarnya:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: Service Role Key (untuk admin operations)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 4. Testing

1. Jalankan development server:

```bash
npm run dev
```

2. Buka `http://localhost:3000/contact`
3. Isi form contact dan submit
4. Periksa di Supabase dashboard > **Table Editor > contact_messages**
5. Data seharusnya tersimpan di database

## 📋 Fitur yang Tersedia

### ✅ Contact Form

- Form validation dengan React Hook Form
- Simpan pesan ke database Supabase
- Status tracking (unread/read/replied)
- Email validation
- Error handling

### ✅ Project Management

- CRUD operations untuk projects
- API endpoints: `/api/projects`
- Fallback ke data statis jika Supabase tidak tersedia

### ✅ Admin Dashboard

- Akses: `http://localhost:3000/admin`
- Lihat semua contact messages
- Mark messages as read
- Quick reply via email

### ✅ Visitor Analytics

- Track page visits
- IP address & user agent logging
- Referrer tracking

## 🔧 API Endpoints

### Contact Form

```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

### Projects

```
GET /api/projects
# Returns all projects

POST /api/projects
Content-Type: application/json
# Create new project (requires authentication)
```

## 🔒 Security Features

### Row Level Security (RLS)

- Contact messages: Insert for anyone, read/update for authenticated users only
- Projects: Read for everyone, write for authenticated users only
- Visitors: Insert for anyone, read for authenticated users only

### Environment Variables

- Sensitive keys disimpan di `.env.local`
- File `.env.local` sudah ada di `.gitignore`

## 📊 Database Schema

### contact_messages

```sql
- id (bigserial, primary key)
- name (varchar, not null)
- email (varchar, not null)
- subject (varchar, not null)
- message (text, not null)
- status (varchar, default 'unread')
- created_at (timestamp)
- updated_at (timestamp)
```

### projects

```sql
- id (bigserial, primary key)
- title (varchar, not null)
- description (text, not null)
- long_description (text)
- tags (text[])
- image_url (varchar, not null)
- demo_url (varchar)
- github_url (varchar, not null)
- features (text[])
- is_featured (boolean)
- order_index (integer)
- created_at (timestamp)
- updated_at (timestamp)
```

### visitors

```sql
- id (bigserial, primary key)
- ip_address (inet)
- user_agent (text)
- page_visited (varchar, not null)
- referrer (varchar)
- created_at (timestamp)
```

## 🛠️ Fallback Strategy

Jika Supabase tidak dikonfigurasi atau bermasalah:

- Projects akan menggunakan data statis dari `lib/projectData.ts`
- Contact form akan menampilkan error message
- Site tetap berjalan normal tanpa database

## 📝 Customization

### Menambah Field di Contact Form

1. Update interface di `lib/types.ts`:

```typescript
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string; // field baru
}
```

2. Update database schema:

```sql
ALTER TABLE contact_messages ADD COLUMN phone VARCHAR(20);
```

3. Update form component di `components/forms/ContactForm.tsx`
4. Update API handler di `app/api/contact/route.ts`

### Custom Styling

- Form menggunakan Tailwind CSS
- Konsisten dengan design system yang ada
- Responsive design

## 🚨 Troubleshooting

### Error: "Failed to save message"

- Periksa environment variables di `.env.local`
- Pastikan Supabase URL dan key benar
- Periksa internet connection

### Error: "Database connection failed"

- Periksa Supabase project status
- Pastikan region database tidak down
- Periksa RLS policies

### Form tidak submit

- Buka browser developer tools
- Periksa console untuk error JavaScript
- Periksa network tab untuk failed requests

## 📈 Next Steps

1. **Email Notifications**: Setup email service (Resend, SendGrid) untuk notifikasi pesan baru
2. **Admin Authentication**: Implement proper admin authentication
3. **File Upload**: Add file upload untuk project images
4. **Blog System**: Implement blog functionality dengan database
5. **Analytics Dashboard**: Create detailed analytics dashboard

## 🔗 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
