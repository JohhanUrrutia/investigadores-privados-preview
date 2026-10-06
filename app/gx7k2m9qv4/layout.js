// Layout del panel de administración: sin menú ni footer del sitio y
// marcado para que los buscadores no lo indexen.
export const metadata = {
  title: "Acceso",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }) {
  return <main>{children}</main>;
}
