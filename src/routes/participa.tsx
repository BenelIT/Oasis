import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/participa")({
 head: () => ({...pageHead(pages.participa.label, pages.participa.description), links: [{rel: "canonical", href: "/participa"}]}),
 component: Page,
});
function Page() { return <InformationPage pageKey="participa"/>; }
