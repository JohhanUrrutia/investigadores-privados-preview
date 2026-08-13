// Almacén de formularios de contacto.
//
// Este panel es una maqueta funcional (sin backend, tal como se pidió):
// todo vive en localStorage, en el navegador del propio computador. No hay
// servidor, base de datos ni envío real de datos — sirve para ver el flujo
// completo de "el visitante llena el formulario -> aparece en el panel"
// mientras se define si más adelante se conecta a un backend real.

const STORAGE_KEY = "ipc_submissions";

const SEED = [
  {
    id: "seed-1",
    name: "Constanza Reyes",
    email: "constanza.reyes@example.com",
    phone: "+56 9 1234 5678",
    service: "Infidelidades",
    message:
      "Buenas tardes, necesito coordinar un seguimiento discreto. Quedo atenta a una llamada para conversar los detalles.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    read: false,
  },
  {
    id: "seed-2",
    name: "Rodrigo Salas",
    email: "rsalas.legal@example.com",
    phone: "+56 9 8765 4321",
    service: "Apoyo a receptores judiciales",
    message:
      "Somos un estudio jurídico y requerimos apoyo para ubicar el domicilio actualizado de un deudor en la Región Metropolitana.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    read: true,
  },
  {
    id: "seed-3",
    name: "Marcela Ibáñez",
    email: "marcela.ibanez@example.com",
    phone: "",
    service: "Localización de personas",
    message:
      "Quisiera contactarlos para un caso de búsqueda de un familiar con el que perdimos contacto hace varios años.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    read: false,
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

function readAll() {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
      return SEED;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeAll(list) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function getSubmissions() {
  return sortByDateDesc(readAll());
}

export async function addSubmission(input) {
  const list = readAll();
  const entry = {
    id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: input.name || "",
    email: input.email || "",
    phone: input.phone || "",
    service: input.service || "",
    message: input.message || "",
    createdAt: new Date().toISOString(),
    read: false,
  };
  const next = [...list, entry];
  writeAll(next);
  return entry;
}

export async function markAsRead(id) {
  const list = readAll().map((s) => (s.id === id ? { ...s, read: true } : s));
  writeAll(list);
  return sortByDateDesc(list);
}

export async function deleteSubmission(id) {
  const list = readAll().filter((s) => s.id !== id);
  writeAll(list);
  return sortByDateDesc(list);
}

export async function getUnreadCount() {
  const list = readAll();
  return list.filter((s) => !s.read).length;
}

// Versión pública y liviana, usada por el contador de la barra del panel.
export async function getPublicUnreadCount() {
  return getUnreadCount();
}
