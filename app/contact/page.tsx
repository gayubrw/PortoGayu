import type { Metadata } from "next";
import Link from "next/link";
import { contactData } from "@/lib/contactData";

export const metadata: Metadata = {
  title: "PortoGayu | Contact",
  description:
    "Hubungi saya untuk diskusi project atau kolaborasi. Tersedia informasi kontak lengkap termasuk email, lokasi, dan jam kerja.",
};

export default function ContactPage() {
  // Helper function to render social icons with Hero component styling
  const renderSocialIcon = (iconName: string) => {
    const icons = {
      github: (
        <svg
          className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      linkedin: (
        <svg
          className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      twitter: (
        <svg
          className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      instagram: (
        <svg
          className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    };
    return icons[iconName as keyof typeof icons] || null;
  };

  return (
    <div className="py-24 bg-black min-h-screen">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page header */}
        <div className="lg:text-center mb-16">
          {/* Section heading with decorative line */}
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gray-700"></div>
            <span className="mx-3 text-gray-500 text-sm tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px w-8 bg-gray-700"></div>
          </div>

          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            {contactData.header.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            {contactData.header.subtitle}
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Contact info */}
            <div className="mb-24">
              <div className="ornate-frame p-6">
                <div className="ornate-inner p-8 flex flex-col">
                  <h2 className="text-2xl text-white font-bold tracking-wider mb-10 text-center">
                    CONTACT INFO
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-black border border-gray-800">
                        <svg
                          className="w-6 h-6 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Email:</p>
                        <a
                          href={`mailto:${contactData.contactInfo.email}`}
                          className="text-gray-300 hover:text-white transition-colors lowercase"
                          style={{ textTransform: "none" }}
                        >
                          {contactData.contactInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-black border border-gray-800">
                        <svg
                          className="w-6 h-6 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Location:</p>
                        <p className="text-gray-300">
                          {contactData.contactInfo.location}
                        </p>
                      </div>
                    </div>

                    {/* Social Media - Centered across 2 columns */}
                    <div className="md:col-span-2 flex flex-col items-center space-y-6">
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-400 text-xl">Connect:</p>
                      </div>
                      <div className="flex justify-center space-x-8">
                        {contactData.contactInfo.socialLinks.map(
                          (social, index) => (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${social.name} Profile`}
                            >
                              {renderSocialIcon(social.icon)}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="professional-divider"></div>
                    <div className="flex justify-center space-x-6 mt-8">
                      {contactData.buttons.map((button, index) =>
                        button.isExternal ? (
                          <a
                            key={index}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark px-6 py-3"
                          >
                            {button.text}
                          </a>
                        ) : (
                          <Link
                            key={index}
                            href={button.href}
                            className="btn-dark px-6 py-3"
                          >
                            {button.text}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
