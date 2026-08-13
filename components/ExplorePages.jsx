import Link from "next/link";
import { ShieldIcon, SurveillanceIcon, PhoneIcon, ArrowIcon } from "./icons/Icons";
import styles from "./ExplorePages.module.css";

const ITEMS = [
  {
    href: "/acerca-de",
    icon: ShieldIcon,
    title: "Acerca de",
    text: "Quiénes somos y cómo trabajamos cada investigación.",
  },
  {
    href: "/servicios",
    icon: SurveillanceIcon,
    title: "Servicios",
    text: "Las 10 áreas de investigación que cubrimos en todo Chile.",
  },
  {
    href: "/contacto",
    icon: PhoneIcon,
    title: "Contacto",
    text: "Coordine una consulta reservada con nuestro equipo.",
  },
];

export default function ExplorePages() {
  return (
    <section className={styles.explore}>
      <div className="container">
        <div className={styles.grid}>
          {ITEMS.map(({ href, icon: Icon, title, text }) => (
            <Link key={href} href={href} className={styles.card}>
              <Icon width={28} height={28} />
              <div>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>{text}</p>
              </div>
              <ArrowIcon width={18} height={18} className={styles.cardArrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
