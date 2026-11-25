import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bird,
  BookOpen,
  Check,
  Droplets,
  Eye,
  Flame,
  Footprints,
  Heart,
  Leaf,
  MapPin,
  Mountain,
  Recycle,
  Sun,
  Target,
  Tent,
  Trees,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ORG,
  ORG_FULL,
  SectionHeading,
  focusRing,
  pageHead,
  sectionPad,
  wrap,
} from "@/components/oasis-pages";
import river from "@/assets/river-oasis.jpg";
import trail from "@/assets/forest-trail.jpg";

export const Route = createFileRoute("/parque")({
  head: () => ({
    ...pageHead(
      "El parque",
      "Conoce el Parque Natural Ecoturístico El Oasis, A.C.: naturaleza sin barreras, conservación, educación ambiental, aventura responsable e investigación en Suchiapa, Chiapas.",
    ),
    links: [{ rel: "canonical", href: "/parque" }],
  }),
  component: Page,
});

/* ---------- Contenido (basado en el Plan de manejo 2026) ---------- */

const facts = [
  { icon: Trees, title: "15 hectáreas", text: "En Suchiapa, Chiapas" },
  { icon: Leaf, title: "Selva baja caducifolia", text: "Y bosque de galería" },
  { icon: Droplets, title: "Río Pacú", text: "Subcuenca del Río Suchiapa" },
  { icon: MapPin, title: "Cerca de Tuxtla", text: "Sobre el Nuevo Libramiento Sur" },
] as const;

const values = [
  {
    title: "Placer de servir",
    text: "Atención cálida, empática e incluyente para que cada visita sea hospitalaria, accesible y memorable.",
  },
  {
    title: "Unión familiar y pasión por conservar",
    text: "Proteger, restaurar y respetar el entorno, con una cultura de aprendizaje y convivencia armónica.",
  },
  {
    title: "Evolución sostenible",
    text: "Crecer con responsabilidad, innovación y mejora continua, cuidando el equilibrio ecológico, social y financiero.",
  },
  {
    title: "Nuestra seguridad, ante todo",
    text: "Cuidar la integridad y el bienestar de visitantes, colaboradores y comunidades vecinas.",
  },
  {
    title: "Total y absoluta integridad",
    text: "Transparencia, ética y responsabilidad con los recursos, la normativa ambiental y la comunidad.",
  },
  {
    title: "Equilibrio y armonía",
    text: "Que cada acción devuelva a la naturaleza más de lo que toma.",
  },
] as const;

const tiers = [
  {
    icon: Footprints,
    label: "Primeras experiencias",
    items: [
      "Senderismo interpretativo",
      "Observación de flora y fauna",
      "Fotografía de naturaleza",
      "Talleres de educación ambiental",
      "Observación astronómica",
      "Recorridos inclusivos",
    ],
  },
  {
    icon: Tent,
    label: "Se sumarán de forma progresiva",
    items: [
      "Campismo delimitado",
      "Noches de fogata y relatos",
      "Cabuyería y fogatismo responsable",
      "Arborismo",
    ],
  },
  {
    icon: Mountain,
    label: "En evaluación técnica",
    items: ["Tirolesas", "Actividades acuáticas, como water biking", "Instalaciones acuáticas"],
  },
] as const;

const zones = [
  {
    title: "Conservación estricta",
    text: "Protege la selva baja caducifolia y el hábitat de sus especies. Solo se permiten investigación, monitoreo biológico y vigilancia; sin infraestructura fija, turismo masivo ni extracción de recursos. El objetivo es certificarla como ADVC ante la CONANP.",
  },
  {
    title: "Recepción, servicios y uso público",
    text: "Centro de atención al visitante, senderos adaptados, talleres, escuela en el bosque, sanitarios ecológicos y hospedaje de bajo impacto. Los grupos son guiados y con aforo controlado.",
  },
  {
    title: "Aventura y campismo",
    text: "Concentra las actividades de reto físico, el campamento y las convivencias nocturnas. Las fogatas se hacen solo en fosas elevadas; no se permite fuego directo sobre suelo abierto.",
  },
] as const;

const commitments = [
  {
    icon: Droplets,
    title: "Cero vertimientos al Río Pacú",
    text: "Prohibimos las descargas al río y tratamos el agua con ecotecnias: sanitarios secos y biodigestores.",
  },
  {
    icon: Droplets,
    title: "Agua de lluvia",
    text: "Reservorios que cosechan lluvia para regar el vivero de flora nativa y abastecer la red contra incendios.",
  },
  {
    icon: Sun,
    title: "Energía solar",
    text: "El plan prevé un sistema fotovoltaico aislado de la red, con iluminación LED amigable con la fauna nocturna.",
  },
  {
    icon: Recycle,
    title: "Cero plásticos",
    text: "Eliminación progresiva de desechables, estaciones de separación y prohibición de vidrio y plásticos de un solo uso en la ribera.",
  },
  {
    icon: Flame,
    title: "Prevención de incendios",
    text: "Brechas cortafuego, fogatas solo en estructuras controladas y suspensión automática con vientos fuertes.",
  },
  {
    icon: Bird,
    title: "Vida silvestre",
    text: "Monitoreo participativo de la nutria de río y la iguana verde, abejas nativas sin aguijón y un vivero de flora nativa.",
  },
] as const;

const inclusion = [
  "Sendero inclusivo piloto con superficie estable, pasamanos de guía y áreas de descanso.",
  "Señalética con relieve, Braille y códigos QR.",
  "Personal capacitado en trato digno, lengua de señas y apoyo a personas con movilidad reducida y adultos mayores.",
  "Educación ambiental para todas las edades, desde la infancia.",
] as const;

const learning = [
  {
    title: "Aula en el Bosque",
    text: "Talleres permanentes de biodiversidad, agua, manejo de residuos y cambio climático.",
  },
  {
    title: "Universidades e investigación",
    text: "Convenios para estancias, servicio social y proyectos aplicados en el parque.",
  },
  {
    title: "Guardianes de la Cuenca",
    text: "Un colectivo de educación ambiental y liderazgo comunitario para todas las edades.",
  },
  {
    title: "Voluntariado",
    text: "Espacios para que la sociedad civil participe en el cuidado del entorno.",
  },
] as const;

const roadmap = [
  {
    title: "Certeza y preparación",
    text: "Delimitación del predio, brecha cortafuegos, expediente ADVC y diseño del sendero inclusivo.",
  },
  {
    title: "Apertura controlada",
    text: "Visitas guiadas, grupos escolares, convenios universitarios y Escuela del Bosque.",
  },
  {
    title: "Consolidación",
    text: "Evaluación de actividades de aventura, cabañas de bajo impacto y energía solar en la recepción.",
  },
  {
    title: "Especialización",
    text: "Cabañas para investigadores y visitantes, redes internacionales de investigación y turismo científico.",
  },
  {
    title: "Modelo replicable",
    text: "Sistematizar nuestro manejo adaptativo para compartirlo con otros predios de la región.",
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
              Naturaleza sin barreras
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Un parque para reconectar, aprender y cuidar, a orillas del Río Pacú, en Suchiapa,
              Chiapas.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="warm" className="w-full sm:w-auto">
                <Link to="/convocatorias">
                  <Heart /> Ver convocatorias <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="photo" className="w-full sm:w-auto">
                <Link to="/contacto">
                  <MapPin /> Cómo llegar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section className="border-b bg-muted/50" aria-label="Datos del parque">
        <div
          className={`${wrap} grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:py-6`}
        >
          {facts.map(({ icon: Icon, title, text }) => (
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

      {/* Qué es */}
      <section className={`${wrap} ${sectionPad}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="mb-2 text-sm font-medium text-primary">Conoce el parque</p>
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Un respiro cerca de la ciudad, con el río como protagonista
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {ORG} impulsa un espacio de recreación, turismo de naturaleza, educación ambiental,
                investigación y convivencia, en 15 hectáreas de selva baja caducifolia y bosque de
                galería junto al Gran Río Pacú.
              </p>
              <p>
                Está pensado para que más personas disfruten la naturaleza sin ir lejos y para que
                esa experiencia se convierta en cuidado del entorno.
              </p>
              <p>
                El parque retoma la cosmovisión Mokaya-Zoque bajo el concepto de «La Casa de Natura»
                y reconoce al Río Pacú como un entorno de gran relevancia para la protocultura
                zoque-chiapaneca.
              </p>
            </div>
            <blockquote className="mt-6 border-l-4 border-primary pl-4">
              <p className="text-xl font-semibold leading-snug">«Conservar antes de crecer»</p>
              <p className="mt-1 text-sm text-muted-foreground">
                El turismo y la conservación no son lo mismo: por eso el uso público se concentra en
                zonas definidas y el resto se protege.
              </p>
            </blockquote>
          </div>
          <figure>
            <img
              className="aspect-[4/3] w-full rounded-xl object-cover"
              src={trail}
              width="1024"
              height="768"
              loading="lazy"
              decoding="async"
              alt="Sendero forestal ilustrativo"
            />
          </figure>
        </div>
      </section>

      {/* Visión y misión */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading eyebrow="Hacia dónde vamos" title="Nuestra visión y nuestra misión" />
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <article className="rounded-xl border bg-background p-5 sm:p-6">
              <Eye className="mb-3 text-primary" size={28} aria-hidden="true" />
              <h3 className="text-xl font-semibold">Visión</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Ser un referente biocultural regional, nacional e internacional: un santuario donde
                la conservación, la investigación científica y el ecoturismo se entrelazan para
                inspirar la inclusión universal, la convivencia familiar y una conexión profunda con
                la naturaleza.
              </p>
            </article>
            <article className="rounded-xl border bg-background p-5 sm:p-6">
              <Target className="mb-3 text-primary" size={28} aria-hidden="true" />
              <h3 className="text-xl font-semibold">Misión</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Brindar un espacio inclusivo de naturaleza, recreación y aventura que sea un respiro
                frente al estrés urbano y promueva el bienestar integral. Generamos valor y
                conciencia socioambiental conservando la biodiversidad, investigando y aprovechando
                de forma sostenible nuestros ecosistemas, honrando el patrimonio cultural y
                contribuyendo a la lucha contra el cambio climático.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading eyebrow="Lo que nos guía" title="Nuestros valores" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-primary/40 pt-4">
              <h3 className="text-lg font-semibold leading-snug">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Qué vivir */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading
            eyebrow="Respira. Explora. Conecta."
            title="Qué podrás vivir en el parque"
            description="Las experiencias se abren por etapas, de menor a mayor intensidad, y solo cuando son seguras para las personas y para el ecosistema."
          />
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {tiers.map(({ icon: Icon, label, items }) => (
              <article key={label} className="rounded-xl border bg-background p-5">
                <Icon className="mb-3 text-primary" size={28} aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-snug">{label}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 shrink-0 text-primary"
                        size={18}
                        aria-hidden="true"
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Las actividades y su apertura están sujetas a confirmación. Consulta la disponibilidad
            antes de planear tu visita.
          </p>
        </div>
      </section>

      {/* Zonificación */}
      <section className={`${wrap} ${sectionPad}`}>
        <SectionHeading
          eyebrow="Cómo está organizado"
          title="Un territorio con zonas y reglas claras"
          description="Cada zona tiene una función y límites de uso para que la visita no afecte el suelo, el agua, la vegetación ni la fauna."
        />
        <ul className="divide-y border-y">
          {zones.map((z) => (
            <li key={z.title} className="py-5 md:grid md:grid-cols-[16rem_1fr] md:gap-8">
              <h3 className="text-lg font-semibold leading-snug">{z.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground md:mt-0">{z.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Compromisos ambientales */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading eyebrow="Conservar antes de crecer" title="Cómo cuidamos el entorno" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="mt-0.5 shrink-0 text-primary" size={26} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold leading-snug">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-6 w-full sm:w-auto">
            <Link to="/conservacion">
              Conoce nuestra conservación <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Inclusión + educación */}
      <section className={`${wrap} ${sectionPad}`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading eyebrow="Para todas y todos" title="Inclusión desde el diseño" />
            <ul className="space-y-3">
              {inclusion.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Aprender y cuidar" title="Educación e investigación" />
            <ul className="divide-y border-y">
              {learning.map((l) => (
                <li key={l.title} className="py-4">
                  <h3 className="font-semibold leading-snug">{l.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{l.text}</p>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-3 h-auto p-0">
              <Link to="/investigacion">
                <BookOpen /> Leer el plan de manejo <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hoja de ruta */}
      <section className={`bg-muted/50 ${sectionPad}`}>
        <div className={wrap}>
          <SectionHeading
            eyebrow="Paso a paso"
            title="La ruta de El Oasis, A.C."
            description="Etapas propuestas en el plan de manejo. Las fechas se anunciarán cuando estén confirmadas."
          />
          <ol className="ml-2 space-y-6 border-l-2 border-primary/30 pl-6">
            {roadmap.map((r, i) => (
              <li key={r.title} className="relative">
                <span
                  className="absolute -left-[2.2rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="font-semibold leading-snug">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Llamado final */}
      <section className="bg-primary text-primary-foreground">
        <div
          className={`${wrap} flex flex-col gap-6 py-8 sm:py-10 md:flex-row md:items-center md:justify-between`}
        >
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
              Ayúdanos a cuidar este lugar
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              Súmate a la comunidad de {ORG} con tu tiempo, tu conocimiento o tu alianza.
            </p>
          </div>
          <Button asChild variant="photoSolid" size="lg" className="w-full md:w-auto">
            <Link to="/convocatorias" className={focusRing}>
              <Heart /> Quiero ser parte <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
