"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/lib/types";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      console.log("=== Frontend Form Debug ===");
      console.log("Form data to submit:", data);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const result = await response.json();
      console.log("Response data:", result);

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Pesan berhasil dikirim! Saya akan segera membalas email Anda.",
        });
        reset();
      } else {
        console.error("Submit failed:", result);
        setSubmitStatus({
          type: "error",
          message: result.error || "Terjadi kesalahan saat mengirim pesan.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Terjadi kesalahan jaringan. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`ornate-frame p-6 ${className}`}>
      <div className="ornate-inner p-8">
        <h2 className="text-2xl theme-text-cream font-bold tracking-wider mb-6 text-center">
          SEND MESSAGE
        </h2>

        {submitStatus.type && (
          <div
            className={`mb-6 p-4 rounded border ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border-green-700 text-green-300"
                : "bg-red-900/20 border-red-700 text-red-300"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block theme-text-red text-sm mb-2">
              Nama Lengkap *
            </label>
            <input
              {...register("name", {
                required: "Nama lengkap wajib diisi",
                minLength: { value: 2, message: "Nama minimal 2 karakter" },
              })}
              type="text"
              id="name"
              className="w-full px-4 py-3 theme-bg-black border border-theme-red theme-text-cream placeholder-theme-cream focus:border-theme-red focus:outline-none focus:ring-1 focus:ring-theme-red transition-colors"
              placeholder="Masukkan nama lengkap Anda"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block theme-text-red text-sm mb-2"
            >
              Email *
            </label>
            <input
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 theme-bg-black border border-theme-red theme-text-cream placeholder-theme-cream focus:border-theme-red focus:outline-none focus:ring-1 focus:ring-theme-red transition-colors"
              placeholder="contoh@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block theme-text-red text-sm mb-2"
            >
              Subjek *
            </label>
            <input
              {...register("subject", {
                required: "Subjek wajib diisi",
                minLength: { value: 5, message: "Subjek minimal 5 karakter" },
              })}
              type="text"
              id="subject"
              className="w-full px-4 py-3 theme-bg-black border border-theme-red theme-text-cream placeholder-theme-cream focus:border-theme-red focus:outline-none focus:ring-1 focus:ring-theme-red transition-colors"
              placeholder="Subjek pesan Anda"
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block theme-text-red text-sm mb-2"
            >
              Pesan *
            </label>
            <textarea
              {...register("message", {
                required: "Pesan wajib diisi",
                minLength: { value: 10, message: "Pesan minimal 10 karakter" },
              })}
              id="message"
              rows={6}
              className="w-full px-4 py-3 theme-bg-black border border-theme-red theme-text-cream placeholder-theme-cream focus:border-theme-red focus:outline-none focus:ring-1 focus:ring-theme-red transition-colors resize-vertical"
              placeholder="Tulis pesan Anda di sini..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full theme-bg-black border border-theme-red theme-text-red px-6 py-3 hover:theme-bg-red hover:theme-text-cream transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 theme-text-cream"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Mengirim...
                </span>
              ) : (
                "Kirim Pesan"
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="theme-text-cream text-sm">* Field wajib diisi</p>
        </div>
      </div>
    </div>
  );
}
