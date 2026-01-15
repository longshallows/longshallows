export { default } from "./customization/config";

export const auth =
  import.meta.env.NOTION_API_SECRET || process.env.NOTION_API_SECRET;
export const dataSourceId =
  import.meta.env.DATA_SOURCE_ID || process.env.DATA_SOURCE_ID;
export const debug = !!(import.meta.env.DEBUG || process.env.DEBUG);
export const site =
  import.meta.env.SITE || process.env.SITE || "http://localhost:3000";
