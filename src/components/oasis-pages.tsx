import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronRight, Check, Download, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pages, resources, type PageKey } from "@/lib/park-content";
import river from "@/assets/river-oasis.jpg";
import trail from "@/assets/forest-trail.jpg";
import otterPhoto from "@/assets/river-otter.jpg";
import otter from "@/assets/otter-guide.png";
import plan from "@/assets/plan-manejo.pdf.asset.json";

/* ---------- Constantes y utilidades compartidas ---------- */

export const ORG = "El Oasis, A.C.";
export const ORG_FULL = "Parque Natural Ecoturístico El Oasis, A.C.";

export const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
export const sectionPad = "py-8 sm:py-10 lg:py-12";
export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const fieldCls =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";

export function pageHead(title: string, description: string) {
  const full = `${title} · ${ORG}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function SectionHeading({
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

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b bg-muted/50">
      <div className={`${wrap} py-8 sm:py-10`}>
        <nav
          aria-label="Ruta de navegación"
          className="mb-3 flex items-center gap-1 text-xs text-muted-foreground"
        >
          <Link to="/" className={`hover:text-foreground ${focusRing}`}>
            Inicio
          </Link>
          <ChevronRight size={12} aria-hidden="true" />
          <span aria-current="page">{label}</span>
        </nav>
        <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

/* ---------- Páginas informativas genéricas ---------- */

const MAPS_QUERY = "Nuevo Libramiento Sur km 22.8 Predio La Ceiba Suchiapa Chiapas";

export function InformationPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];
  const image = page.image === "river" ? river : page.image === "trail" ? trail : otterPhoto;

  // OJO: antes había un `return;` suelto y la página devolvía `undefined` (no pintaba nada).
  return (
    <main id="contenido">
      <PageIntro label={page.label} title={page.title} description={page.description} />
      <section className={`${wrap} ${sectionPad}`}>
        <div
          className={
            page.image ? "grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12" : "max-w-3xl"
          }
        >
          <article>
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
              {page.heading}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {page.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {page.features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {page.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
            {pageKey === "contacto" && (
              <Button asChild className="mt-7 w-full sm:w-auto">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`}
                >
                  <MapPin /> Buscar la dirección <ArrowUpRight />
                </a>
              </Button>
            )}
            {pageKey === "conservacion" && (
              <Button asChild className="mt-7 w-full sm:w-auto" variant="outline">
                <Link to="/investigacion">
                  Consultar el plan de manejo <ArrowUpRight />
                </Link>
              </Button>
            )}
            {pageKey === "participa" && (
              <Button asChild className="mt-7 w-full sm:w-auto">
                <Link to="/convocatorias">
                  Consultar convocatorias <ArrowUpRight />
                </Link>
              </Button>
            )}
          </article>
          {page.image && (
            <figure>
              <img
                src={image}
                alt={
                  page.image === "otter"
                    ? "Imagen ilustrativa de una nutria de río"
                    : "Paisaje natural ilustrativo de Chiapas"
                }
                width="1024"
                height="768"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Imagen ilustrativa generada; no es una fotografía del parque.
              </figcaption>
            </figure>
          )}
        </div>
      </section>
    </main>
  );
}

/* ---------- Investigación ---------- */

export function ResearchPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("Todos");
  const filtered = resources.filter(
    (r) =>
      (type === "Todos" || r.type === type) &&
      `${r.title} ${r.author} ${r.year} ${r.keywords}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main id="contenido">
      <PageIntro
        label="Investigación"
        title="Conocimiento para conservar"
        description={`Documentos y líneas de investigación del Parque Natural Ecoturístico ${ORG}`}
      />
      <section className={`${wrap} ${sectionPad}`}>
        <div className="mb-3 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="research-search">
            Buscar investigaciones
          </label>
          <input
            className={fieldCls}
            id="research-search"
            type="search"
            placeholder="Buscar por título, autor o palabra clave…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label className="sr-only" htmlFor="research-type">
            Tipo de documento
          </label>
          <select
            className={`${fieldCls} sm:w-52`}
            id="research-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Todos</option>
            <option>Reporte</option>
            <option>Artículo</option>
            <option>Tesis</option>
          </select>
        </div>
        <p className="mb-2 text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} documento{filtered.length === 1 ? "" : "s"}
        </p>

        <div className="divide-y border-y">
          {filtered.map((r) => (
            <article
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:justify-between"
              key={r.id}
            >
              <div>
                <p className="text-sm text-muted-foreground">
                  {r.type} · {r.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.author}</p>
                <p className="mt-2 max-w-2xl leading-relaxed">{r.summary}</p>
              </div>
              <Button asChild variant="outline" className="w-full shrink-0 sm:w-auto">
                <a href={plan.url} target="_blank" rel="noreferrer">
                  <Download /> Consultar PDF
                </a>
              </Button>
            </article>
          ))}
        </div>

        {!filtered.length && (
          <div className="rounded-xl border border-dashed p-8 text-center">
            <Search className="mx-auto text-primary" aria-hidden="true" />
            <h2 className="mt-3 text-lg font-semibold">Sin documentos para esta búsqueda</h2>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearch("");
                setType("Todos");
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold">Investiga con nosotros</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            El plan contempla colaboraciones con estudiantes, docentes e instituciones para
            monitoreo biológico y educación ambiental. Los requisitos y permisos deberán ser
            confirmados por {ORG}
          </p>
          <Button asChild className="mt-5 w-full sm:w-auto">
            <Link to="/contacto">
              Información de contacto <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

/* ---------- Eventos y convocatorias ---------- */

export function OpportunitiesPage({ kind }: { kind: "eventos" | "convocatorias" }) {
  const [filter, setFilter] = useState("Todos");
  const event = kind === "eventos";
  const options = event
    ? ["Caminatas", "Cursos", "Jornadas"]
    : ["Voluntariado", "Servicio social", "Prácticas", "Becas"];

  return (
    <main id="contenido">
      <PageIntro
        label={event ? "Eventos y cursos" : "Convocatorias"}
        title={event ? "Nos reúne la naturaleza" : "Tu vocación tiene un lugar"}
        description={
          event
            ? "Cursos, caminatas y jornadas para aprender y cuidar juntos."
            : "Voluntariado, servicio social, prácticas e investigación ambiental para quienes quieren aportar su profesión."
        }
      />
      <section className={`${wrap} ${sectionPad}`}>
        <div className="mb-5">
          <label htmlFor="opportunity-type" className="sr-only">
            Filtrar por tipo
          </label>
          <select
            className={`${fieldCls} sm:w-72`}
            id="opportunity-type"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Todos</option>
            {options.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-dashed p-6 text-center sm:p-10">
          <img
            className="mx-auto"
            src={otter}
            alt={`La guía nutria de ${ORG}`}
            width="125"
            height="125"
          />
          <h2 className="mt-3 text-balance text-xl font-semibold sm:text-2xl">
            {event
              ? "La próxima aventura está por anunciarse"
              : "Próximamente, nuevas oportunidades"}
          </h2>
          <p className="mx-auto mb-5 mt-2 max-w-md text-sm text-muted-foreground">
            {filter === "Todos"
              ? "Todavía no hay fechas o convocatorias confirmadas."
              : `No hay publicaciones confirmadas de ${filter.toLowerCase()}.`}
          </p>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link to="/participa">
              Conoce cómo participar <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <p className="mt-6 rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
          {event
            ? "El plan propone talleres de educación ambiental y jornadas de conservación; no se publican fechas inventadas ni inscripciones a actividades sin confirmar."
            : `Las fechas, requisitos, cupos y condiciones se publicarán cuando estén aprobados por ${ORG}`}
        </p>
      </section>
    </main>
  );
}

/* ---------- Novedades ---------- */

const stories = [
  {
    meta: "Conservación · Plan de manejo 2026",
    title: "Conservar antes de crecer",
    text: "El plan de manejo prioriza la protección del ecosistema, la seguridad y la inclusión antes del desarrollo de nuevas actividades.",
    to: "/conservacion",
    cta: "Conocer el enfoque de conservación",
  },
  {
    meta: "Comunidad · Plan de manejo 2026",
    title: "Naturaleza sin barreras",
    text: "La inclusión universal forma parte de la propuesta: senderos piloto, comunicación accesible y educación ambiental para diferentes edades.",
    to: "/nosotros",
    cta: "Conocer nuestra misión",
  },
] as const;

export function BlogPage() {
  return (
    <main id="contenido">
      <PageIntro
        label="Novedades"
        title="Historias que nos conectan"
        description={`Conoce las ideas y los programas que orientan el proyecto de ${ORG}`}
      />
      <section className={`${wrap} ${sectionPad}`}>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {stories.map((s) => (
            <article key={s.title} className="border-t-2 border-primary/40 pt-5">
              <p className="text-sm text-muted-foreground">{s.meta}</p>
              <h2 className="mt-1 text-2xl font-semibold leading-snug">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
              <Button asChild variant="link" className="mt-3 h-auto p-0">
                <Link to={s.to}>
                  {s.cta} <ArrowUpRight />
                </Link>
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
          Resúmenes del plan de manejo proporcionado, no noticias de actividades ya realizadas.
        </p>
      </section>
    </main>
  );
}
