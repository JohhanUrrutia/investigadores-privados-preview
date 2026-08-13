import { DM_Sans } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Investigadores Privados Chile | Investigación Privada en todo Chile",
    template: "%s | Investigadores Privados Chile",
  },
  description:
    "Agencia especialista en la gestión y búsqueda de información y evidencias en todo Chile y el extranjero. Vigilancias, búsqueda de vehículos, levantamiento de evidencias, localización de personas, apoyo a receptores judiciales y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
