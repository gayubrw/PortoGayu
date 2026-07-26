-- ================================================
-- CONTACT DATA & ABOUT DATA TABLES
-- ================================================
-- Additional tables for dynamic content management

-- ================================================
-- 1. CONTACT DATA TABLE
-- ================================================

CREATE TABLE IF NOT EXISTS contact_data (
    id BIGSERIAL PRIMARY KEY,
    header_title VARCHAR(255) NOT NULL DEFAULT 'CONTACT',
    header_subtitle TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(500) NOT NULL,
    social_links JSONB DEFAULT '[]',
    buttons JSONB DEFAULT '[]',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ================================================
-- 2. ABOUT DATA TABLE
-- ================================================

CREATE TABLE IF NOT EXISTS about_data (
    id BIGSERIAL PRIMARY KEY,
    personal_info JSONB NOT NULL,
    education JSONB DEFAULT '[]',
    experience JSONB DEFAULT '[]',
    skills JSONB DEFAULT '[]',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ================================================
-- 3. HERO SECTION DATA TABLE
-- ================================================

CREATE TABLE IF NOT EXISTS hero_data (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    cta_buttons JSONB DEFAULT '[]',
    background_config JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ================================================
-- 4. SITE SETTINGS TABLE (General configurations)
-- ================================================

CREATE TABLE IF NOT EXISTS site_settings (
    id BIGSERIAL PRIMARY KEY,
    site_name VARCHAR(255) NOT NULL DEFAULT 'PortoGayu',
    site_description TEXT,
    site_url VARCHAR(500),
    favicon_url VARCHAR(500),
    logo_url VARCHAR(500),
    theme_config JSONB DEFAULT '{}',
    seo_config JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_data_active ON contact_data(is_active);
CREATE INDEX IF NOT EXISTS idx_about_data_active ON about_data(is_active);
CREATE INDEX IF NOT EXISTS idx_hero_data_active ON hero_data(is_active);
CREATE INDEX IF NOT EXISTS idx_site_settings_active ON site_settings(is_active);

-- Enable RLS
ALTER TABLE contact_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public read, authenticated write
CREATE POLICY "Anyone can view contact data" ON contact_data
    FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage contact data" ON contact_data
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can view about data" ON about_data
    FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage about data" ON about_data
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can view hero data" ON hero_data
    FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage hero data" ON hero_data
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can view site settings" ON site_settings
    FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage site settings" ON site_settings
    FOR ALL USING (auth.role() = 'authenticated');

-- Update triggers
CREATE TRIGGER update_contact_data_updated_at 
    BEFORE UPDATE ON contact_data 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_about_data_updated_at 
    BEFORE UPDATE ON about_data 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hero_data_updated_at 
    BEFORE UPDATE ON hero_data 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at 
    BEFORE UPDATE ON site_settings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- ================================================
-- INSERT INITIAL DATA
-- ================================================

-- Insert contact data
INSERT INTO contact_data (
    header_title,
    header_subtitle,
    email,
    location,
    social_links,
    buttons
) VALUES (
    'CONTACT',
    'Have a project in mind or want to discuss a collaboration? Get in touch using the information below.',
    'gayubaruwa27@gmail.com',
    'Surabaya, East Java, Indonesia',
    '[
        {
            "name": "GitHub",
            "href": "https://github.com/gayubrw",
            "icon": "github"
        },
        {
            "name": "LinkedIn", 
            "href": "https://linkedin.com/in/gayubaruwa",
            "icon": "linkedin"
        },
        {
            "name": "Twitter",
            "href": "https://twitter.com/gayubrw", 
            "icon": "twitter"
        },
        {
            "name": "Instagram",
            "href": "https://instagram.com/gayubrw",
            "icon": "instagram"
        }
    ]'::jsonb,
    '[
        {
            "text": "Download CV",
            "href": "/CV.pdf",
            "isExternal": true
        },
        {
            "text": "View Projects",
            "href": "/projects",
            "isExternal": false
        }
    ]'::jsonb
);

-- Insert about data
INSERT INTO about_data (
    personal_info,
    education,
    experience,
    skills
) VALUES (
    '{
        "name": "Gayu Baruwa",
        "title": "Machine Learning & NLP Enthusiast | Full-Stack Web Developer",
        "bio": [
            "I''m an Informatics Engineering student at Institut Teknologi Sepuluh Nopember (ITS), with a primary focus on Machine Learning, NLP, and Data Science, complemented by full-stack web development experience.",
            "I''ve worked on projects covering text clustering, deep learning-based computer vision, and end-to-end ML pipelines, from data preprocessing to model evaluation. I also completed Dicoding Indonesia''s Machine Learning Bootcamp (Batch 8).",
            "On the software engineering side, I interned at GMF AeroAsia, building internal automation tools using Microsoft Power Apps, Power Automate, and SharePoint. I''ve also built web applications using Laravel, Vue.js, React, and Next.js."
        ],
        "location": "Surabaya, East Java, Indonesia",
        "email": "gayubaruwa27@gmail.com"
    }'::jsonb,
    '[
        {
            "degree": "Bachelor of Informatics Engineering",
            "institution": "Institut Teknologi Sepuluh Nopember (ITS)",
            "period": "2022 - Present",
            "description": "GPA: 3.39/4.00"
        },
        {
            "degree": "Machine Learning Engineer - Batch 8",
            "institution": "Dicoding Bootcamp",
            "period": "June 2025 - November 2025",
            "description": "Learn machine learning techniques, data processing with Python, and the application of AI algorithms to technology-based industries."
        }
    ]'::jsonb,
    '[
        {
            "position": "Coordinator",
            "company": "Himpunan Mahasiswa Teknik Computer - Informatika ITS (HMTC)",
            "period": "2022 - 2023",
            "type": "Organization",
            "description": "Coordinated weekly training schedules for the Informatics Futsal Club, Organized friendly Futsal matches for all Informatics Engineering students, Managed and oversaw the operational activities of the club to ensure consistent participation and performance.",
            "achievements": [
                "Successfully organized multiple futsal tournaments",
                "Increased club participation by 40%",
                "Established training partnerships with local clubs"
            ]
        }
    ]'::jsonb,
    '[
        {
            "category": "Frontend",
            "skills": [
                {"name": "React.js", "level": 90},
                {"name": "Next.js", "level": 85},
                {"name": "Vue.js", "level": 80},
                {"name": "TypeScript", "level": 85},
                {"name": "JavaScript", "level": 90},
                {"name": "Tailwind CSS", "level": 90},
                {"name": "HTML/CSS", "level": 95}
            ]
        },
        {
            "category": "Backend",
            "skills": [
                {"name": "Laravel", "level": 85},
                {"name": "PHP", "level": 80},
                {"name": "Node.js", "level": 75},
                {"name": "API Development", "level": 85},
                {"name": "Database Design", "level": 80}
            ]
        },
        {
            "category": "Database & Tools",
            "skills": [
                {"name": "PostgreSQL", "level": 80},
                {"name": "MySQL", "level": 85},
                {"name": "Supabase", "level": 85},
                {"name": "Git", "level": 90},
                {"name": "Docker", "level": 70}
            ]
        }
    ]'::jsonb
);

-- Insert hero data
INSERT INTO hero_data (
    name,
    tagline,
    description,
    cta_buttons,
    background_config
) VALUES (
    'Gayu Baruwa',
    'Machine Learning & NLP Enthusiast | Full-Stack Web Developer',
    'Informatics Engineering student building end-to-end ML/NLP pipelines and deep learning models, alongside full-stack web applications.',
    '[
        {
            "text": "View My Work",
            "href": "/projects",
            "type": "primary"
        },
        {
            "text": "Get In Touch",
            "href": "/contact", 
            "type": "secondary"
        }
    ]'::jsonb,
    '{
        "showParticles": true,
        "particleCount": 100,
        "showScrollIndicator": true
    }'::jsonb
);

-- Insert site settings
INSERT INTO site_settings (
    site_name,
    site_description,
    site_url,
    theme_config,
    seo_config
) VALUES (
    'PortoGayu',
    'Portfolio showcasing Machine Learning, NLP, and full-stack web development projects by Gayu Baruwa.',
    'https://portogayu.vercel.app',
    '{
        "primaryColor": "#ffffff",
        "backgroundColor": "#000000",
        "accentColor": "#gray",
        "fontFamily": "Inter, system-ui, sans-serif"
    }'::jsonb,
    '{
        "keywords": ["portfolio", "machine learning", "NLP", "data science", "deep learning", "PyTorch", "full-stack developer", "web development", "React", "Next.js", "Laravel"],
        "author": "Gayu Baruwa",
        "ogImage": "/images/og-image.png"
    }'::jsonb
);

-- ================================================
-- VERIFICATION QUERIES
-- ================================================

-- Check all new tables
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE tablename IN ('contact_data', 'about_data', 'hero_data', 'site_settings')
ORDER BY tablename;

-- Check sample data counts
SELECT 'contact_data' as table_name, COUNT(*) as row_count FROM contact_data
UNION ALL
SELECT 'about_data' as table_name, COUNT(*) as row_count FROM about_data
UNION ALL
SELECT 'hero_data' as table_name, COUNT(*) as row_count FROM hero_data
UNION ALL
SELECT 'site_settings' as table_name, COUNT(*) as row_count FROM site_settings;

-- View contact data
SELECT id, header_title, email, location FROM contact_data WHERE is_active = true;

-- View about data structure
SELECT id, personal_info->>'name' as name, personal_info->>'title' as title FROM about_data WHERE is_active = true;
