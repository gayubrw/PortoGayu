"use client";

import { useState, useEffect } from "react";
import { supabase, ContactMessage } from "@/lib/supabase";

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      // Check if Supabase is configured
      if (!supabase) {
        setError(
          "Supabase is not configured. Admin panel requires database connection."
        );
        return;
      }

      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
        return;
      }

      setMessages(data || []);
    } catch (err) {
      setError("Failed to fetch messages");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      // Check if Supabase is configured
      if (!supabase) {
        console.error("Supabase is not configured");
        return;
      }

      const { error } = await supabase
        .from("contact_messages")
        .update({ status: "read" })
        .eq("id", id);

      if (error) {
        console.error("Error updating message:", error);
        return;
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, status: "read" as const } : msg
        )
      );
    } catch (err) {
      console.error("Error marking as read:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #A11312 1px, transparent 1px),
                linear-gradient(to bottom, #A11312 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="text-[#A11312] text-lg relative z-10">
          Loading Admin Dashboard...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #A11312 1px, transparent 1px),
                linear-gradient(to bottom, #A11312 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="text-red-400 relative z-10">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] py-24">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A11312 1px, transparent 1px),
              linear-gradient(to bottom, #A11312 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          {/* Section heading with decorative line */}
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-[#A11312]"></div>
            <span className="mx-3 text-[#A11312] text-sm tracking-widest uppercase">
              Admin Panel
            </span>
            <div className="h-px w-8 bg-[#A11312]"></div>
          </div>

          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            Admin Dashboard
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Manage contact messages and portfolio content.
          </p>
        </div>

        {/* Contact Messages Section */}
        <div className="mb-16">
          {/* Section title */}
          <div className="mb-8">
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-6 bg-[#A11312]"></div>
              <span className="mx-3 text-[#A11312] text-sm tracking-widest uppercase">
                Contact Messages
              </span>
              <div className="h-px w-6 bg-[#A11312]"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Messages ({messages.length})
            </h2>
          </div>

          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No messages yet.</div>
              <p className="text-gray-500 mt-2">
                Contact messages will appear here when received.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`border rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
                    message.status === "unread"
                      ? "border-[#A11312] bg-[#A11312]/5 shadow-[0_0_15px_rgba(254,231,21,0.1)]"
                      : "border-gray-700 bg-gray-900/30"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {message.subject}
                      </h3>
                      <p className="text-gray-300 mt-1">
                        From:{" "}
                        <span className="text-[#A11312]">{message.name}</span> (
                        {message.email})
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {new Date(message.created_at || "").toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          message.status === "unread"
                            ? "bg-[#A11312] text-[#000000]"
                            : "bg-gray-600 text-gray-100"
                        }`}
                      >
                        {message.status}
                      </span>
                      {message.status === "unread" && (
                        <button
                          onClick={() => message.id && markAsRead(message.id)}
                          className="px-4 py-2 bg-[#A11312] hover:bg-[#A11312]/80 text-[#000000] rounded transition-colors font-medium"
                        >
                          Mark as Read
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#000000]/80 border border-gray-700 p-4 rounded-lg">
                    <p className="whitespace-pre-wrap text-gray-300">
                      {message.message}
                    </p>
                  </div>

                  <div className="mt-4 flex space-x-3">
                    <a
                      href={`mailto:${message.email}?subject=Re: ${message.subject}&body=Hi ${message.name},%0D%0A%0D%0A`}
                      className="px-4 py-2 bg-[#A11312] hover:bg-[#A11312]/80 text-[#000000] rounded transition-colors font-medium inline-flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Reply via Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
