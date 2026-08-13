import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

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
        description="Escríbanos o llame directamente para coordinar una consulta reservada con nuestro equipo."
      />
      <Contact />
    </>
  );
}
