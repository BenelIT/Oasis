import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bird,
  BookOpen,
  Droplets,
  Flame,
  Heart,
  Megaphone,
  Microscope,
  ShieldCheck,
  Sprout,
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
import otterPhoto from "@/assets/river-otter.jpg";

export const Route = createFileRoute("/conservacion")({
  head: () => ({
    ...pageHead(
      "Conservación",
      "Así entiende la conservación El Oasis, A.C.: proteger, restaurar y compartir el entorno del Río Pacú, junto con una comunidad filantrópica de profesionales y voluntarios.",
    ),
    links: [{ rel: "canonical", href: "/conservacion" }],
  }),
  component: Page,
});

/* ---------- Contenido (basado en el Plan de manejo 2026) ---------- */

const idea = [
  {
    icon: ShieldCheck,
    title: "Proteger",
    text: "Una zona de conservación sin infraestructura fija ni turismo masivo, con vigilancia y cero descargas al Río Pacú.",
  },
  {
    icon: Sprout,
    title: "Restaurar",
    text: "Reforestación con especies nativas, viveros y obras de agua que ayudan a la vegetación y a la fauna en época de sequía.",
  },
  {
    icon: Users,
    title: "Compartir",
    text: "Educación ambiental, investigación y voluntariado para que más personas entiendan y cuiden este entorno.",
  },
] as const;

const today = [
  "Una asociación civil y una comunidad filantrópica de profesionales unidos por una causa.",
  "Un plan de manejo 2026 con zonificación, programas e indicadores de seguimiento.",
  "Una zona de conservación definida dentro de las 15 hectáreas del parque.",
] as const;

const building = [
  "La certificación de nuestro polígono de conservación como ADVC ante la CONANP.",
  "Convenios con universidades e instituciones de investigación.",
  "Las primeras convocatorias de voluntariado, servicio social y prácticas.",
] as const;

const goals = [
  {
    icon: ShieldCheck,
    title: "Un área certificada",
    text: "Certificar el polígono de conservación como Área Destinada Voluntariamente a la Conservación (ADVC) y buscar su reconocimiento internacional.",
  },
  {
    icon: Droplets,
    title: "Un río sano",
    text: "Cero descargas al Río Pacú, saneamiento con ecotecnias y retención de residuos durante la temporada de lluvias.",
  },
  {
    icon: Sprout,
    title: "Más vegetación nativa",
    text: "Viveros, bancos de germoplasma y reforestación con especies nativas, como la espadaña y el ramón.",
  },
  {
    icon: Bird,
    title: "Fauna y polinizadores protegidos",
    text: "Monitoreo de la nutria de río y la iguana verde, abejas nativas sin aguijón y abrevaderos para la fauna en sequía.",
  },
  {
    icon: BookOpen,
    title: "Generaciones que cuidan",
    text: "Educación ambiental para la niñez y la juventud, y el colectivo Guardianes de la Cuenca.",
  },
  {
    icon: Megaphone,
    title: "Voz en las decisiones",
    text: "Participar en foros y consejos, promover la denuncia popular e impulsar iniciativas contra la caza y la pesca desmedidas.",
  },
] as const;

const principles = [
  {
    title: "Primero el diagnóstico",
    text: "Antes de definir cualquier manejo, estudiamos. Por ejemplo, no habrá reintroducción de peces sin evaluación científica y permisos.",
  },
  {
    title: "Zonas con reglas",
    text: "En la zona de conservación solo se permiten investigación, monitoreo biológico y vigilancia.",
  },
  {
    title: "Nada es definitivo si daña",
    text: "Ninguna actividad ni infraestructura será permanente si el monitoreo muestra impactos incompatibles con la conservación.",
  },
  {
    title: "Vigilancia y respuesta",
    text: "Guardaparques, cámaras de monitoreo y prevención de incendios en coordinación con Protección Civil.",
  },
] as const;

const targets = [
  { value: "0", label: "vertimientos al Río Pacú" },
  { value: ">85 %", label: "de supervivencia en reforestación" },
  { value: "100 %", label: "de residuos clasificados" },
  { value: "0", label: "incendios forestales en el predio" },
] as const;

const professionals = [
  "Investigación y monitoreo biológico",
  "Educación ambiental",
  "Gestión, trámites y alianzas",
] as const;

const volunteers = [
  { icon: Bird, text: "Monitoreo comunitario de flora y fauna" },
  { icon: Sprout, text: "Viveros y reforestación" },
  { icon: Flame, text: "Brigadas de prevención de incendios" },
  { icon: BookOpen, text: "Talleres y jornadas de educación ambiental" },
] as const;

/* ---------- Página ---------- */

function Page() {
  return (
    <main id="contenido">
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={otterPhoto}
          width="1024"
          height="768"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
        <div className={`${wrap} pb-8 pt-10 sm:pb-12 sm:pt-20 lg:pb-16 lg:pt-28`}>
          <div className="max-w-3xl">
            <p className="whitespace-nowrap text-[13px] font-medium text-white/90 sm:text-lg">
              {ORG_FULL}
            </p>
            <h1 className="mt-1 text-balance text-3xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Conservar antes de crecer
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Cuidar la naturaleza no es un extra del parque: es la condición para que exista. Así
              lo entendemos en {ORG}, una comunidad de profesionales y voluntarios unida por esta
              causa.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="warm" className="w-full sm:w-auto">
                <Link to="/convocatorias">
                  <Heart /> Ver convocatorias <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="photo" className="w-full sm:w-auto">
                <Link to="/investigacion">
                  Leer el plan de manejo <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* La idea en corto */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading
          eyebrow="La idea en corto"
          title="Conservar es cuidar con decisiones concretas"
          description="No se trata de dejar un lugar cerrado e intacto. Se trata de decidir, paso a paso, qué se protege, qué se restaura y qué se comparte, y de comprobar con datos que funciona."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {idea.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-2 border-primary/40 pt-4">
              <Icon className="mb-3 text-primary" size={28} aria-hidden="true" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dónde estamos hoy */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading
            eyebrow="Con honestidad"
            title="Dónde estamos hoy"
            description="Somos un proyecto en construcción. Esto es lo que ya tenemos y lo que estamos trabajando para lograr."
          />
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <article className="rounded-xl border bg-background p-5 sm:p-6">
              <h3 className="text-lg font-semibold">Lo que ya somos</h3>
              <ul className="mt-3 space-y-3">
                {today.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border bg-background p-5 sm:p-6">
              <h3 className="text-lg font-semibold">Lo que estamos construyendo</h3>
              <ul className="mt-3 space-y-3">
                {building.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full border-2 border-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Lo que queremos lograr */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Hacia dónde vamos"
          title="Lo que queremos lograr"
          description={`Las metas de conservación de ${ORG} para los próximos años.`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon className="mt-0.5 shrink-0 text-primary" size={26} aria-hidden="true" />
              <div>
                <h3 className="font-semibold leading-snug">{title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos y cómo lo medimos */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading eyebrow="Cómo trabajamos" title="Con reglas claras y metas medibles" />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ul className="divide-y border-y">
              {principles.map((p) => (
                <li key={p.title} className="py-4">
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ul>
            <div>
              <dl className="grid grid-cols-2 gap-3">
                {targets.map((t) => (
                  <div key={t.label} className="rounded-xl border bg-background p-4">
                    <dt className="text-3xl font-semibold text-primary">{t.value}</dt>
                    <dd className="mt-1 text-sm leading-snug text-muted-foreground">{t.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">Metas del plan de manejo 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad y voluntarios */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Nuestra comunidad"
          title="Conservar es un trabajo en comunidad"
          description={`${ORG} reúne a profesionales de distintas disciplinas y a voluntarios que aportan lo que saben hacer por una misma causa.`}
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <article className="rounded-xl border p-5 sm:p-6">
            <Microscope className="mb-3 text-primary" size={28} aria-hidden="true" />
            <h3 className="text-lg font-semibold">Profesionales filántropos</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Ponen su oficio y su tiempo al servicio del ambiente.
            </p>
            <ul className="mt-4 space-y-2">
              {professionals.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border p-5 sm:p-6">
            <Users className="mb-3 text-primary" size={28} aria-hidden="true" />
            <h3 className="text-lg font-semibold">Personas voluntarias</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Participan directamente en el cuidado del entorno.
            </p>
            <ul className="mt-4 space-y-3">
              {volunteers.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mt-5 rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
          Estas actividades están contempladas en el plan de manejo. Las fechas, requisitos y cupos
          se publicarán cuando estén confirmados por {ORG}
        </p>
      </section>

      {/* Llamado final */}
      <section className="bg-primary text-primary-foreground">
        <div
          className={`${wrap} flex flex-col gap-6 py-8 sm:py-10 md:flex-row md:items-center md:justify-between`}
        >
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
              Tu tiempo y tu oficio también cuidan
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              Súmate a la comunidad de {ORG} y ayúdanos a conservar antes de crecer.
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
