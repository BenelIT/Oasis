import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/privacidad")({
 head: () => ({...pageHead(pages.privacidad.label, pages.privacidad.description), links: [{rel: "canonical", href: "/privacidad"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="privacidad"/>; }
