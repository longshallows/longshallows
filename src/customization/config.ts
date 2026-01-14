import defaultConfig, { type Config } from "../config-default";

const config: Config = {
  ...defaultConfig,

  index: {
    titleClasses: "text-5xl font-bold",
    titleFontFamily: "Arial",
  },

  post: {
    titleClasses: "text-3xl",
  },

  footer: {
    content: "©︎ 2026 Yasuyuki Nagase All rights reserved.",
  },

  // Google Fonts
  googleFonts: "Noto+Sans+JP:wght@400;700",
};

export default config;
