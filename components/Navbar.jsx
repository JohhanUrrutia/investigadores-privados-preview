"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { MenuIcon, CloseIcon, PhoneIcon, LinkedInIcon, LocationIcon } from "./icons/Icons";

const NAV_LINKS = [
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

// Áreas de investigación que ofrece la agencia (ver components/Services.jsx
// y components/ParticularServices.jsx).
const SERVICES = [
  "Vigilancias especiales",
  "Búsqueda de vehículos",
  "Levantamiento de evidencias",
  "Localización de personas",
  "Apoyo a receptores judiciales",
  "Seguimiento de redes sociales",
  "ADN por paternidad",
  "Detección de falsificaciones",
  "Amistades furtivas",
  "Control de pérdidas",
  "Infidelidades",
  "Evaluaciones prenupciales",
];

const PHONE_DISPLAY = "+56 9 7644 7389";
const PHONE_HREF = "tel:+56976447389";
const LINKEDIN_URL = "https://www.linkedin.com/in/vestigadoresprivadoschile/";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Transparente solo en el tope del inicio (sobre el video). En el resto
  // del sitio, o al hacer scroll, siempre lleva fondo sólido.
  const transparent = isHome && !scrolled;

  return (
    <header className={`${styles.header} ${transparent ? "" : styles.solid}`}>
      <div className={styles.ticker} aria-hidden="true">
        <div className={`container ${styles.tickerInner}`}>
          <div className={styles.tickerTrack}>
            <div className={styles.tickerMarquee}>
              {SERVICES.map((s) => (
                <span key={s} className={styles.tickerItem}>
                  {s}
                </span>
              ))}
              {SERVICES.map((s) => (
                <span key={`dup-${s}`} className={styles.tickerItem}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <a href={PHONE_HREF} className={styles.topbarItem}>
            <PhoneIcon width={14} height={14} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topbarItem}
          >
            <LinkedInIcon width={14} height={14} />
            <span>Investigadores Privados Chile</span>
          </a>
          <span className={styles.topbarLocation}>
            <LocationIcon width={14} height={14} />
            <span>Cobertura en todo Chile</span>
          </span>
        </div>
      </div>

      <div className={styles.navBar}>
        <nav className={`container ${styles.nav}`}>
          <Link href="/" className={styles.logo} aria-label="Investigadores Privados Chile - Inicio">
            <Image
              src="/logos/logo-ipc-white.svg"
              alt="Investigadores Privados Chile"
              width={220}
              height={48.5}
              priority
              className={styles.logoImg}
            />
          </Link>

          <ul className={styles.links}>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a href={PHONE_HREF} className={styles.callButton}>
            <PhoneIcon width={16} height={16} />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <CloseIcon width={26} height={26} /> : <MenuIcon width={26} height={26} />}
          </button>
        </nav>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.mobileLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={PHONE_HREF} className={styles.mobileContact}>
          <PhoneIcon width={18} height={18} />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
