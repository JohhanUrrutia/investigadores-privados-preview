import styles from "./ParticularServices.module.css";

const PARTICULAR_SERVICES = [
  {
    title: "Infidelidades",
    text: "Seguimiento discreto ante sospechas de infidelidad de pareja.",
  },
  {
    title: "Conductas dubitativas",
    text: "Observación de comportamientos sospechosos para esclarecer situaciones de desconfianza.",
  },
  {
    title: "Amistades furtivas",
    text: "Investigación de vínculos y contactos ocultos, incluidas redes sociales.",
  },
  {
    title: "Evaluaciones prenupciales",
    text: "Verificación de antecedentes antes de formalizar una unión matrimonial.",
  },
  {
    title: "Paternidad (ADN)",
    text: "Coordinación de exámenes de ADN para determinar paternidad.",
  },
  {
    title: "Investigación de herencias",
    text: "Búsqueda de herederos y antecedentes vinculados a un proceso hereditario.",
  },
  {
    title: "Consumo de alcohol y drogas",
    text: "Verificación discreta de posibles consumos problemáticos.",
  },
  {
    title: "Ubicación de personas",
    text: "Localización de personas para fines particulares y familiares.",
  },
  {
    title: "Determinación de patrimonios",
    text: "Estudio y verificación del patrimonio de una persona.",
  },
  {
    title: "Ubicación de bienes y participaciones",
    text: "Identificación de bienes, propiedades y participaciones societarias.",
  },
];

export default function ParticularServices() {
  return (
    <section className={styles.particular}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Servicios particulares</p>
          <h2 className={styles.title}>Investigación para necesidades personales</h2>
          <p className={styles.lead}>
            Además de nuestras áreas de trabajo con empresas y receptores judiciales,
            atendemos casos particulares con la misma reserva y rigor profesional.
          </p>
        </div>

        <ul className={styles.list}>
          {PARTICULAR_SERVICES.map((service, i) => (
            <li key={service.title} className={styles.item}>
              <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemText}>{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
