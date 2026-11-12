/**
 * Central site config for Raíz. Edit these values in one place.
 * TODO (before launch): fill in the real WhatsApp number, email, and domain.
 */

export const site = {
  name: 'Raíz',
  tagline: 'Estudio web · Guanacaste',
  description:
    'Raíz — estudio web para negocios de Guanacaste. Sitios web modernos, presencia en Google y mantenimiento continuo.',
  // Full international number, digits only (Costa Rica = 506). PLACEHOLDER:
  whatsappNumber: '50600000000',
  whatsappMessage: 'Hola Raíz, me gustaría saber más sobre un sitio web para mi negocio.',
  email: 'hola@raiz.cr', // PLACEHOLDER
  location: 'Tempate, Guanacaste, Costa Rica',
  // Default Open Graph image for link previews. TODO: create public/og.png (1200×630).
  ogImage: '/og.png',
} as const;

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
    name: 'Plan Raíz',
    desc: 'Hospedaje, mantenimiento, cambios, SEO básico y soporte — todos los meses.',
  },
] as const;

/**
 * How we work. Read by the home page's "Simple, de principio a fin" section.
 * (The hero's right-hand "Plan Raíz" block carries its own shorter copy — it is
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
    body: 'Lo mantenemos al día con el Plan Raíz. No desaparecemos.',
  },
] as const;
