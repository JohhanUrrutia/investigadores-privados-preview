// Ruta privada del panel de administración.
// Se usa una ruta alfanumérica (en vez de "/administrar") para que no sea
// fácil de adivinar. Si se quiere cambiar, hay que renombrar también la
// carpeta app/gx7k2m9qv4 con el mismo valor.
//
// Importante: este archivo solo lo importan las páginas del panel, nunca
// el sitio público, para que la ruta no viaje en el código del sitio.
export const ADMIN_BASE = "/gx7k2m9qv4";
export const ADMIN_PANEL = `${ADMIN_BASE}/panel`;
export const ADMIN_FORMS = `${ADMIN_BASE}/panel/formularios`;
