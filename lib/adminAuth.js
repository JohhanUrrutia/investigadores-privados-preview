// Autenticación del panel de administración — versión de maqueta.
//
// Sin backend (tal como se pidió): la sesión es solo una marca en
// localStorage y las credenciales están fijas en el código (admin / admin).
// Esto permite ver el panel funcionando de punta a punta; no debe usarse
// como mecanismo de seguridad real.

const SESSION_KEY = "ipc_admin_session";
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";

function isBrowser() {
  return typeof window !== "undefined";
}

export async function login(username, password) {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    if (isBrowser()) window.localStorage.setItem(SESSION_KEY, "1");
    return { ok: true };
  }
  return { ok: false, error: "Usuario o contraseña incorrectos." };
}

export async function logout() {
  if (isBrowser()) window.localStorage.removeItem(SESSION_KEY);
}

export async function isAuthenticated() {
  if (!isBrowser()) return false;
  return window.localStorage.getItem(SESSION_KEY) === "1";
}
