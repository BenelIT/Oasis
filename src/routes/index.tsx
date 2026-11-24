import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bird,
  Check,
  Footprints,
  Heart,
  HeartHandshake,
  Leaf,
  MapPin,
  Microscope,
  ShieldCheck,
  Sprout,
  Trees,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/components/oasis-pages";
import river from "@/assets/river-oasis.jpg";
import trail from "@/assets/forest-trail.jpg";
import otterPhoto from "@/assets/river-otter.jpg";
import otter from "@/assets/otter-guide.png";

const ORG = "El Oasis, A.C.";
const ORG_FULL = "Parque Natural Ecoturístico El Oasis, A.C.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    ...pageHead(
      ORG_FULL,
      "Comunidad filantrópica de profesionales que cuida y recupera el medio ambiente en Suchiapa, Chiapas. Conoce a El Oasis, A.C. y súmate a la causa.",
    ),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: ORG_FULL,
          alternateName: ORG,
          description:
            "Asociación civil y comunidad filantrópica de profesionales dedicada a cuidar y recuperar el medio ambiente mediante conservación, educación ambiental, investigación y ecoturismo en Suchiapa, Chiapas.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Suchiapa",
            addressRegion: "Chiapas",
            postalCode: "29150",
            addressCountry: "MX",
          },
        }),
      },
    ],
  }),
});

/* ---------- Datos ---------- */

const impact = [
  { icon: Trees, title: "15 hectáreas", text: "De territorio natural" },
  { icon: ShieldCheck, title: "Conservación", text: "ADVC como objetivo futuro" },
  { icon: Heart, title: "Sin barreras", text: "Una visión de inclusión" },
] as const;

const pillars = [
  {
    icon: Microscope,
    title: "Ponemos el conocimiento",
    text: "Investigación y educación ambiental que parten de lo que cada profesional sabe hacer.",
  },
  {
    icon: Sprout,
    title: "Recuperamos el entorno",
    text: "Protección y restauración del entorno del Río Pacú y de la vida que depende de él.",
  },
  {
    icon: Heart,
    title: "Abrimos la puerta a todas las personas",
    text: "Una visión de naturaleza sin barreras, para que más gente pueda conocerla y cuidarla.",
  },
] as const;

const ways = [
  {
    icon: Users,
    title: "Voluntariado",
    text: `Suma tu tiempo a las actividades de ${ORG}`,
  },
  {
    icon: Microscope,
    title: "Tu profesión",
    text: "Comparte tu conocimiento en investigación, educación ambiental o gestión.",
  },
  {
    icon: HeartHandshake,
    title: "Alianzas",
    text: "Instituciones, empresas y organizaciones que quieran sumarse a la causa.",
  },
] as const;

const commitments = [
  "Protección y restauración del entorno del Río Pacú",
  "Investigación y educación ambiental",
  "Certificación ADVC como objetivo futuro",
] as const;

const experiences = [
  {
    to: "/parque",
    image: trail,
    w: 1024,
    h: 768,
    alt: "Sendero forestal ilustrativo",
    tag: "Explora",
    tagIcon: Footprints,
    title: "Caminos para reconectar",
    text: "Senderismo interpretativo y contacto con la naturaleza, contemplados en nuestro plan de manejo.",
    cta: "Descubre las experiencias",
  },
  {
    to: "/conservacion",
    image: otterPhoto,
    w: 1024,
    h: 768,
    alt: "Nutria de río, imagen ilustrativa",
    tag: "Conoce",
    tagIcon: Bird,
    title: "Vida que merece cuidado",
    text: "Un acercamiento a la biodiversidad y a los programas propuestos para proteger el ecosistema.",
    cta: "Conoce la conservación",
  },
  {
    to: "/convocatorias",
    image: river,
    w: 1920,
    h: 1024,
    alt: "Vegetación ribereña, paisaje ilustrativo",
    tag: "Participa",
    tagIcon: Sprout,
    title: "Sembramos comunidad",
    text: "Voluntariado, educación ambiental y alianzas para construir un futuro más verde e inclusivo.",
    cta: "Encuentra tu lugar",
  },
] as const;

/* ---------- Piezas reutilizables ---------- */

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const sectionPad = "py-8 sm:py-10 lg:py-12";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function SectionHeading({
  eyebrow,
  title,
  description,
  link,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  link?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-2 text-sm font-medium text-primary">{eyebrow}</p>}
        <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {link}
    </div>
  );
}

/* ---------- Página ---------- */

function Index() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main id="contenido">
      {/* Hero */}

      <section className="relative isolate overflow-hidden text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={river}
          width="1920"
          height="1024"
          alt="Paisaje ilustrativo de un río entre vegetación tropical de Chiapas"
          fetchPriority="high"
        />

        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/30"
          aria-hidden="true"
        />

        <div className={`${wrap} relative`}>
          <div className="grid min-h-[540px] grid-cols-1 items-center gap-8 pt-16 pb-8 sm:min-h-[620px] sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6 lg:pt-24">
            {/* Columna izquierda: contenido */}
            <div className="relative z-10 max-w-2xl">
              <p className="inline-flex items-center gap-1.5 text-xs text-white/80 sm:text-sm">
                <MapPin size={14} aria-hidden="true" />
                Suchiapa, Chiapas · México
              </p>

              <p className="mt-5 text-sm font-medium tracking-wide text-white/80 sm:text-base">
                {ORG_FULL}
              </p>

              <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                Cuidar y recuperar el medio ambiente
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Somos una comunidad filantrópica de profesionales unidos por una causa: recuperar la
                naturaleza que nos conecta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="warm" className="w-full sm:w-auto">
                  <Link to="/convocatorias">
                    <Heart /> Ver convocatorias <ArrowUpRight />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="photo" className="w-full sm:w-auto">
                  <Link to="/parque">
                    Conoce el parque <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Columna derecha: nutria */}
            <div className="relative flex min-h-[250px] items-end justify-center lg:min-h-[420px] lg:justify-end">
              <div className="relative flex flex-col items-center gap-2 lg:mr-4">
                <p
                  className="relative z-10 max-w-[15rem] rounded-2xl rounded-br-sm bg-white px-5 py-3 text-center text-sm leading-relaxed text-neutral-800 shadow-xl"
                  aria-live="polite"
                >
                  {showMessage
                    ? "¡Un río sano es un hogar para la vida!"
                    : `¡Hola! Somos ${ORG} y la naturaleza nos espera.`}
                </p>

                <Button
                  variant="ghost"
                  className="block h-auto shrink-0 p-0 leading-none transition-transform duration-300 hover:scale-105 hover:bg-transparent"
                  aria-label="Descubrir un mensaje de la nutria"
                  aria-pressed={showMessage}
                  onClick={() => setShowMessage((v) => !v)}
                >
                  <img
                    className="block h-32 w-32 object-contain sm:h-40 sm:w-40 lg:h-52 lg:w-52"
                    src={otter}
                    width="205"
                    height="205"
                    alt="La nutria de El Oasis, A.C. te saluda"
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Crédito de imagen */}
          <p className="pb-4 text-xs text-white/60">Paisaje ilustrativo</p>
        </div>
      </section>

      {/* Datos clave */}
      <section className="border-b bg-muted/50" aria-label="Identidad y conservación">
        <div
          className={`${wrap} grid gap-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:py-6`}
        >
          <p className="flex items-center gap-3 text-base font-medium leading-snug sm:col-span-2 lg:col-span-1">
            <Leaf className="shrink-0 text-primary" size={28} aria-hidden="true" />
            <span>
              Un pequeño lugar.
              <br />
              Un gran propósito.
            </span>
          </p>
          {impact.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <Icon className="shrink-0 text-primary" size={28} aria-hidden="true" />
              <div className="leading-snug">
                <strong className="block">{title}</strong>
                <span className="text-sm text-muted-foreground">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiénes somos */}
      <section className={`${wrap} ${sectionPad}`} aria-labelledby="quienes-somos">
        <SectionHeading
          eyebrow="Quiénes somos"
          title="Una comunidad que pone su profesión al servicio del ambiente"
          description={`En ${ORG} nos reunimos personas de distintas disciplinas con una causa en común. Cada quien aporta lo que sabe hacer; juntos cuidamos y recuperamos el entorno del Río Pacú.`}
        />
        <h2 id="quienes-somos" className="sr-only">
          Qué hacemos
        </h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-2 border-primary/40 pt-5">
              <Icon className="mb-3 text-primary" size={28} aria-hidden="true" />
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo sumarte */}
      <section className={`bg-muted/50 ${sectionPad}`} aria-labelledby="sumate">
        <div className={wrap}>
          <SectionHeading
            eyebrow="Súmate"
            title="Hay un lugar para tu oficio"
            description="Tu tiempo, tu conocimiento y tus alianzas pueden hacer la diferencia."
          />
          <h2 id="sumate" className="sr-only">
            Formas de participar
          </h2>
          <ul className="divide-y border-y">
            {ways.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 py-4 sm:items-center sm:py-5">
                <Icon
                  className="mt-0.5 shrink-0 text-primary sm:mt-0"
                  size={28}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compromiso con la conservación */}
      <section className={`${wrap} ${sectionPad}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <img
            className="aspect-[4/3] w-full rounded-xl object-cover"
            src={otterPhoto}
            width="1024"
            height="768"
            loading="lazy"
            decoding="async"
            alt="Imagen ilustrativa de una nutria junto al río"
          />
          <div>
            <p className="mb-2 text-sm font-medium text-primary">Nuestro compromiso</p>
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Conservar antes de crecer
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              El bienestar del río, la selva y su biodiversidad orienta cada paso de {ORG}. Porque
              disfrutar la naturaleza también significa protegerla.
            </p>
            <ul className="mt-6 space-y-3">
              {commitments.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-7 w-full sm:w-auto">
              <Link to="/conservacion">
                Conoce nuestro compromiso <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* El parque */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading
            eyebrow="Respira. Explora. Conecta."
            title="El parque, nuestro punto de encuentro"
            description={`Experiencias de ${ORG} que acercan a las personas al entorno que queremos conservar.`}
            link={
              <Link
                to="/parque"
                className={`inline-flex items-center gap-1.5 font-medium text-primary ${focusRing}`}
              >
                Conoce el parque <ArrowRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {experiences.map(
              ({ to, image, w, h, alt, tag, tagIcon: TagIcon, title, text, cta }) => (
                <Link key={title} to={to} className={`group block ${focusRing}`}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      className="aspect-[4/3] w-full object-cover"
                      src={image}
                      width={w}
                      height={h}
                      loading="lazy"
                      decoding="async"
                      alt={alt}
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium">
                      <TagIcon size={12} aria-hidden="true" /> {tag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-medium text-primary">
                    {cta} <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              ),
            )}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Imágenes ilustrativas. Consulta la disponibilidad antes de planear tu visita.
          </p>
        </div>
      </section>

      {/* Novedades */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Lo que nos mueve"
          title="Conocimiento y comunidad"
          link={
            <Link
              to="/blog"
              className={`inline-flex items-center gap-1.5 font-medium text-primary ${focusRing}`}
            >
              Todas las novedades <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <article className="border-t-2 border-primary/40 pt-5">
            <p className="text-sm text-muted-foreground">Investigación · 2026</p>
            <h3 className="mt-1 text-xl font-semibold leading-snug">
              Una hoja de ruta para cuidar {ORG}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Consulta el plan de manejo, conservación y desarrollo turístico que da dirección a
              nuestra asociación.
            </p>
            <Button asChild variant="link" className="mt-3 h-auto p-0">
              <Link to="/investigacion">
                <BookOpen /> Leer el plan de manejo <ArrowUpRight />
              </Link>
            </Button>
          </article>
          <article className="border-t-2 border-primary/40 pt-5">
            <p className="text-sm text-muted-foreground">Participación</p>
            <h3 className="mt-1 text-xl font-semibold leading-snug">
              Las próximas oportunidades, aquí
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Las convocatorias y los eventos se publicarán cuando sus fechas y condiciones estén
              confirmadas.
            </p>
            <Button asChild variant="link" className="mt-3 h-auto p-0">
              <Link to="/eventos">
                Consultar eventos <ArrowUpRight />
              </Link>
            </Button>
          </article>
        </div>
      </section>

      {/* Llamado final */}
      <section className="bg-primary text-primary-foreground">
        <div
          className={`${wrap} flex flex-col gap-6 py-8 sm:py-10 md:flex-row md:items-center md:justify-between`}
        >
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
              Tu profesión también puede recuperar la naturaleza
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              Súmate a la comunidad de {ORG} y pon lo que sabes al servicio de una causa común.
            </p>
          </div>
          <Button asChild variant="photoSolid" size="lg" className="w-full md:w-auto">
            <Link to="/convocatorias">
              <Heart /> Quiero ser parte <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
