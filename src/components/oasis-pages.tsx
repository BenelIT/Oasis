import { Link } from "@tanstack/react-router";
import { useId, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Download,
  Footprints,
  Heart,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Moon,
  Phone,
  Search,
  Sun,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { pages, resources, type PageKey } from "@/lib/park-content";
import river from "@/assets/river-oasis.jpg";
import trail from "@/assets/forest-trail.jpg";
import otterPhoto from "@/assets/river-otter.jpg";
import otter from "@/assets/otter-guide.png";
import voluntariadoFlyer from "@/assets/voluntariado1.jpg";
import carreraFlyer from "@/assets/carrera_oasis.jpg";
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
                  href={`https://maps.app.goo.gl/qaqU5EoGy5mmS4488`}
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

                width="1024"
                height="768"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
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

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value?: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <IconBadge>
        <Icon size={20} />
      </IconBadge>
      <span>
        <span className={value ? "block text-sm text-muted-foreground" : "block font-medium"}>
          {label}
        </span>
        {value && <span className="font-medium">{value}</span>}
      </span>
    </li>
  );
}

function PlaceSection({ address }: { address: string }) {
  return (
    <section>
      <h3 className="text-lg font-semibold">Lugar</h3>
      <div className="mt-3 flex items-start gap-3">
        <MapPin className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
        <p className="leading-snug text-muted-foreground">
          {ORG_FULL}, ubicado en el {address}
        </p>
      </div>
      <Button asChild variant="outline" className="mt-3 w-full sm:w-auto">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`}
        >
          Cómo llegar <ArrowUpRight />
        </a>
      </Button>
    </section>
  );
}

/** Tarjeta con el flyer como vista previa; al tocarla abre un modal con la información completa. */
function FlyerCard({
  flyer,
  flyerAlt,
  imgPosition = "object-top",
  badge,
  title,
  subtitle,
  summary,
  actions,
  details,
}: {
  flyer: string;
  flyerAlt: string;
  imgPosition?: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: ReactNode;
  actions: (open: () => void) => ReactNode;
  details: ReactNode;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      {/* Vista previa en la página */}
      <article className="grid overflow-hidden rounded-xl border md:grid-cols-[18rem_1fr] lg:grid-cols-[20rem_1fr]">
        <button
          type="button"
          onClick={open}
          aria-label={`Ver la información completa: ${title}`}
          className={`group relative block aspect-[4/5] w-full overflow-hidden bg-muted md:aspect-auto md:min-h-[26rem] ${focusRing}`}
        >
          <img
            className={`h-full w-full object-cover ${imgPosition} transition-transform duration-300 group-hover:scale-[1.02]`}
            src={flyer}
            width="1024"
            height="1536"
            alt={flyerAlt}
            loading="lazy"
            decoding="async"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-black/70 px-4 py-3 text-sm font-medium text-white">
            Toca para ver la información completa <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </button>

        <div className="flex flex-col p-5 sm:p-6">
          <p className="mb-2 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {badge}
          </p>
          <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          <p className="mt-1 text-muted-foreground">{subtitle}</p>
          {summary}
          <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">{actions(open)}</div>
        </div>
      </article>

      {/* Modal con la información completa */}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-4xl overflow-hidden rounded-xl border bg-background p-0 text-foreground shadow-xl backdrop:bg-black/60"
      >
        <div className="flex max-h-[92dvh] flex-col">
          <header className="flex items-start justify-between gap-4 bg-primary p-4 text-primary-foreground sm:p-5">
            <div>
              <p className="text-xs font-medium text-primary-foreground/85">{badge}</p>
              <h2
                id={titleId}
                className="text-balance text-xl font-semibold leading-tight sm:text-2xl"
              >
                {title}
              </h2>
              <p className="text-sm text-primary-foreground/85">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="shrink-0 rounded-full p-2 hover:bg-primary-foreground/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </header>

          <div className="grid gap-6 overflow-y-auto p-5 sm:p-6 md:grid-cols-[16rem_1fr] md:gap-8">
            <img
              className="order-last mx-auto w-full max-w-xs rounded-lg border md:order-first md:max-w-none"
              src={flyer}
              width="1024"
              height="1536"
              alt={flyerAlt}
              loading="lazy"
              decoding="async"
            />
            <div className="space-y-6">{details}</div>
          </div>
        </div>
      </dialog>
    </>
  );
}

/* ----- Convocatoria activa: voluntariado ----- */

// Única convocatoria activa por ahora. Para agregar otra, conviértelo en un arreglo.
const volunteerCall = {
  filterType: "Voluntariado",
  badge: "Convocatoria abierta · Voluntariado",
  title: "¡Súmate al equipo!",
  subtitle: "y contribuye a la conservación de nuestros recursos naturales",
  roles: [
    { icon: Users, label: "Voluntariado en recepción" },
    { icon: Laptop, label: "Auxiliar administrativo" },
    { icon: Microscope, label: "Voluntarios de investigación" },
  ],
  shifts: [
    { icon: Sun, label: "Matutino", value: "9:00 a. m. – 1:00 p. m." },
    { icon: Moon, label: "Vespertino", value: "2:00 p. m. – 6:00 p. m." },
  ],
  phones: [
    { label: "961 276 7029", href: "tel:+529612767029" },
    { label: "961 252 1548", href: "tel:+529612521548" },
  ],
  email: "voluntariado@parquenaturaloasis.org",
  address: "Km 22.8 del Libramiento Sur Federal, rumbo a Suchiapa.",
  flyerAlt:
    "Cartel de la convocatoria de voluntariado de El Oasis, A.C.: ¡Súmate al equipo! Se buscan voluntarios en recepción, auxiliares administrativos y voluntarios de investigación, en turno matutino de 9:00 a. m. a 1:00 p. m. o vespertino de 2:00 p. m. a 6:00 p. m.",
} as const;

const mailtoHref = `mailto:${volunteerCall.email}?subject=${encodeURIComponent(
  `Voluntariado en ${ORG}`,
)}`;

function VolunteerCallCard() {
  const c = volunteerCall;
  return (
    <FlyerCard
      flyer={voluntariadoFlyer}
      flyerAlt={c.flyerAlt}
      badge={c.badge}
      title={c.title}
      subtitle={c.subtitle}
      summary={
        <>
          <h3 className="mt-5 font-semibold">Buscamos voluntarios</h3>
          <ul className="mt-2 space-y-1.5">
            {c.roles.map(({ label }) => (
              <li key={label} className="flex items-start gap-2.5">
                <Check className="mt-0.5 shrink-0 text-primary" size={18} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Turnos: matutino ({c.shifts[0].value}) y vespertino ({c.shifts[1].value}).
          </p>
        </>
      }
      actions={(open) => (
        <>
          <Button onClick={open} className="w-full sm:w-auto">
            Ver información completa <ArrowUpRight />
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href={mailtoHref}>
              <Mail /> Escribir al correo
            </a>
          </Button>
        </>
      )}
      details={
        <>
          <section>
            <h3 className="text-lg font-semibold">Buscamos voluntarios</h3>
            <ul className="mt-3 space-y-3">
              {c.roles.map((r) => (
                <InfoRow key={r.label} icon={r.icon} label={r.label} />
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold">Turnos disponibles</h3>
            <ul className="mt-3 space-y-3">
              {c.shifts.map((t) => (
                <InfoRow key={t.label} icon={t.icon} label={t.label} value={t.value} />
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold">Para más información</h3>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {c.phones.map((p) => (
                <Button key={p.href} asChild variant="outline" className="w-full sm:w-auto">
                  <a href={p.href}>
                    <Phone /> {p.label}
                  </a>
                </Button>
              ))}
              <Button asChild className="w-full sm:w-auto">
                <a href={mailtoHref}>
                  <Mail /> {c.email}
                </a>
              </Button>
            </div>
          </section>
          <PlaceSection address={c.address} />
        </>
      }
    />
  );
}

/* ----- Evento: Corre por El Oasis ----- */

const raceEvent = {
  filterType: "Carreras",
  badge: "Próximo evento · Carrera",
  title: "Corre por El Oasis",
  subtitle: "Carrera por la primera generación de guardianes de la cuenca",
  facts: [
    { icon: CalendarDays, label: "Fecha", value: "20 de diciembre de 2026" },
    { icon: Clock, label: "Hora", value: "7:00 a. m." },
    { icon: Footprints, label: "Distancias", value: "2 km, 5 km y 10 km" },
    { icon: Heart, label: "Donación con causa", value: "$200" },
    { icon: Trophy, label: "Premiación", value: "Para los primeros 3 lugares" },
  ],
  whatsappLabel: "961 276 7029",
  whatsappHref: `https://wa.me/529612767029?text=${encodeURIComponent(
    "Hola, me gustaría recibir más información de la carrera Corre por El Oasis.",
  )}`,
  facebookName: "Parque Natural Ecoturístico “El Oasis”",
  // Pega aquí el enlace de la página de Facebook para que el nombre sea un enlace.
  facebookUrl: "" as string,
  address: "Libramiento Sur Federal Km. 22.8.",
  flyerAlt:
    "Cartel de la carrera Corre por El Oasis, por la primera generación de guardianes de la cuenca. Distancias de 2, 5 y 10 kilómetros, el 20 de diciembre de 2026 a las 7:00 a. m., con donación con causa de 200 pesos y premiación para los primeros tres lugares.",
} as const;

function RaceEventCard() {
  const r = raceEvent;
  return (
    <FlyerCard
      flyer={carreraFlyer}
      flyerAlt={r.flyerAlt}
      imgPosition="object-[50%_60%]"
      badge={r.badge}
      title={r.title}
      subtitle={r.subtitle}
      summary={
        <ul className="mt-5 space-y-2">
          {r.facts.slice(0, 4).map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-center gap-2.5">
              <Icon className="shrink-0 text-primary" size={18} aria-hidden="true" />
              <span>
                <span className="text-muted-foreground">{label}: </span>
                <span className="font-medium">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      }
      actions={(open) => (
        <>
          <Button onClick={open} className="w-full sm:w-auto">
            Ver información completa <ArrowUpRight />
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href={r.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle /> Preguntar por WhatsApp
            </a>
          </Button>
        </>
      )}
      details={
        <>
          <section>
            <h3 className="text-lg font-semibold">Datos de la carrera</h3>
            <ul className="mt-3 space-y-3">
              {r.facts.map((f) => (
                <InfoRow key={f.label} icon={f.icon} label={f.label} value={f.value} />
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold">Más información</h3>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="w-full sm:w-auto">
                <a href={r.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp {r.whatsappLabel}
                </a>
              </Button>
              {r.facebookUrl && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={r.facebookUrl} target="_blank" rel="noreferrer">
                    Facebook <ArrowUpRight />
                  </a>
                </Button>
              )}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              También en Facebook: {r.facebookName}
            </p>
          </section>
          <PlaceSection address={r.address} />
        </>
      }
    />
  );
}

/* ----- Página ----- */

export function OpportunitiesPage({ kind }: { kind: "eventos" | "convocatorias" }) {
  const [filter, setFilter] = useState("Todos");
  const event = kind === "eventos";
  const options = event
    ? ["Carreras", "Caminatas", "Cursos", "Jornadas"]
    : ["Voluntariado", "Servicio social", "Prácticas", "Becas"];
  const showCall = !event && (filter === "Todos" || filter === volunteerCall.filterType);
  const showRace = event && (filter === "Todos" || filter === raceEvent.filterType);

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

        {showCall || showRace ? (
          <>
            {showCall && <VolunteerCallCard />}
            {showRace && <RaceEventCard />}
            {filter === "Todos" && (
              <p className="mt-3 text-sm text-muted-foreground">
                {event
                  ? "Por ahora, este es el único evento anunciado."
                  : "Por ahora, esta es la única convocatoria abierta."}
              </p>
            )}
          </>
        ) : (
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
        )}

        <p className="mt-6 rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
          {event
            ? `Los demás eventos, cursos y jornadas se publicarán cuando sus fechas y condiciones estén confirmadas por ${ORG}`
            : `Las demás convocatorias se publicarán cuando sus fechas, requisitos y cupos estén aprobados por ${ORG}`}
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
