"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show footer on landing page (root path)
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
}
