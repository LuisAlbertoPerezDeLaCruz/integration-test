import { defineConfig } from "astro/config";
import angular from "@analogjs/astro-angular";

export default defineConfig({
  integrations: [angular()],
});
