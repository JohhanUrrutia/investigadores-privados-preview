"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  LocationIcon,
  ShieldIcon,
  CameraIcon,
  ArrowIcon,
  LockIcon,
} from "./icons/Icons";
import styles from "./Hero.module.css";

// Mensajes rotativos del header, uno por cada frente de trabajo de la
// agencia (ver lib/services.js).
const MESSAGES = [
  {
    eyebrow: "Agencia de investigación privada",
    title:
      "Búsqueda de información y evidencias en todo Chile y el extranjero.",
    text: "Información y evidencias sobre conductas familiares, personales, laborales y comerciales, en Santiago de Chile, regiones y el extranjero.",
  },
  {
    eyebrow: "Vigilancias especiales",
    title: "Observación y seguimiento, siempre dentro de la ley.",
    text: "Vigilancia discreta de personas y vehículos, realizada exclusivamente desde lugares públicos.",
  },
  {
    eyebrow: "Empresas y particulares",
    title: "Fraudes, ausentismo laboral y competencia desleal.",
    text: "Investigaciones corporativas, due diligence, herencias nacionales e internacionales y localización de personas y domicilios.",
  },
  {
    eyebrow: "Evidencia verificable",
    title: "Cada hallazgo, respaldado con pruebas reales.",
    text: "Registro fotográfico y en video que documenta y respalda cada etapa de la investigación.",
  },
  {
    eyebrow: "Reserva y confidencialidad",
    title: "Todo contacto y contratación es 100% confidencial.",
    text: "Su identidad y la información de su caso se manejan bajo estricta reserva, desde la primera consulta hasta el informe final.",
  },
];

// Etiquetas que acompañan cada toma del video (cambia de escena
// aproximadamente cada 1 segundo). Solo se superponen como texto: el
// archivo de video no se modifica.
const SCENES = [
  "Vigilancia desde vehículo",
  "Seguimiento de vehículo",
  "Levantamiento de evidencia",
  "Verificación de domicilio",
  "Notificación",
  "Análisis de redes sociales",
  "Coordinación ADN",
  "Análisis documental",
  "Vigilancia nocturna",
  "Control de pérdidas",
];
const SCENE_SECONDS = 1;

const FEATURES = [
  {
    icon: LocationIcon,
    title: "Cobertura nacional",
    text: "Personal disponible de Arica a Punta Arenas.",
  },
  {
    icon: ShieldIcon,
    title: "Confidencialidad",
    text: "Todo contacto y contratación es estrictamente confidencial.",
  },
  {
    icon: CameraIcon,
    title: "Evidencia verificable",
    text: "Registro fotográfico y en video de respaldo.",
  },
];

const AUTOPLAY_MS = 5500;

const two = (n) => String(n).padStart(2, "0");

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [scene, setScene] = useState(0);
  const [clock, setClock] = useState("--:--:--");
  const videoRef = useRef(null);

  // Rotación de mensajes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  // Reloj tipo cámara (se calcula en el cliente para no generar
  // diferencias entre servidor y navegador).
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}`,
      );
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  // Sincroniza la etiqueta de escena con el tiempo del video.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      const i = Math.min(
        SCENES.length - 1,
        Math.floor(v.currentTime / SCENE_SECONDS),
      );
      setScene((prev) => (prev === i ? prev : i));
    };
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      {/* ================= Pantalla con el video ================= */}
      <div className={styles.stage}>
        <div className={styles.screen}>
          <video
            ref={videoRef}
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

          {/* Solo una franja superior suave para que el menú se lea; el resto
            del video queda limpio, sin sombreado. */}
          <div className={styles.topFade} aria-hidden="true" />

          {/* Interfaz tipo visor de cámara */}
          <div className={styles.hud} aria-hidden="true">
            <span className={styles.bracket} data-pos="tl" />
            <span className={styles.bracket} data-pos="tr" />
            <span className={styles.bracket} data-pos="bl" />
            <span className={styles.bracket} data-pos="br" />

            <div className={styles.hudTop}>
              <span className={styles.rec}>
                <span className={styles.recDot} />
                REC
              </span>
              <span className={styles.hudMono}>{clock}</span>
            </div>

            <div className={styles.reticle}>
              <span />
            </div>

            <div className={styles.hudBottom}>
              <div className={styles.sceneLabel}>
                <span className={styles.hudMono}>CAM {two(scene + 1)}</span>
                <span key={scene} className={styles.sceneName}>
                  {SCENES[scene]}
                </span>
              </div>
              <div className={styles.sceneBar}>
                {SCENES.map((s, i) => (
                  <span key={s} className={i <= scene ? styles.sceneOn : ""} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= Panel de contenido ================= */}
        <div className={`container ${styles.panelWrap}`}>
          <div className={styles.panel}>
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

            <div className={styles.panelFoot}>
              <p className={styles.confidential}>
                <LockIcon width={15} height={15} />
                Consulta y contratación 100% confidencial
              </p>

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
          </div>
        </div>
      </div>

      {/* ================= Franja de atributos ================= */}
      <div className={styles.strip}>
        <ul className={`container ${styles.features}`}>
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon width={24} height={24} />
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
