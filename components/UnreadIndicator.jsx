"use client";

import { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/adminAuth";
import { peekUnreadCount, CHANGE_EVENT, STORAGE_KEY_NAME } from "@/lib/submissionsStore";
import styles from "./UnreadIndicator.module.css";

/**
 * Indicador (no es un enlace) de formularios sin leer en el panel.
 *
 * Solo aparece en el navegador donde el administrador tiene la sesión
 * iniciada y cuando hay al menos un formulario sin leer. Para el resto de
 * los visitantes no se muestra nada.
 */
export default function UnreadIndicator({ className = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;

    const refresh = async () => {
      const authed = await isAuthenticated();
      if (!active) return;
      setCount(authed ? peekUnreadCount() : 0);
    };

    const onStorage = (e) => {
      if (!e.key || e.key === STORAGE_KEY_NAME || e.key.startsWith("ipc_admin")) refresh();
    };

    refresh();
    window.addEventListener(CHANGE_EVENT, refresh);
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", refresh);
    return () => {
      active = false;
      window.removeEventListener(CHANGE_EVENT, refresh);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  if (count <= 0) return null;

  const label = `${count} formulario${count === 1 ? "" : "s"} sin leer`;

  return (
    <span className={`${styles.indicator} ${className}`} role="status" aria-label={label} title={label}>
      {count > 99 ? "99+" : count}
    </span>
  );
}
