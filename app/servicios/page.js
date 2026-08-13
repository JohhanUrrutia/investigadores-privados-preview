import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ParticularServices from "@/components/ParticularServices";

export const metadata = {
  title: "Servicios",
  description:
    "Vigilancias especiales, búsqueda de vehículos, levantamiento de evidencias, localización de personas, apoyo a receptores judiciales, seguimiento de redes sociales, ADN por paternidad, detección de falsificaciones, amistades furtivas, control de pérdidas e investigaciones particulares como infidelidades y evaluaciones prenupciales.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Áreas de investigación"
        description="Diez áreas de trabajo con cobertura en todo Chile, desde vigilancias hasta control de pérdidas al interior de empresas, más servicios orientados a necesidades personales y familiares."
      />
      <Services />
      <ParticularServices />
    </>
  );
}
