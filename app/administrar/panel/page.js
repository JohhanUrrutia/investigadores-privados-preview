"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { getSubmissions } from "@/lib/submissionsStore";

export default function PanelDashboardPage() {
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });

  useEffect(() => {
    let active = true;
    getSubmissions().then((submissions) => {
      if (!active) return;
      setStats({
        total: submissions.length,
        unread: submissions.filter((s) => !s.read).length,
        read: submissions.filter((s) => s.read).length,
      });
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Resumen</h1>
        <p className={styles.lead}>
          Revisa los formularios de contacto enviados desde el sitio. Este
          panel es una maqueta funcional (sin backend): los datos se guardan
          en este navegador.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardValue}>{stats.total}</span>
          <span className={styles.cardLabel}>Formularios recibidos</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardValue}>{stats.unread}</span>
          <span className={styles.cardLabel}>Sin leer</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardValue}>{stats.read}</span>
          <span className={styles.cardLabel}>Leídos</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href="/administrar/panel/formularios" className={styles.primaryBtn}>
          Ver formularios
        </Link>
        <Link href="/contacto" className={styles.outlineBtn}>
          Ver formulario público
        </Link>
      </div>
    </div>
  );
}
