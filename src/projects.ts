import type { ImageMetadata } from 'astro';
import goodEnergyCover from '@/assets/work/good-energy.jpg';
import geDesktopCatalogo from '@/assets/work/good-energy/desktop-catalogo.jpg';
import geDesktopProducto from '@/assets/work/good-energy/desktop-producto.jpg';
import geDesktopNosotros from '@/assets/work/good-energy/desktop-nosotros.jpg';
import geMobileHome from '@/assets/work/good-energy/mobile-home.jpg';
import geMobileCatalogo from '@/assets/work/good-energy/mobile-catalogo.jpg';
import geMobileProducto from '@/assets/work/good-energy/mobile-producto.jpg';

/**
 * Proyectos reales de Raíz. Fuente única: la home (sección "Casos destacados"),
 * /proyectos (la grilla) y /proyectos/[slug] (la página de detalle) leen de aquí,
 * así que un proyecto se agrega una sola vez.
 *
 * Las imágenes son capturas reales del sitio (src/assets/work/*). Para sumar un
 * proyecto: guardá las capturas en src/assets/work/<slug>/ y agregá una entrada.
 */

/** Una captura del sitio con su texto alternativo y un pie opcional. */
export type Shot = {
  src: ImageMetadata;
  alt: string;
  caption?: string;
};

export type Project = {
  /** Identificador en la URL: /proyectos/<slug>. */
  slug: string;
  /** Nombre del negocio / cliente. */
  name: string;
  /** Rubro corto, se muestra como kicker sobre el título. */
  sector: string;
  /** Una línea de resultado o descripción — tarjetas de la grilla y la home. */
  summary: string;
  /** Sitio en vivo. */
  url: string;
  /** Zona del negocio. */
  location: string;
  /** Año del proyecto. */
  year: number;
  /** Servicios entregados — se muestran como chips. */
  services: string[];
  /** Captura principal (tarjetas + encabezado del detalle). */
  cover: ImageMetadata;
  /** Texto alternativo del cover. */
  coverAlt: string;

  // ── Página de detalle ──────────────────────────────────────────────
  /** Frase de apertura bajo el título del detalle. */
  intro: string;
  /** "El reto" — dónde estaban antes. */
  challenge: string;
  /** "Lo que hicimos" — el trabajo entregado. */
  solution: string;
  /** "El resultado" — a dónde llegaron (sin métricas inventadas). */
  result: string;
  /** Vistas de escritorio para la galería. */
  desktopShots: Shot[];
  /** Vistas móviles (panel oscuro + galería). */
  mobileShots: Shot[];
  /** Testimonio opcional del cliente. Se omite si no está confirmado. */
  testimonial?: { quote: string; author: string };
};

export const projects: Project[] = [
  {
    slug: 'good-energy',
    name: 'Good Energy',
    sector: 'Tienda de suplementos',
    summary:
      'Tienda en línea de bienestar y suplementos: catálogo, compra por objetivo y envío local.',
    url: 'https://good-energy-drab.vercel.app/',
    location: 'Huacas & Villarreal, Guanacaste',
    year: 2025,
    services: ['Lanzamiento', 'Tienda en línea', 'Catálogo por objetivo', 'Pedidos por WhatsApp'],
    cover: goodEnergyCover,
    coverAlt: 'Página de inicio del sitio de Good Energy, tienda de suplementos.',

    intro:
      'Una tienda en línea para una marca de bienestar con dos locales en Guanacaste: catálogo claro, compra por objetivo y pedidos por WhatsApp — pensada para el teléfono.',
    challenge:
      'Good Energy ya vendía en dos tiendas físicas, en Huacas y Villarreal, pero sin una vitrina en línea que mostrara su catálogo ni recibiera pedidos fuera del mostrador. Necesitaban una presencia digital que se viera profesional y transmitiera confianza — algo clave cuando se habla de salud.',
    solution:
      'Diseñamos y lanzamos una tienda en línea completa: catálogo filtrable por categoría y por objetivo (energía, rendimiento, recuperación, inmunidad), páginas de producto con precio en colones y respaldo visible, carrito, y contacto directo por WhatsApp. Todo mobile-first, porque es desde el teléfono que llegan sus clientes.',
    result:
      'Good Energy pasó de dos mostradores a una vitrina que trabaja a toda hora: los clientes exploran el catálogo, eligen por objetivo y escriben por WhatsApp desde donde estén — con envío local y retiro en tienda.',

    desktopShots: [
      {
        src: geDesktopCatalogo,
        alt: 'Catálogo de productos de Good Energy en escritorio.',
        caption: 'Catálogo filtrable por categoría y por objetivo.',
      },
      {
        src: geDesktopProducto,
        alt: 'Página de producto de Good Energy en escritorio.',
        caption: 'Ficha de producto con precio, envío y respaldo.',
      },
      {
        src: geDesktopNosotros,
        alt: 'Página "Nosotros" de Good Energy en escritorio.',
        caption: 'La historia de la marca, contada con claridad.',
      },
    ],
    mobileShots: [
      {
        src: geMobileHome,
        alt: 'Inicio de Good Energy en celular.',
        caption: 'Inicio',
      },
      {
        src: geMobileCatalogo,
        alt: 'Catálogo de Good Energy en celular.',
        caption: 'Catálogo',
      },
      {
        src: geMobileProducto,
        alt: 'Ficha de producto de Good Energy en celular.',
        caption: 'Producto',
      },
    ],
  },
];

/** Busca un proyecto por slug (para getStaticPaths y enlaces). */
export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
