import { createFileRoute } from "@tanstack/react-router";
import { OpportunitiesPage, ORG_FULL, pageHead } from "@/components/oasis-pages";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    ...pageHead(
      "Eventos y cursos",
      "Corre por El Oasis: carrera de 2, 5 y 10 km el 20 de diciembre de 2026 en Suchiapa, Chiapas, por la primera generación de guardianes de la cuenca.",
    ),
    links: [{ rel: "canonical", href: "/eventos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: "Corre por El Oasis",
          description:
            "Carrera por la primera generación de guardianes de la cuenca, con distancias de 2, 5 y 10 km.",
          startDate: "2026-12-20T07:00:00-06:00",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: ORG_FULL,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Libramiento Sur Federal Km. 22.8",
              addressLocality: "Suchiapa",
              addressRegion: "Chiapas",
              addressCountry: "MX",
            },
          },
          organizer: { "@type": "Organization", name: ORG_FULL },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <OpportunitiesPage kind="eventos" />;
}
