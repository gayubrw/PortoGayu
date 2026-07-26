// Styled fallback shown when a project has no image yet.
// Fills its (relatively/absolutely positioned) container and matches the
// site's dark red/cream card styling so it reads as intentional, not broken.
export default function ProjectPlaceholder({
  title,
  label,
}: {
  title: string;
  label?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 theme-bg-black">
      {/* Subtle grid pattern, same language as the section backgrounds */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #A11312 1px, transparent 1px),
            linear-gradient(to bottom, #A11312 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 mb-4 border border-theme-red/50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-theme-red/70"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>

        <h3 className="theme-text-cream font-bold text-sm md:text-base tracking-wide max-w-[16rem]">
          {title}
        </h3>

        {label ? (
          <p className="mt-2 text-[0.6rem] tracking-[0.25em] uppercase theme-text-red">
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
