import { createFileRoute } from "@tanstack/react-router";
import { ResearchPage, pageHead } from "@/components/oasis-pages";
export const Route = createFileRoute("/investigacion")({
 head: () => ({...pageHead("Investigación", "Documentos y líneas de investigación del Parque Natural Ecoturístico El Oasis."), links: [{rel: "canonical", href: "/investigacion"}]}),
 component: Page,
});
function Page() { return <ResearchPage/>; }
