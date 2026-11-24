import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/conservacion")({
 head: () => ({...pageHead(pages.conservacion.label, pages.conservacion.description), links: [{rel: "canonical", href: "/conservacion"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="conservacion"/>; }
