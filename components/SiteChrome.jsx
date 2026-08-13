"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * El panel de administración (/administrar y subrutas) es una zona aparte:
 * no muestra el navbar ni el footer del sitio público, solo su propio
 * contenido (login o panel).
 */
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdminArea = pathname?.startsWith("/administrar");

  if (isAdminArea) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
