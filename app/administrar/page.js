"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./administrar.module.css";
import { login, isAuthenticated } from "@/lib/adminAuth";

export default function AdministrarLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ user: "", pass: "" });
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    isAuthenticated().then((authed) => {
      if (!active) return;
      if (authed) {
        router.replace("/administrar/panel");
        return;
      }
      setReady(true);
    });
    return () => {
      active = false;
    };
  }, [router]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const result = await login(form.user.trim(), form.pass);
    setSubmitting(false);
    if (result.ok) {
      router.push("/administrar/panel");
    } else {
      setError(result.error);
    }
  }

  if (!ready) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <span className={styles.corner} data-pos="tl" />
        <span className={styles.corner} data-pos="br" />

        <Image
          src="/logos/logo-ipc-black.svg"
          alt="Investigadores Privados Chile"
          width={210}
          height={46}
          className={styles.logo}
        />

        <p className={styles.subtitle}>Panel de administración</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>Usuario</span>
            <input
              type="text"
              name="user"
              autoComplete="username"
              required
              value={form.user}
              onChange={handleChange}
              placeholder="Usuario"
            />
          </label>

          <label className={styles.field}>
            <span>Contraseña</span>
            <input
              type="password"
              name="pass"
              autoComplete="current-password"
              required
              value={form.pass}
              onChange={handleChange}
              placeholder="••••••"
            />
          </label>

          {error && <span className={styles.error}>{error}</span>}

          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? "Ingresando…" : "Entrar"}
          </button>
        </form>

        <Link href="/" className={styles.back}>
          ← Volver al sitio
        </Link>
      </div>
    </div>
  );
}
