-- Portfolio Database Schema for Supabase
-- Run this in Supabase SQL Editor

-- Enable Row Level Security (RLS) by default
-- This ensures data security

-- 1. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    tags TEXT[] DEFAULT '{}',
    image_url VARCHAR(500) NOT NULL,
    demo_url VARCHAR(500) DEFAULT '#',
    github_url VARCHAR(500) NOT NULL,
    features TEXT[] DEFAULT '{}',
    is_featured BOOLEAN DEFAULT FALSE,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Visitors Table (for analytics)
CREATE TABLE IF NOT EXISTS visitors (
    id BIGSERIAL PRIMARY KEY,
    ip_address INET,
    user_agent TEXT,
    page_visited VARCHAR(255) NOT NULL,
    referrer VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Blog Posts Table (optional, for future use)
CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image VARCHAR(500),
    tags TEXT[] DEFAULT '{}',
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_order_index ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_projects_is_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_visitors_page_visited ON visitors(page_visited);
CREATE INDEX IF NOT EXISTS idx_visitors_created_at ON visitors(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_contact_messages_updated_at
    BEFORE UPDATE ON contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies

-- Contact Messages: Allow insert for anyone, select/update only for authenticated users
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages" ON contact_messages
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update contact messages" ON contact_messages
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Projects: Read access for everyone, write access for authenticated users
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects" ON projects
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage projects" ON projects
    FOR ALL USING (auth.role() = 'authenticated');

-- Visitors: Insert for anyone, read for authenticated users
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert visitor data" ON visitors
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view visitor data" ON visitors
    FOR SELECT USING (auth.role() = 'authenticated');

-- Blog Posts: Read published posts for everyone, full access for authenticated users
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts" ON blog_posts
    FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample data for projects (based on existing projectData.ts)
INSERT INTO projects (title, description, long_description, tags, image_url, demo_url, github_url, features, order_index) VALUES
(
    'Catharsis Empire',
    'A Laravel-based e-commerce platform with a modern design and a complete shopping system.',
    'Catharsis Empire is an e-commerce application built with Laravel as the main backend framework. This project integrates Vite for modern asset management and uses Tailwind CSS, Bootstrap, and Alpine.js for an interactive and responsive front-end. The application includes product catalog features, shopping cart, checkout system, user authentication, and an admin panel for product management.',
    ARRAY['Laravel', 'PHP', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Alpine.js', 'Axios'],
    '/images/project1.png',
    '#',
    'https://github.com/gayubrw/catharsis_empire.git',
    ARRAY[
        'Product catalog with search and filter functionality',
        'Shopping cart system',
        'Checkout and payment system',
        'User authentication',
        'Admin panel for product management',
        'Responsive design using Tailwind CSS and Bootstrap'
    ],
    1
),
(
    'Catharsis Empire 2',
    'A modern e-commerce frontend built with Vue.js, offering a responsive and elegant user experience.',
    'Catharsis Empire 2 is the frontend interface of the Catharsis Empire e-commerce platform, developed using Vue.js. While it differs in its technological implementation from the first Catharsis Empire project, both serve the same brand and product line. This project focuses on a clean and intuitive design, leveraging Vue''s component-based architecture for efficient development.',
    ARRAY['Vue.js', 'JavaScript', 'CSS', 'HTML', 'Responsive Design'],
    '/images/project2.png',
    '#',
    'https://github.com/gayubrw/catharsis_empire_2.git',
    ARRAY[
        'Product catalog with interactive components',
        'Shopping cart functionality',
        'User authentication system',
        'Responsive Vue.js design',
        'Component-based architecture'
    ],
    2
);

-- Grant necessary permissions (run as superuser or admin)
-- GRANT USAGE ON SCHEMA public TO anon, authenticated;
-- GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
-- GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
