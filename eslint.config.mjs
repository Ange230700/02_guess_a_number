import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  prettier,
  { ignores: ["node_modules", "dist"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
