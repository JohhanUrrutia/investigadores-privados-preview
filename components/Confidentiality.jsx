import Link from "next/link";
import { LockIcon, ShieldIcon, PhoneIcon, ArrowIcon } from "./icons/Icons";
import styles from "./Confidentiality.module.css";

const POINTS = [
  {
    icon: PhoneIcon,
    title: "Contacto reservado",
    text: "Su llamada, mensaje o formulario solo lo conoce nuestro equipo.",
  },
  {
    icon: LockIcon,
    title: "Contratación confidencial",
    text: "La contratación y los datos de cada caso se manejan bajo estricta reserva.",
  },
  {
    icon: ShieldIcon,
    title: "Resultados solo para usted",
    text: "Los informes y evidencias se entregan únicamente al cliente.",
  },
];

/**
 * Bloque principal de confidencialidad de la página de inicio.
 */
export default function Confidentiality() {
  return (
    <section className={styles.section} aria-labelledby="confidencialidad-title">
      <div className="container">
        <div className={styles.box}>
          <div className={styles.head}>
            <span className={styles.seal}>
              <LockIcon width={30} height={30} />
            </span>
            <div className={styles.headCopy}>
              <p className="eyebrow">Confidencialidad garantizada</p>
              <h2 id="confidencialidad-title" className={styles.title}>
                Todo contacto y contratación es{" "}
                <span className={styles.highlight}>100% confidencial</span>
              </h2>
              <p className={styles.lead}>
                Desde la primera consulta hasta la entrega del informe final, su
                identidad y la información de su caso se tratan con absoluta
                reserva. Nunca compartimos datos con terceros.
              </p>
            </div>
          </div>

          <ul className={styles.points}>
            {POINTS.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon width={24} height={24} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/contacto" className={styles.cta}>
            Solicitar consulta confidencial
            <ArrowIcon width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
