/**
 * Catálogo único de servicios del sitio. Lo usan la página de Servicios,
 * el ticker del navbar y el selector del formulario de contacto, para que
 * los nombres se mantengan iguales en todas partes.
 */

// Servicio principal: se muestra destacado y en grande.
export const MAIN_SERVICE = {
  icon: "SearchDocIcon",
  title: "Búsqueda de información y evidencias",
  text: "Obtenemos información y evidencias verificables sobre conductas familiares, personales, laborales y comerciales, con trabajo en terreno en Santiago de Chile, regiones y el extranjero.",
  areas: ["Familiares", "Personales", "Laborales", "Comerciales"],
  places: ["Santiago de Chile", "Regiones", "Extranjero"],
};

// Servicios destacados: van por sobre el resto en la página de Servicios.
export const FEATURED_SERVICES = [
  {
    icon: "NetworkIcon",
    title: "Análisis de redes sociales",
    text: "Revisión y análisis de perfiles, publicaciones, actividad y vínculos en redes sociales como respaldo de la investigación.",
  },
  {
    icon: "HeartIcon",
    title: "Verificación de infidelidades",
    text: "Comprobación discreta de sospechas de infidelidad, con registro fotográfico y en video de cada hallazgo.",
  },
  {
    icon: "FamilyIcon",
    title: "Localización de personas",
    text: "Ubicación de personas en Chile y el extranjero, para fines familiares, legales o comerciales.",
  },
  {
    icon: "HomeMailIcon",
    title: "Verificación de domicilios",
    text: "Confirmación de nuevos domicilios de personas o empresas para practicar notificaciones.",
  },
  {
    icon: "AlertIcon",
    title: "Investigación de fraudes",
    text: "Detección y documentación de fraudes que afectan a empresas, negocios o particulares.",
  },
  {
    icon: "CalendarIcon",
    title: "Ausentismo laboral",
    text: "Verificación de ausencias injustificadas y del uso indebido de licencias médicas por parte de trabajadores.",
  },
  {
    icon: "BriefcaseIcon",
    title: "Competencia desleal",
    text: "Investigación de desvío de clientes, uso de información reservada y actividades paralelas de trabajadores, socios o terceros.",
  },
  {
    icon: "ClipboardCheckIcon",
    title: "Due diligence (debida diligencia)",
    text: "Verificación de antecedentes comerciales, legales y reputacionales de una persona o empresa antes de cerrar un negocio, una inversión, una sociedad o una contratación.",
  },
  {
    icon: "ScrollIcon",
    title: "Herencias nacionales e internacionales",
    text: "Búsqueda de herederos, bienes y antecedentes vinculados a procesos hereditarios en Chile y en el extranjero.",
  },
  {
    icon: "JudicialIcon",
    title: "Apoyo a receptores judiciales",
    text: "Búsqueda e incautación de vehículos con mandato judicial.",
  },
];

// Resto de las áreas de trabajo.
export const OTHER_SERVICES = [
  {
    icon: "SurveillanceIcon",
    title: "Vigilancias especiales",
    text: "Observación de conductas de personas en vehículos y a pie, siempre desde lugares públicos.",
  },
  {
    icon: "VehicleIcon",
    title: "Búsqueda de vehículos",
    text: "Localización de vehículos, camiones y maquinaria en todo Chile.",
  },
  {
    icon: "CameraIcon",
    title: "Levantamiento de evidencias",
    text: "Registro fotográfico y en video que respalda cada investigación.",
  },
  {
    icon: "DnaIcon",
    title: "ADN por paternidad",
    text: "Coordinación de exámenes de ADN para determinar paternidad.",
  },
  {
    icon: "SealIcon",
    title: "Detección de falsificaciones",
    text: "Verificación de documentos y elementos para detectar falsificaciones.",
  },
  {
    icon: "LinkIcon",
    title: "Amistades furtivas",
    text: "Investigación de vínculos y contactos ocultos, incluidas redes sociales.",
  },
  {
    icon: "ShieldIcon",
    title: "Control de pérdidas",
    text: "Detección de infiltración de personal dentro de empresas.",
  },
];

// Nombres cortos para el ticker del navbar (primero los destacados).
export const SERVICE_NAMES = [
  MAIN_SERVICE.title,
  ...FEATURED_SERVICES.map((s) => s.title),
  ...OTHER_SERVICES.map((s) => s.title),
];
