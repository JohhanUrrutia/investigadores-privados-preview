import Link from "next/link";
import { LockIcon, ArrowIcon } from "./icons/Icons";
import styles from "./ConfidentialNote.module.css";

/**
 * Franja compacta que recuerda que todo contacto y contratación es
 * confidencial. Se usa en Servicios y Contacto.
 */
export default function ConfidentialNote({ withCta = true }) {
  return (
    <aside className={styles.note} aria-label="Confidencialidad">
      <span className={styles.icon}>
        <LockIcon width={26} height={26} />
      </span>
      <div className={styles.copy}>
        <strong className={styles.title}>100% confidencial</strong>
        <p className={styles.text}>
          Todo contacto, consulta y contratación de nuestros servicios es
          estrictamente confidencial. Su identidad y la de su caso nunca se
          comparten con terceros.
        </p>
      </div>
      {withCta ? (
        <Link href="/contacto" className={styles.cta}>
          Consulta reservada
          <ArrowIcon width={16} height={16} />
        </Link>
      ) : null}
    </aside>
  );
}
