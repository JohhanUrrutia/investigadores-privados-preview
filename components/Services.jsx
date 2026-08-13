import {
  SurveillanceIcon,
  VehicleIcon,
  CameraIcon,
  FamilyIcon,
  JudicialIcon,
  NetworkIcon,
  DnaIcon,
  SealIcon,
  LinkIcon,
  ShieldIcon,
} from "./icons/Icons";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: SurveillanceIcon,
    title: "Vigilancias especiales",
    text: "Observación de conductas de personas en vehículos y a pie, siempre desde lugares públicos.",
  },
  {
    icon: VehicleIcon,
    title: "Búsqueda de vehículos",
    text: "Localización y apoyo en la incautación de vehículos, camiones y maquinaria en todo Chile.",
  },
  {
    icon: CameraIcon,
    title: "Levantamiento de evidencias",
    text: "Registro fotográfico y en video que respalda cada investigación.",
  },
  {
    icon: FamilyIcon,
    title: "Localización de personas",
    text: "Búsqueda de personas orientada a reencuentros familiares.",
  },
  {
    icon: JudicialIcon,
    title: "Apoyo a receptores judiciales",
    text: "Búsqueda de domicilios actualizados de deudores, pensión de alimentos y notificaciones, con o sin orden pendiente.",
  },
  {
    icon: NetworkIcon,
    title: "Seguimiento de redes sociales",
    text: "Investigación informática y monitoreo de actividad en redes sociales.",
  },
  {
    icon: DnaIcon,
    title: "ADN por paternidad",
    text: "Coordinación de exámenes de ADN para determinar paternidad.",
  },
  {
    icon: SealIcon,
    title: "Detección de falsificaciones",
    text: "Verificación de documentos y elementos para detectar falsificaciones.",
  },
  {
    icon: LinkIcon,
    title: "Amistades furtivas",
    text: "Investigación de vínculos y contactos en redes sociales.",
  },
  {
    icon: ShieldIcon,
    title: "Control de pérdidas",
    text: "Detección de infiltración de personal dentro de empresas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              number={String(i + 1).padStart(2, "0")}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
