import { LocationIcon } from "./icons/Icons";
import styles from "./Coverage.module.css";

const ZONES = [
  {
    zone: "Zona norte",
    cities: ["Arica", "Antofagasta", "Calama", "Copiapó", "La Serena", "Coquimbo"],
  },
  {
    zone: "Zona centro",
    cities: [
      "Los Andes",
      "Valparaíso",
      "Viña del Mar",
      "Santiago",
      "Rancagua",
      "Curicó",
      "Linares",
      "Talca",
    ],
  },
  {
    zone: "Zona sur",
    cities: [
      "Chillán",
      "Concepción",
      "Temuco",
      "Valdivia",
      "Osorno",
      "Puerto Montt",
      "Punta Arenas",
    ],
  },
];

export default function Coverage() {
  return (
    <section id="cobertura" className={styles.coverage}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Cobertura</p>
          <h2 className={styles.title}>Apoyo en Santiago y regiones</h2>
          <p className={styles.lead}>
            Contamos con personal de Arica a Punta Arenas para dar respuesta a
            investigaciones en todo el territorio nacional y en el extranjero.
          </p>
        </div>

        <div className={styles.zones}>
          {ZONES.map((z) => (
            <div key={z.zone} className={styles.zone}>
              <h3>{z.zone}</h3>
              <ul>
                {z.cities.map((city) => (
                  <li key={city}>
                    <LocationIcon width={16} height={16} />
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
