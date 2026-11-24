import { createFileRoute } from "@tanstack/react-router";
import { BlogPage, pageHead } from "@/components/oasis-pages";
export const Route = createFileRoute("/blog")({
 head: () => ({...pageHead("Novedades", "Programas, ideas y comunidad para conservar El Oasis en Chiapas."), links: [{rel: "canonical", href: "/blog"}]}),
 component: Page,
});
function Page() { return <BlogPage/>; }
