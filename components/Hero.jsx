"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationIcon, ShieldIcon, CameraIcon, ArrowIcon } from "./icons/Icons";
import styles from "./Hero.module.css";

// Mensajes rotativos del header, uno por cada frente de trabajo de la
// agencia (ver components/Services.jsx y ParticularServices.jsx).
const MESSAGES = [
  {
    eyebrow: "Agencia de investigación privada",
    title: "Búsqueda de información y evidencias en todo Chile y el extranjero.",
    text: "Somos especialistas en la gestión y búsqueda de información, con apoyo directo en Santiago y en las principales regiones del país.",
  },
  {
    eyebrow: "Vigilancias especiales",
    title: "Observación y seguimiento, siempre dentro de la ley.",
    text: "Vigilancia discreta de personas y vehículos, realizada exclusivamente desde lugares públicos.",
  },
  {
    eyebrow: "Búsqueda de vehículos y bienes",
    title: "Localizamos lo que otros no encuentran.",
    text: "Apoyo en la ubicación e incautación de vehículos, camiones, maquinaria y bienes en todo el territorio nacional.",
  },
  {
    eyebrow: "Evidencia verificable",
    title: "Cada hallazgo, respaldado con pruebas reales.",
    text: "Registro fotográfico y en video que documenta y respalda cada etapa de la investigación.",
  },
  {
    eyebrow: "Reserva y confidencialidad",
    title: "Su caso, tratado con máxima discreción.",
    text: "Apoyo a receptores judiciales, empresas y particulares bajo un manejo estrictamente reservado de la información.",
  },
];

const FEATURES = [
  {
    icon: LocationIcon,
    title: "Cobertura nacional",
    text: "Personal disponible de Arica a Punta Arenas.",
  },
  {
    icon: ShieldIcon,
    title: "Confidencialidad",
    text: "Manejo reservado de cada investigación.",
  },
  {
    icon: CameraIcon,
    title: "Evidencia verificable",
    text: "Registro fotográfico y en video de respaldo.",
  },
];

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <video
        className={styles.video}
        src="/videos/header-loop.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className={styles.overlay} />
      <div className="grain" />
      <div className={styles.scanline} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.frame}>
          <span className={styles.corner} data-pos="tl" />
          <span className={styles.corner} data-pos="tr" />
          <span className={styles.corner} data-pos="bl" />
          <span className={styles.corner} data-pos="br" />

          <Image
            src="/logos/logo-ipc-golden.svg"
            alt=""
            aria-hidden="true"
            width={500}
            height={110}
            className={styles.watermark}
          />

          <div className={styles.messages}>
            {MESSAGES.map((m, i) => (
              <div
                key={m.title}
                className={`${styles.copy} ${i === index ? styles.copyActive : ""}`}
                aria-hidden={i !== index}
              >
                <p className={styles.eyebrow}>{m.eyebrow}</p>
                <h1 className={styles.title}>{m.title}</h1>
                <p className={styles.lead}>{m.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/contacto" className={styles.primaryCta}>
              Solicitar consulta
              <ArrowIcon width={16} height={16} />
            </Link>
            <Link href="/servicios" className={styles.secondaryCta}>
              Ver servicios
            </Link>
          </div>

          <div className={styles.dots}>
            {MESSAGES.map((m, i) => (
              <button
                key={m.title}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Ver mensaje ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <ul className={styles.features}>
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon width={26} height={26} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
