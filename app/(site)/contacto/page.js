import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import ConfidentialNote from "@/components/ConfidentialNote";

export const metadata = {
  title: "Contacto",
  description:
    "Contacte a Investigadores Privados Chile por teléfono o LinkedIn para coordinar una consulta reservada con nuestro equipo.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Conversemos sobre su caso"
        description="Escríbanos o llame directamente. Todo contacto y contratación de nuestros servicios es estrictamente confidencial."
      />
      <div className="container">
        <ConfidentialNote withCta={false} />
      </div>
      <Contact />
    </>
  );
}
