"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./panel.module.css";
import { logout, isAuthenticated } from "@/lib/adminAuth";
import { getUnreadCount } from "@/lib/submissionsStore";

const NAV = [
  { href: "/administrar/panel", label: "Resumen" },
  { href: "/administrar/panel/formularios", label: "Formularios" },
];

// Maqueta sin backend: la protección de esta sección se verifica en el
// cliente, contra la marca de sesión guardada en localStorage.
export default function PanelLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [unread, setUnread] = useState(0);
  const [checked, setChecked] = useState(false);

  const refreshUnread = useCallback(() => {
    getUnreadCount().then(setUnread).catch(() => {});
  }, []);

  useEffect(() => {
    let active = true;
    isAuthenticated().then((authed) => {
      if (!active) return;
      if (!authed) {
        router.replace("/administrar");
        return;
      }
      setChecked(true);
    });
    return () => {
      active = false;
    };
  }, [router]);

  useEffect(() => {
    refreshUnread();
    window.addEventListener("focus", refreshUnread);
    return () => {
      window.removeEventListener("focus", refreshUnread);
    };
  }, [pathname, refreshUnread]);

  async function handleLogout() {
    await logout();
    router.push("/administrar");
  }

  if (!checked) return null;

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <Image
          src="/logos/logo-ipc-white.svg"
          alt="Investigadores Privados Chile"
          width={200}
          height={44}
          className={styles.logo}
        />
        <nav className={styles.nav}>
          {NAV.map((item) => {
            const active =
              item.href === "/administrar/panel"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active ? styles.linkActive : ""}`}
              >
                <span>{item.label}</span>
                {item.href.endsWith("formularios") && unread > 0 && (
                  <span className={styles.badge}>{unread}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className={styles.spacer} />
        <div className={styles.footerLinks}>
          <Link href="/">Volver al sitio</Link>
          <button type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
