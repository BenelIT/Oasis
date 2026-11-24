import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/reglamento")({
 head: () => ({...pageHead(pages.reglamento.label, pages.reglamento.description), links: [{rel: "canonical", href: "/reglamento"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="reglamento"/>; }
