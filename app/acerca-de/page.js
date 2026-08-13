import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export const metadata = {
  title: "Acerca de",
  description:
    "Somos una agencia especialista en la gestión y búsqueda de información y evidencias en todo Chile y en el extranjero, con apoyo directo en Santiago y regiones.",
};

export default function AcercaDePage() {
  return (
    <>
      <PageHeader
        eyebrow="Acerca de"
        title="Especialistas en gestión y búsqueda de información"
        description="Trabajamos junto a particulares, receptores judiciales y empresas, con un manejo reservado de cada investigación."
      />
      <About />
    </>
  );
}
