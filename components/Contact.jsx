"use client";

import { useState } from "react";
import { PhoneIcon, LinkedInIcon, ArrowIcon, ShieldIcon } from "./icons/Icons";
import { addSubmission } from "@/lib/submissionsStore";
import styles from "./Contact.module.css";

const PHONE_DISPLAY = "+56 9 7644 7389";
const PHONE_HREF = "tel:+56976447389";
const LINKEDIN_URL = "https://www.linkedin.com/in/vestigadoresprivadoschile/";

const SERVICE_OPTIONS = [
  "Vigilancias especiales",
  "Búsqueda de vehículos",
  "Levantamiento de evidencias",
  "Localización de personas",
  "Apoyo a receptores judiciales",
  "Seguimiento de redes sociales",
  "ADN por paternidad",
  "Detección de falsificaciones",
  "Infidelidades / amistades furtivas",
  "Control de pérdidas",
  "Evaluaciones prenupciales",
  "Otro",
];

const EMPTY_FORM = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await addSubmission(form);
      setSent(true);
      setForm(EMPTY_FORM);
    } catch {
      setError("No pudimos enviar el formulario. Intente nuevamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <span className={styles.formCorner} data-pos="tl" />
            <span className={styles.formCorner} data-pos="br" />

            <p className="eyebrow">Formulario reservado</p>
            <h2 className={styles.formTitle}>Cuéntenos su caso</h2>
            <p className={styles.formLead}>
              La información enviada aquí es tratada con reserva absoluta por
              nuestro equipo.
            </p>

            {sent ? (
              <div className={styles.success}>
                <ShieldIcon width={22} height={22} />
                <div>
                  <strong>Mensaje enviado.</strong>
                  <p>Nos pondremos en contacto a la brevedad.</p>
                </div>
                <button
                  type="button"
                  className={styles.sendAnother}
                  onClick={() => setSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <div className={styles.grid}>
                  <label className={styles.field}>
                    <span>Nombre</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nombre completo"
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Correo</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Teléfono (opcional)</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+56 9 0000 0000"
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Motivo de consulta</span>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="" disabled>
                        Seleccione un área
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className={styles.field}>
                  <span>Mensaje</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describa brevemente su caso…"
                  />
                </label>

                {error && <span className={styles.error}>{error}</span>}

                <button type="submit" className={styles.submit} disabled={submitting}>
                  {submitting ? "Enviando…" : "Enviar mensaje"}
                  <ArrowIcon width={16} height={16} />
                </button>
              </>
            )}
          </form>

          <div className={styles.cards}>
            <a href={PHONE_HREF} className={styles.card}>
              <PhoneIcon width={28} height={28} />
              <div>
                <span className={styles.cardLabel}>Teléfono</span>
                <span className={styles.cardValue}>{PHONE_DISPLAY}</span>
              </div>
              <ArrowIcon width={18} height={18} className={styles.cardArrow} />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <LinkedInIcon width={28} height={28} />
              <div>
                <span className={styles.cardLabel}>LinkedIn</span>
                <span className={styles.cardValue}>Investigadores Privados Chile</span>
              </div>
              <ArrowIcon width={18} height={18} className={styles.cardArrow} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
