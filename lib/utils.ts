import {
  ProjectType,
  ContactDataType,
  AboutDataType,
  HeroDataType,
} from "@/lib/types";
import { projects as staticProjects } from "@/lib/projectData";
import { contactData as staticContactData } from "@/lib/contactData";
import { aboutData as staticAboutData } from "@/lib/aboutData";
import { supabase } from "@/lib/supabase";

/**
 * Fetch projects with fallback to static data
 * This ensures the site works even if Supabase is not configured
 */
export async function getProjects(): Promise<ProjectType[]> {
  try {
    // Check if Supabase is configured
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      !supabase
    ) {
      console.log("Supabase not configured, using static data");
      return staticProjects;
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      console.warn("Supabase error, falling back to static data:", error);
      return staticProjects;
    }

    if (!data || data.length === 0) {
      console.log("No projects in database, using static data");
      return staticProjects;
    }

    // Transform database format to frontend format
    const transformedProjects: ProjectType[] = data.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      longDescription: project.long_description,
      tags: project.tags,
      imageUrl: project.image_url,
      demoUrl: project.demo_url,
      githubUrl: project.github_url,
      features: project.features,
    }));

    return transformedProjects;
  } catch (error) {
    console.warn(
      "Error fetching projects, falling back to static data:",
      error
    );
    return staticProjects;
  }
}

/**
 * Log visitor data if Supabase is available
 */
export async function logVisitor(pageVisited: string, request?: Request) {
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      !supabase
    ) {
      return; // Supabase not configured
    }

    const userAgent = request?.headers.get("user-agent") || "";
    const forwardedFor = request?.headers.get("x-forwarded-for");
    const realIp = request?.headers.get("x-real-ip");
    const ipAddress = forwardedFor?.split(",")[0] || realIp || "";

    await supabase.from("visitors").insert([
      {
        ip_address: ipAddress || null,
        user_agent: userAgent,
        page_visited: pageVisited,
        referrer: request?.headers.get("referer") || null,
      },
    ]);
  } catch (error) {
    console.warn("Error logging visitor:", error);
    // Don't throw error, just log it
  }
}

/**
 * Check if Supabase is properly configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "your_supabase_url_here" &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== "your_supabase_anon_key_here"
  );
}

/**
 * Fetch contact data with fallback to static data
 */
export async function getContactData(): Promise<ContactDataType> {
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      !supabase
    ) {
      return staticContactData;
    }

    const { data, error } = await supabase
      .from("contact_data")
      .select("*")
      .eq("is_active", true)
      .single();

    if (error || !data) {
      console.warn("Contact data error, falling back to static:", error);
      return staticContactData;
    }

    return {
      header: {
        title: data.header_title,
        subtitle: data.header_subtitle,
      },
      contactInfo: {
        email: data.email,
        location: data.location,
        socialLinks: data.social_links,
      },
      buttons: data.buttons,
    };
  } catch (error) {
    console.warn("Error fetching contact data:", error);
    return staticContactData;
  }
}

/**
 * Fetch about data with fallback to static data
 */
export async function getAboutData(): Promise<AboutDataType> {
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      !supabase
    ) {
      return staticAboutData;
    }

    const { data, error } = await supabase
      .from("about_data")
      .select("*")
      .eq("is_active", true)
      .single();

    if (error || !data) {
      console.warn("About data error, falling back to static:", error);
      return staticAboutData;
    }

    // Handle different data structures from Supabase
    let personalInfo;
    if (Array.isArray(data.personal_info) && data.personal_info.length > 0) {
      // Handle array structure: personal_info[0].personalInfo
      const firstPersonal = data.personal_info[0];
      personalInfo = firstPersonal.personalInfo || firstPersonal;
    } else if (data.personal_info && typeof data.personal_info === "object") {
      // Handle direct object structure
      personalInfo = data.personal_info.personalInfo || data.personal_info;
    } else {
      // Fallback to static data if structure is unexpected
      console.log("Unexpected personal_info structure, using static data");
      return staticAboutData;
    }

    return {
      personalInfo: {
        name: personalInfo?.name || "Gayu Baruwa",
        title: personalInfo?.title || "Full-Stack Developer",
        bio: personalInfo?.bio || ["Bio not available"], // This can be string or array
        location: personalInfo?.location || "Surabaya, East Java, Indonesia",
        email: personalInfo?.email || "gayubaruwa27@gmail.com",
      },
      education: data.education || [],
      experience: data.experience || [],
      workExperience: data.work_experience || [], // Add work experience from database
      skills: data.skills || [],
    };
  } catch (error) {
    console.warn("Error fetching about data:", error);
    return staticAboutData;
  }
}

/**
 * Fetch hero data with fallback
 */
export async function getHeroData(): Promise<HeroDataType> {
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      !supabase
    ) {
      return getDefaultHeroData();
    }

    const { data, error } = await supabase
      .from("hero_data")
      .select("*")
      .eq("is_active", true)
      .single();

    if (error || !data) {
      console.warn("Hero data error, falling back to default:", error);
      return getDefaultHeroData();
    }

    return {
      tagline: data.tagline,
      description: data.description,
      ctaButtons: data.cta_buttons,
    };
  } catch (error) {
    console.warn("Error fetching hero data:", error);
    return getDefaultHeroData();
  }
}

function getDefaultHeroData(): HeroDataType {
  return {
    tagline: "Machine Learning & NLP Enthusiast | Full-Stack Web Developer",
    description:
      "Informatics Engineering student building end-to-end ML/NLP pipelines and deep learning models, alongside full-stack web applications.",
    ctaButtons: [
      { text: "View My Work", href: "#projects", type: "primary" },
      {
        text: "About Me",
        href: "#about",
        type: "secondary",
      },
    ],
  };
}
