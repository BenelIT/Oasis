import { createFileRoute } from "@tanstack/react-router";
import { OpportunitiesPage, pageHead } from "@/components/oasis-pages";

export const Route = createFileRoute("/convocatorias")({
  head: () => ({
    ...pageHead(
      "Convocatorias",
      "Convocatoria abierta de voluntariado en El Oasis, A.C.: recepción, apoyo administrativo e investigación ambiental, en turnos matutino y vespertino.",
    ),
    links: [{ rel: "canonical", href: "/convocatorias" }],
  }),
  component: Page,
});

function Page() {
  return <OpportunitiesPage kind="convocatorias" />;
}
