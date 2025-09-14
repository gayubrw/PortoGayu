import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { ContactFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    console.log("=== Contact API Debug ===");

    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log("Supabase URL exists:", !!supabaseUrl);
    console.log("Supabase Key exists:", !!supabaseKey);
    console.log("Supabase URL:", supabaseUrl?.substring(0, 30) + "...");

    const body: ContactFormData = await request.json();
    console.log("Request body received:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      messageLength: body.message?.length,
    });

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      console.log("Validation failed - missing fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log("Validation failed - invalid email format");
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("About to insert into Supabase...");

    // Insert contact message into Supabase
    const { data, error } = await supabaseAdmin
      .from("contact_messages")
      .insert([
        {
          name: body.name.trim(),
          email: body.email.trim().toLowerCase(),
          subject: body.subject.trim(),
          message: body.message.trim(),
          status: "unread",
        },
      ])
      .select();

    console.log("Supabase response:", { data, error });

    if (error) {
      console.error("Supabase error details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return NextResponse.json(
        { error: "Failed to save message", details: error.message },
        { status: 500 }
      );
    }

    console.log("Successfully inserted:", data);

    // Log visitor data (optional)
    const userAgent = request.headers.get("user-agent") || "";
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ipAddress = forwardedFor?.split(",")[0] || realIp || "";

    await supabaseAdmin.from("visitors").insert([
      {
        ip_address: ipAddress,
        user_agent: userAgent,
        page_visited: "/api/contact",
        referrer: request.headers.get("referer") || null,
      },
    ]);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
        data: data[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error details:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint is working" },
    { status: 200 }
  );
}
