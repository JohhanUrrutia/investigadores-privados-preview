import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, PhoneIcon } from "./icons/Icons";
import styles from "./Footer.module.css";

const PHONE_DISPLAY = "+56 9 7644 7389";
const PHONE_HREF = "tel:+56976447389";
const LINKEDIN_URL = "https://www.linkedin.com/in/vestigadoresprivadoschile/";

const LINKS = [
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/servicios", label: "Servicios" },
  { href: "/#cobertura", label: "Cobertura" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logos/logo-ipc-white.svg"
              alt="Investigadores Privados Chile"
              width={210}
              height={46}
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.tag}>
            Gestión y búsqueda de información y evidencias en todo Chile y el
            extranjero.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Enlaces del pie de página">
          <span className={styles.navTitle}>Navegación</span>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactBlock}>
          <span className={styles.navTitle}>Contacto</span>
          <a href={PHONE_HREF} className={styles.contactLink}>
            <PhoneIcon width={16} height={16} />
            {PHONE_DISPLAY}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <LinkedInIcon width={16} height={16} />
            LinkedIn
          </a>

          <Link href="/administrar" className={styles.adminLink}>
            Administrar
          </Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} Investigadores Privados Chile. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
