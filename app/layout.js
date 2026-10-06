import { DM_Sans } from "next/font/google";
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
    "Agencia especialista en la búsqueda de información y evidencias sobre conductas familiares, personales, laborales y comerciales en Santiago, regiones y el extranjero. Infidelidades, localización de personas, fraudes, due diligence, herencias y más. Todo contacto y contratación es confidencial.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
