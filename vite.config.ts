
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  // Desactivar Nitro para evitar el destino Cloudflare
  nitro: false,

  // Mantener tu configuración original de TanStack Start
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  // Integración oficial de Netlify
  vite: {
    plugins: [netlify()],
  },
});
