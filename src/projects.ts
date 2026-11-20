import type { ImageMetadata } from 'astro';
import goodEnergyCover from '@/assets/work/good-energy.jpg';
import geDesktopCatalogo from '@/assets/work/good-energy/desktop-catalogo.jpg';
import geDesktopProducto from '@/assets/work/good-energy/desktop-producto.jpg';
import geDesktopNosotros from '@/assets/work/good-energy/desktop-nosotros.jpg';
import geMobileHome from '@/assets/work/good-energy/mobile-home.jpg';
import geMobileCatalogo from '@/assets/work/good-energy/mobile-catalogo.jpg';
import geMobileProducto from '@/assets/work/good-energy/mobile-producto.jpg';
import mosoCover from '@/assets/work/moso-solutions.jpg';
import mosoDesktopServicios from '@/assets/work/moso-solutions/desktop-servicios.jpg';
import mosoDesktopNosotros from '@/assets/work/moso-solutions/desktop-nosotros.jpg';
import mosoDesktopContacto from '@/assets/work/moso-solutions/desktop-contacto.jpg';
import mosoMobileHome from '@/assets/work/moso-solutions/mobile-home.jpg';
import mosoMobileServicios from '@/assets/work/moso-solutions/mobile-servicios.jpg';
import mosoMobileContacto from '@/assets/work/moso-solutions/mobile-contacto.jpg';

/**
 * Proyectos reales de Nambuku. Fuente única: la home (sección "Casos destacados"),
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
  {
    slug: 'moso-solutions',
    name: 'MoSo Solutions',
    sector: 'Cuidado de propiedades',
    summary:
      'Sitio bilingüe para un equipo familiar de cuidado de propiedades: seis servicios bajo un mismo techo y contacto directo.',
    url: 'https://moso-solutions.vercel.app/',
    location: 'Hacienda Pinilla & Avellanas, Guanacaste',
    year: 2026,
    services: ['Lanzamiento', 'Sitio de una página', 'Bilingüe (EN/ES)', 'Mobile-first'],
    cover: mosoCover,
    coverAlt:
      'Página de inicio de MoSo Solutions, equipo de cuidado de propiedades en la costa de Guanacaste.',

    intro:
      'Un sitio bilingüe para un equipo familiar que cuida propiedades en la costa del Pacífico — seis servicios bajo un mismo techo, presentados con claridad y pensados para el teléfono.',
    challenge:
      'MoSo ya atendía casas de la zona de Tamarindo, Avellanas y Hacienda Pinilla con pintura, piscinas, plomería, electricidad, madera y jardines — pero, como pasa con la mayoría de las cuadrillas locales, todo se movía de boca en boca y por WhatsApp. No tenían un sitio que mostrara el alcance completo ni que diera la confianza que buscan los dueños de casa, muchos de ellos extranjeros.',
    solution:
      'Diseñamos y lanzamos un sitio de una página, bilingüe (inglés y español), que reúne los seis servicios con fotos reales de cada trabajo, explica quiénes son y cómo trabajan, y deja el teléfono, el correo y la ubicación a un solo toque. Todo mobile-first, porque es desde el celular que los contactan.',
    result:
      'MoSo pasó del boca en boca a una vitrina que trabaja a toda hora: los clientes entienden de un vistazo todo lo que ofrecen y escriben directo, en inglés o en español, desde el mismo lugar donde los encontraron.',

    desktopShots: [
      {
        src: mosoDesktopServicios,
        alt: 'Sección de servicios de MoSo Solutions en escritorio.',
        caption: 'Los seis servicios, con una foto real de cada trabajo.',
      },
      {
        src: mosoDesktopNosotros,
        alt: 'Sección "Quiénes somos" de MoSo Solutions en escritorio.',
        caption: 'Quiénes son y cómo trabajan, en pocas líneas.',
      },
      {
        src: mosoDesktopContacto,
        alt: 'Sección de contacto de MoSo Solutions en escritorio.',
        caption: 'Teléfono, correo y ubicación a un toque.',
      },
    ],
    mobileShots: [
      {
        src: mosoMobileHome,
        alt: 'Inicio de MoSo Solutions en celular.',
        caption: 'Inicio',
      },
      {
        src: mosoMobileServicios,
        alt: 'Servicios de MoSo Solutions en celular.',
        caption: 'Servicios',
      },
      {
        src: mosoMobileContacto,
        alt: 'Contacto de MoSo Solutions en celular.',
        caption: 'Contacto',
      },
    ],
  },
];

/** Busca un proyecto por slug (para getStaticPaths y enlaces). */
export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
