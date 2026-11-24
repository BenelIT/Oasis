import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronRight, Check, Download, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pages, resources, type PageKey } from "@/lib/park-content";
import river from "@/assets/river-oasis.jpg";
import trail from "@/assets/forest-trail.jpg";
import otterPhoto from "@/assets/river-otter.jpg";
import otter from "@/assets/otter-guide.png";
import plan from "@/assets/plan-manejo.pdf.asset.json";

export function pageHead(title: string, description: string) {
  const full = `${title} · El Oasis, Chiapas`;
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
    <section className="subpage-intro">
      <div className="site-width">
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <ChevronRight size={12} />
          <span>{label}</span>
        </div>
        <h1>{title}</h1>
        <p className="section-description">{description}</p>
      </div>
    </section>
  );
}

export function InformationPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];
  const image = page.image === "river" ? river : page.image === "trail" ? trail : otterPhoto;
  return;
  <main id="contenido">
    <PageIntro {...page} />
    <section className="section site-width">
      <div className={page.image ? "content-grid" : "max-w-3xl"}>
        <article className="prose-oasis">
          <h2>{page.heading}</h2>
          {page.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {page.features.map((f) => (
            <div className="feature-line" key={f}>
              <Check size={19} />
              <span>{f}</span>
            </div>
          ))}
          {pageKey === "contacto" && (
            <Button asChild className="mt-7">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Nuevo Libramiento Sur km 22.8 Predio La Ceiba Suchiapa Chiapas")}`}
              >
                <MapPin /> Buscar la dirección <ArrowUpRight />
              </a>
            </Button>
          )}
          {pageKey === "conservacion" && (
            <Button asChild className="mt-7" variant="outline">
              <Link to="/investigacion">
                Consultar el plan de manejo <ArrowUpRight />
              </Link>
            </Button>
          )}
          {pageKey === "participa" && (
            <Button asChild className="mt-7">
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
              className="conservation-image"
              loading="lazy"
            />
            <figcaption className="text-xs text-muted-foreground mt-3">
              Imagen ilustrativa generada; no es una fotografía del parque.
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  </main>;
}

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
        description="Documentos y líneas de investigación del Parque Natural Ecoturístico El Oasis."
      />
      <section className="section site-width">
        <div className="search-controls">
          <label className="sr-only" htmlFor="research-search">
            Buscar investigaciones
          </label>
          <input
            className="search-field"
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
            className="search-field max-w-52"
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
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} documento{filtered.length === 1 ? "" : "s"}
        </p>
        {filtered.map((r) => (
          <article className="resource-row" key={r.id}>
            <div>
              <span className="news-meta">
                {r.type} · {r.year}
              </span>
              <h3>{r.title}</h3>
              <p>{r.author}</p>
              <p className="mt-2 max-w-2xl">{r.summary}</p>
            </div>
            <Button asChild variant="outline">
              <a href={plan.url} target="_blank" rel="noreferrer">
                <Download /> Consultar PDF
              </a>
            </Button>
          </article>
        ))}
        {!filtered.length && (
          <div className="empty-state">
            <Search className="mx-auto text-primary" />
            <h2>Sin documentos para esta búsqueda</h2>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setType("Todos");
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
        <div className="prose-oasis mt-12">
          <h2>Investiga con nosotros</h2>
          <p>
            El plan contempla colaboraciones con estudiantes, docentes e instituciones para
            monitoreo biológico y educación ambiental. Los requisitos y permisos deberán ser
            confirmados por el parque.
          </p>
          <Button asChild>
            <Link to="/contacto">
              Información de contacto <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

export function OpportunitiesPage({ kind }: { kind: "eventos" | "convocatorias" }) {
  const [filter, setFilter] = useState("Todos");
  const event = kind === "eventos";
  return (
    <main id="contenido">
      <PageIntro
        label={event ? "Eventos y cursos" : "Convocatorias"}
        title={event ? "Nos reúne la naturaleza" : "Tu vocación tiene un lugar"}
        description={
          event
            ? "Cursos, caminatas y jornadas para aprender y cuidar juntos."
            : "Voluntariado, servicio social, prácticas e investigación ambiental."
        }
      />
      <section className="section site-width">
        <div className="search-controls">
          <label htmlFor="opportunity-type" className="sr-only">
            Filtrar por tipo
          </label>
          <select
            className="search-field max-w-72"
            id="opportunity-type"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Todos</option>
            {(event
              ? ["Caminatas", "Cursos", "Jornadas"]
              : ["Voluntariado", "Servicio social", "Prácticas", "Becas"]
            ).map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="empty-state">
          <img src={otter} alt="La guía nutria de El Oasis" width="125" height="125" />
          <h2>
            {event
              ? "La próxima aventura está por anunciarse"
              : "Próximamente, nuevas oportunidades"}
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            {filter === "Todos"
              ? "Todavía no hay fechas o convocatorias confirmadas."
              : `No hay publicaciones confirmadas de ${filter.toLowerCase()}.`}
          </p>
          <Button asChild variant="outline">
            <Link to="/participa">
              Conoce cómo participar <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="notice">
          {event
            ? "El plan propone talleres de educación ambiental y jornadas de conservación; no se publican fechas inventadas ni inscripciones a actividades sin confirmar."
            : "Las fechas, requisitos, cupos y condiciones se publicarán cuando estén aprobados por el parque."}
        </div>
      </section>
    </main>
  );
}

export function BlogPage() {
  return (
    <main id="contenido">
      <PageIntro
        label="Novedades"
        title="Historias que nos conectan"
        description="Conoce las ideas y los programas que orientan el proyecto de El Oasis."
      />
      <section className="section site-width">
        <div className="news-item">
          <span className="news-meta">Conservación · Plan de manejo 2026</span>
          <h2 className="font-display text-3xl font-bold mt-3">Conservar antes de crecer</h2>
          <p className="section-description">
            El plan de manejo prioriza la protección del ecosistema, la seguridad y la inclusión
            antes del desarrollo de nuevas actividades.
          </p>
          <Button asChild variant="link" className="mt-4 p-0">
            <Link to="/conservacion">
              Conocer el enfoque de conservación <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="news-item">
          <span className="news-meta">Comunidad · Plan de manejo 2026</span>
          <h2 className="font-display text-3xl font-bold mt-3">Naturaleza sin barreras</h2>
          <p className="section-description">
            La inclusión universal forma parte de la propuesta: senderos piloto, comunicación
            accesible y educación ambiental para diferentes edades.
          </p>
          <Button asChild variant="link" className="mt-4 p-0">
            <Link to="/nosotros">
              Conocer nuestra misión <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <p className="notice mt-8">
          Resúmenes del plan de manejo proporcionado, no noticias de actividades ya realizadas.
        </p>
      </section>
    </main>
  );
}
