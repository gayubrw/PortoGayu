import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Regular client for frontend operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations (bypasses RLS)
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : supabase; // Fallback to regular client if no service key

// Database types
export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: "unread" | "read" | "replied";
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  long_description?: string;
  tags: string[];
  image_url: string;
  demo_url: string;
  github_url: string;
  features?: string[];
  created_at?: string;
  updated_at?: string;
  is_featured?: boolean;
  order_index?: number;
}

export interface Visitor {
  id?: number;
  ip_address?: string;
  user_agent?: string;
  page_visited: string;
  referrer?: string;
  created_at?: string;
}
