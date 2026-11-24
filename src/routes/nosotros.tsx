import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/nosotros")({
 head: () => ({...pageHead(pages.nosotros.label, pages.nosotros.description), links: [{rel: "canonical", href: "/nosotros"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="nosotros"/>; }
