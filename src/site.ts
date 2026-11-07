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
  { href: '/trabajos', label: 'Trabajos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
] as const;
