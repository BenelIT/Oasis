import { createFileRoute } from "@tanstack/react-router";
import { OpportunitiesPage, pageHead } from "@/components/oasis-pages";
export const Route = createFileRoute("/eventos")({
 head: () => ({...pageHead("Eventos y cursos", "Consulta el estado de los próximos eventos y cursos de El Oasis."), links: [{rel: "canonical", href: "/eventos"}]}),
 component: Page,
});
function Page() { return <OpportunitiesPage kind="eventos"/>; }
