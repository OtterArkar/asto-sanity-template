import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Sanity In Astro",
  basePath: "/studio",
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
