import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ParticularServices from "@/components/ParticularServices";

export const metadata = {
  title: "Servicios",
  description:
    "Búsqueda de información y evidencias sobre conductas familiares, personales, laborales y comerciales en Santiago, regiones y el extranjero. Análisis de redes sociales, verificación de infidelidades, localización de personas, verificación de domicilios para notificaciones, investigación de fraudes, ausentismo laboral, competencia desleal, due diligence, herencias nacionales e internacionales y apoyo a receptores judiciales. Servicio 100% confidencial.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Áreas de investigación"
        description="Búsqueda de información y evidencias sobre conductas familiares, personales, laborales y comerciales en Santiago de Chile, regiones y el extranjero. Todo contacto y contratación es estrictamente confidencial."
      />
      <Services />
      <ParticularServices />
    </>
  );
}
