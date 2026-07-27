// Ambient declarations so TypeScript/the IDE accept side-effect imports of
// global stylesheets (e.g. `import "./globals.css"` in app/layout.tsx).
// Next.js processes the actual CSS at build time; this only satisfies the
// type checker (CLI `tsc` already passes — this silences the editor).
declare module "*.css";
