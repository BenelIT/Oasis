import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/oasis-pages";
import { pages } from "@/lib/park-content";
export const Route = createFileRoute("/contacto")({
  head: () => ({
    ...pageHead(pages.contacto.label, pages.contacto.description),
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Page,
});
function Page() {
  return <InformationPage pageKey="contacto" />;
}
