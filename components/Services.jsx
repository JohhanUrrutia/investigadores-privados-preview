import * as Icons from "./icons/Icons";
import ServiceCard from "./ServiceCard";
import ConfidentialNote from "./ConfidentialNote";
import { MAIN_SERVICE, FEATURED_SERVICES, OTHER_SERVICES } from "@/lib/services";
import styles from "./Services.module.css";

const pad = (n) => String(n).padStart(2, "0");

export default function Services() {
  const MainIcon = Icons[MAIN_SERVICE.icon];

  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        {/* ---------------- Servicios destacados ---------------- */}
        <div className={styles.head}>
          <p className="eyebrow">Servicios destacados</p>
          <h2 className={styles.title}>Nuestros servicios principales</h2>
          <p className={styles.lead}>
            Las áreas en que más nos consultan particulares, empresas, abogados y
            receptores judiciales, con cobertura en todo Chile y el extranjero.
          </p>
        </div>

        <div className={styles.featuredGrid}>
          <article className={styles.mainCard}>
            <span className={styles.badge}>Servicio principal</span>
            <div className={styles.mainTop}>
              <span className={styles.mainIcon}>
                <MainIcon width={34} height={34} />
              </span>
              <h3 className={styles.mainTitle}>{MAIN_SERVICE.title}</h3>
            </div>
            <p className={styles.mainText}>{MAIN_SERVICE.text}</p>

            <div className={styles.mainMeta}>
              <div>
                <span className={styles.metaLabel}>Conductas</span>
                <ul className={styles.chips}>
                  {MAIN_SERVICE.areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className={styles.metaLabel}>Cobertura</span>
                <ul className={styles.chips}>
                  {MAIN_SERVICE.places.map((p) => (
                    <li key={p}>
                      <Icons.LocationIcon width={14} height={14} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {FEATURED_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              featured
              number={pad(i + 2)}
              icon={Icons[service.icon]}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>

        <ConfidentialNote />

        {/* ---------------- Otras áreas ---------------- */}
        <div className={`${styles.head} ${styles.headOther}`}>
          <p className="eyebrow">Otras áreas</p>
          <h2 className={styles.titleSmall}>Más servicios de investigación</h2>
        </div>

        <div className={styles.grid}>
          {OTHER_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              number={pad(FEATURED_SERVICES.length + i + 2)}
              icon={Icons[service.icon]}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
