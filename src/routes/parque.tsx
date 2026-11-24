import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/parque")({
 head: () => ({...pageHead(pages.parque.label, pages.parque.description), links: [{rel: "canonical", href: "/parque"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="parque"/>; }
