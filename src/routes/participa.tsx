import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Footprints,
  Heart,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ORG,
  ORG_FULL,
  SectionHeading,
  pageHead,
  sectionPad,
  wrap,
} from "@/components/oasis-pages";
import river from "@/assets/river-oasis.jpg";
import otterPhoto from "@/assets/river-otter.jpg";

export const Route = createFileRoute("/participa")({
  head: () => ({
    ...pageHead(
      "Participa",
      "Súmate a El Oasis, A.C.: voluntariado, eventos, alianzas y tu profesión al servicio de la conservación del medio ambiente en Suchiapa, Chiapas.",
    ),
    links: [{ rel: "canonical", href: "/participa" }],
  }),
  component: Page,
});

/* ---------- Contenido ---------- */

const email = "contacto@parquenaturaloasis.org";
const mailto = `mailto:${email}?subject=${encodeURIComponent(`Quiero participar en ${ORG}`)}`;
const whatsapp = `https://wa.me/529612767029?text=${encodeURIComponent(
  `Hola, me gustaría participar en ${ORG}`,
)}`;

const openNow = [
  {
    icon: Users,
    badge: "Convocatoria abierta",
    title: "Voluntariado",
    text: "Buscamos voluntarios en recepción, auxiliares administrativos y voluntarios de investigación, en turno matutino o vespertino.",
    to: "/convocatorias",
    cta: "Ver convocatoria",
  },
  {
    icon: Footprints,
    badge: "20 de diciembre de 2026",
    title: "Corre por El Oasis",
    text: "Carrera por la primera generación de guardianes de la cuenca, con distancias de 2, 5 y 10 km.",
    to: "/eventos",
    cta: "Ver el evento",
  },
] as const;

const ways = [
  {
    icon: Heart,
    title: "Con tu tiempo",
    text: "Sé voluntario o voluntaria en recepción, apoyo administrativo, investigación y otras actividades de cuidado del entorno que iremos anunciando.",
  },
  {
    icon: Microscope,
    title: "Con tu profesión",
    text: "Aporta tu conocimiento en investigación, educación ambiental o gestión. Cada disciplina suma a la causa.",
  },
  {
    icon: HeartHandshake,
    title: "Con tu alianza",
    text: "Universidades, instituciones, empresas y organizaciones que quieran sumar conocimiento y recursos a la conservación.",
  },
  {
    icon: CalendarDays,
    title: "Con tu presencia",
    text: "Acompáñanos en carreras, caminatas y jornadas, e invita a tu familia y amistades a conocer el parque.",
  },
] as const;

const steps = [
  {
    title: "Elige cómo aportar",
    text: "Revisa las convocatorias abiertas y los próximos eventos.",
  },
  {
    title: "Escríbenos o llámanos",
    text: "Por correo, teléfono o WhatsApp, cuéntanos qué te interesa.",
  },
  {
    title: "Confirma los detalles",
    text: `Requisitos, turnos y cupos los confirma ${ORG}`,
  },
] as const;

/* ---------- Página ---------- */

function Page() {
  return (
    <main id="contenido">
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={river}
          width="1920"
          height="1024"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
        <div className={`${wrap} pb-8 pt-10 sm:pb-12 sm:pt-20 lg:pb-16 lg:pt-28`}>
          <div className="max-w-3xl">
            <p className="whitespace-nowrap text-[13px] font-medium text-white/90 sm:text-lg">
              {ORG_FULL}
            </p>
            <h1 className="mt-1 text-balance text-3xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Sé parte de la comunidad
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Somos una comunidad filantrópica de profesionales y voluntarios que cuida y recupera
              el medio ambiente. Hay un lugar para tu tiempo, tu conocimiento y tus alianzas.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="warm" className="w-full sm:w-auto">
                <Link to="/convocatorias">
                  <Heart /> Ver convocatorias <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="photo" className="w-full sm:w-auto">
                <Link to="/eventos">
                  <CalendarDays /> Ver eventos <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ahora mismo */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Ahora mismo"
          title="Dos formas de sumarte hoy"
          description="Esto es lo que está abierto en este momento."
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {openNow.map(({ icon: Icon, badge, title, text, to, cta }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className="text-primary" size={30} aria-hidden="true" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {badge}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              <Button asChild className="mt-5 w-full sm:w-auto sm:self-start">
                <Link to={to}>
                  {cta} <ArrowUpRight />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* Formas de participar */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading
            eyebrow="Hay lugar para ti"
            title="Cuatro maneras de participar"
            link={
              <Link
                to="/conservacion"
                className="inline-flex items-center gap-1.5 font-medium text-primary"
              >
                Conoce en qué ayudas <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {ways.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="mt-0.5 shrink-0 text-primary" size={28} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border bg-background p-4 text-sm text-muted-foreground">
            El servicio social, las prácticas y las becas se publicarán cuando sus fechas,
            requisitos y cupos estén aprobados por {ORG}
          </p>
        </div>
      </section>

      {/* Cómo empezar */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading eyebrow="Es sencillo" title="Cómo empezar" />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-start gap-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Contacto */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={`${wrap} grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12`}>
          <div>
            <p className="mb-2 text-sm font-medium text-primary">Contacto</p>
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Escríbenos o llámanos
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Cuéntanos cómo te gustaría participar y {ORG} te responderá con los detalles.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="w-full sm:w-auto">
                <a href={mailto}>
                  <Mail /> {email}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp 961 276 7029
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href="tel:+529612521548">
                  <Phone /> 961 252 1548
                </a>
              </Button>
            </div>
            <p className="mt-5 flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
              <span>{ORG_FULL}, Km 22.8 del Libramiento Sur Federal, rumbo a Suchiapa.</span>
            </p>
          </div>
          <img
            className="aspect-[4/3] w-full rounded-xl object-cover"
            src={otterPhoto}
            width="1024"
            height="768"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Llamado final */}
      <section className="bg-primary text-primary-foreground">
        <div
          className={`${wrap} flex flex-col gap-6 py-8 sm:py-10 md:flex-row md:items-center md:justify-between`}
        >
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
              El futuro florece cuando participamos
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              Elige tu lugar en la comunidad de {ORG}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="photoSolid" size="lg" className="w-full sm:w-auto">
              <Link to="/convocatorias">
                <Heart /> Convocatorias <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="photo" size="lg" className="w-full sm:w-auto">
              <Link to="/eventos">
                <CalendarDays /> Eventos <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
