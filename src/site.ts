/**
 * Central site config for Nambuku. Edit these values in one place.
 * TODO (before launch): fill in the real WhatsApp number, email, and domain.
 */

export const site = {
  name: 'nambuku',
  tagline: 'Estudio tecnológico · Guanacaste',
  description:
    'nambuku: estudio tecnológico para negocios de Guanacaste. Sitios web modernos, presencia en Google y mantenimiento continuo.',
  // Full international number, digits only (Costa Rica = 506). PLACEHOLDER:
  whatsappNumber: '50600000000',
  whatsappMessage: 'Hola nambuku, me gustaría saber más sobre un sitio web para mi negocio.',
  email: 'hola@nambuku.com', // PLACEHOLDER
  location: 'Tempate, Guanacaste, Costa Rica',
  // Default Open Graph image for link previews. TODO: create public/og.png (1200×630).
  ogImage: '/og.png',
} as const;

/**
 * Social profiles. Single source — the footer and /contacto both read this, so
 * a handle only ever changes in one place.
 * The Facebook URL is the page's share link; swap it for the vanity URL
 * (facebook.com/nambukucr) once the page has one.
 */
export const social = [
  {
    name: 'Instagram',
    handle: '@nambukucr',
    href: 'https://www.instagram.com/nambukucr/',
  },
  {
    name: 'Facebook',
    handle: 'nambuku',
    href: 'https://www.facebook.com/share/1RhD1iPgGf/',
  },
] as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
] as const;

/**
 * The three offers. Single source — the home page summarises them and
 * /servicios lists them, so the names can never drift apart again.
 */
export const offers = [
  {
    name: 'Lanzamiento',
    desc: 'Sitio web nuevo y moderno + tu perfil de Google Business.',
  },
  {
    name: 'Renovación',
    desc: 'Rediseño y mejora del sitio que ya tenés.',
  },
  {
    name: 'Plan nambuku',
    desc: 'Hospedaje, mantenimiento, cambios, SEO básico y soporte, todos los meses.',
  },
] as const;

/**
 * What we build — the range of products beyond a plain website. Read by
 * /servicios' "Qué construimos" tabbed catalog. Each entry: display name, a
 * Lucide-style 24×24 icon path (for Icon.astro), a short description, the
 * feature checklist, and who it's for. Single source so the catalog stays in
 * sync if the home page ever references it too.
 */
export const builds = [
  {
    name: 'Landing page',
    icon: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    desc: 'Una sola página construida para convertir, ideal para campañas puntuales, lanzamientos, eventos, productos específicos o profesionales que necesitan un punto de contacto digital directo. Toda la atención del visitante en un único mensaje y una sola acción.',
    features: [
      'Foco en una sola acción del visitante',
      'Carga liviana y rápida en móvil',
      'Formulario integrado a tu CRM o correo',
      'Configuración lista para campañas de Ads',
    ],
    forWho: [
      'Empresas que necesitan capturar leads de una campaña antes de tener una página web completa',
      'Profesionales independientes que quieren un punto de contacto digital sin mantener un sitio web extenso',
    ],
  },
  {
    name: 'Sitio web corporativo',
    icon: '<rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/>',
    desc: 'Sitio web con varias secciones pensado para empresas consolidadas que necesitan mostrar la operación completa: servicios, casos, equipo, novedades y canales de contacto. Estructura clara para representar la empresa con seriedad y darle al lead toda la información que necesita antes de tomar contacto.',
    features: [
      'Gestión de contenido propio para que tu equipo actualice sin depender del desarrollador',
      'Sección de novedades o blog integrada',
      'Conexión con redes sociales y herramientas de marketing',
      'Métricas integradas para entender qué funciona y qué no',
    ],
    forWho: [
      'Empresas costarricenses, industriales o de servicios, que necesitan mostrar capacidad operativa, cartera y casos',
      'Negocios que ya tienen un sitio desactualizado y necesitan representar la empresa con seriedad',
    ],
  },
  {
    name: 'E-commerce',
    icon: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    desc: 'Tienda en línea con desarrollo web a medida: catálogo, carrito, pagos integrados y panel propio para gestionar productos, stock y ventas. Construida para escalar con el negocio y adaptarse a las reglas comerciales reales, sin las limitaciones de una plataforma enlatada.',
    features: [
      'Gestión propia de productos, precios y stock',
      'Pagos integrados con las pasarelas que usás (SINPE, transferencia, tarjeta)',
      'Panel de administración para el equipo de ventas',
      'Conexión con sistemas de logística, facturación y envíos',
    ],
    forWho: [
      'Empresas con catálogo amplio o reglas comerciales complejas que no encajan en una plantilla',
      'Negocios que operan con un e-commerce limitado y necesitan migrar a algo propio que pueda crecer',
    ],
  },
  {
    name: 'Apps y sistemas internos',
    icon: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    desc: 'Aplicaciones web y móviles desarrolladas para ordenar la operación interna de tu empresa. Conectamos procesos, equipos y datos en un sistema propio que evoluciona con el negocio, sin depender de hojas de cálculo, herramientas dispersas o software enlatado que no encaja.',
    features: [
      'Diseñado según el flujo real de trabajo de tu equipo',
      'Roles y permisos según la operación',
      'Integración con sistemas existentes de contabilidad, facturación o gestión',
      'Acceso desde computadora y móvil',
    ],
    forWho: [
      'Empresas que coordinan operaciones complejas con hojas de cálculo o herramientas dispersas',
      'Empresas con sistemas viejos que necesitan modernizar parte de la operación',
    ],
  },
] as const;

/**
 * How we work. Read by the home page's "Simple, de principio a fin" section.
 * (The hero's right-hand "Plan Nambuku" block carries its own shorter copy — it is
 * a teaser for /servicios, not a restatement of these three steps.)
 */
export const steps = [
  {
    n: '01',
    title: 'Conversamos',
    body: 'Entendemos tu negocio y qué necesitás, en palabras simples.',
  },
  {
    n: '02',
    title: 'Creamos',
    body: 'Diseñamos y lanzamos tu sitio, y te ponemos en Google.',
  },
  {
    n: '03',
    title: 'Cuidamos',
    body: 'Lo mantenemos al día con el Plan nambuku. No desaparecemos.',
  },
] as const;
