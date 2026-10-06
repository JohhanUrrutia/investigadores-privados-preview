import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Layout del sitio público: menú + contenido + footer.
// El panel de administración vive fuera de este grupo, con su propio
// layout, así no muestra el menú ni el footer del sitio.
export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
