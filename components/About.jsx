import styles from "./About.module.css";

const PILLARS = [
  {
    n: "01",
    title: "Investigación",
    text: "Gestión y búsqueda de información y evidencias para cada caso.",
  },
  {
    n: "02",
    title: "Discreción",
    text: "Observación y vigilancia realizadas siempre desde lugares públicos.",
  },
  {
    n: "03",
    title: "Cobertura",
    text: "Presencia en todo Chile y coordinación de casos en el extranjero.",
  },
];

export default function About() {
  return (
    <section id="acerca-de" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.text}>
            Somos una agencia especialista en la gestión y búsqueda de información y
            evidencias en todo Chile y en el extranjero. Trabajamos junto a
            particulares, receptores judiciales y empresas, con apoyo directo en
            Santiago y en las principales ciudades de las regiones del país.
          </p>
          <p className={styles.text}>
            Cada investigación se desarrolla bajo un manejo reservado de la
            información, entregando resultados respaldados con evidencia
            verificable.
          </p>
        </div>

        <ul className={styles.pillars}>
          {PILLARS.map((p) => (
            <li key={p.n}>
              <span className={styles.n}>{p.n}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
