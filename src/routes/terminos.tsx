import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/terminos")({
 head: () => ({...pageHead(pages.terminos.label, pages.terminos.description), links: [{rel: "canonical", href: "/terminos"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="terminos"/>; }
