import { createFileRoute } from "@tanstack/react-router";
import { OpportunitiesPage, pageHead } from "@/components/oasis-pages";
export const Route = createFileRoute("/convocatorias")({
 head: () => ({...pageHead("Convocatorias", "Oportunidades de participación y voluntariado ambiental en El Oasis."), links: [{rel: "canonical", href: "/convocatorias"}]}),
 component: Page,
});
function Page() { return <OpportunitiesPage kind="convocatorias"/>; }
