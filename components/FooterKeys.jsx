"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./FooterKeys.module.css";

/**
 * Fila de 5 íconos del footer. A simple vista son decorativos: al
 * presionarlos solo cambian de color un instante.
 *
 * La ruta de acceso no está escrita en el código: va cifrada y solo se
 * descifra con la combinación correcta de íconos. Cualquier otra
 * combinación no hace nada.
 */

const SECRET = [10, 29, 183, 130, 58, 110, 220, 63, 157, 254, 167];
const CHECK = 3350885722;
const LENGTH = 5;
const RESET_MS = 4000;
const FLASH_MS = 450;

const keyAt = (seq, i) => ((seq[i % seq.length] + 1) * 37 + i * 11) & 0xff;

function fnv1a(str) {
  let h = 2166136261;
  for (const c of str) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

function tryUnlock(seq) {
  const path = String.fromCharCode(...SECRET.map((b, i) => b ^ keyAt(seq, i)));
  return fnv1a(path) === CHECK ? path : null;
}

const ICONS = [
  {
    label: "Observación",
    path: (
      <>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    label: "Búsqueda",
    path: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="15.2" y1="15.2" x2="20.5" y2="20.5" />
      </>
    ),
  },
  {
    label: "Huella",
    path: (
      <>
        <path d="M6.5 17.5c1-1.8 1.5-3.6 1.5-5.5a4 4 0 0 1 8 0c0 2.6-.5 5-1.6 7.3" />
        <path d="M12 12c0 3-1 5.8-2.8 8" />
        <path d="M4.5 13.5c.3-.9.5-1.6.5-2.5a7 7 0 0 1 12.6-4.2" />
        <path d="M19 9.5c.3.8.5 1.6.5 2.5 0 2.3-.4 4.5-1.1 6.5" />
      </>
    ),
  },
  {
    label: "Cámara",
    path: (
      <>
        <path d="M3.5 8.5a1 1 0 0 1 1-1h2.2l1-1.6h8.6l1 1.6h2.2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-9Z" />
        <circle cx="12" cy="13" r="3.3" />
      </>
    ),
  },
  {
    label: "Reserva",
    path: (
      <>
        <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
        <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
        <line x1="12" y1="14.5" x2="12" y2="16.5" />
      </>
    ),
  },
];

export default function FooterKeys({ note }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState(null);
  const seqRef = useRef([]);
  const resetTimer = useRef(null);
  const flashTimer = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(resetTimer.current);
      clearTimeout(flashTimer.current);
    },
    []
  );

  function press(i) {
    // Cambio de color momentáneo, nada más.
    setFlash({ i, t: Date.now() });
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), FLASH_MS);

    // Guarda las últimas 5 pulsaciones; se reinicia tras unos segundos
    // sin actividad.
    seqRef.current = [...seqRef.current, i].slice(-LENGTH);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      seqRef.current = [];
    }, RESET_MS);

    if (seqRef.current.length === LENGTH) {
      const path = tryUnlock(seqRef.current);
      if (path) {
        seqRef.current = [];
        router.push(path);
      }
    }
  }

  function toggle() {
    setOpen((v) => !v);
    seqRef.current = [];
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.noteRow}>
        <span className={styles.note}>{note}</span>
        <button
          type="button"
          className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? "Ocultar" : "Mostrar más"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`} inert={!open}>
        <div className={styles.panelInner}>
    <div className={styles.keys}>
      {ICONS.map((icon, i) => (
        <button
          key={icon.label}
          type="button"
          className={`${styles.key} ${flash?.i === i ? styles.pressed : ""}`}
          onClick={() => press(i)}
          aria-label={icon.label}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="18"
            height="18"
            aria-hidden="true"
          >
            {icon.path}
          </svg>
        </button>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}
