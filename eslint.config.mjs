/** @type {import("eslint").Linter.FlatConfig[]} */
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import typeScriptESLint from "@typescript-eslint/eslint-plugin";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";
import storybookPlugin from "eslint-plugin-storybook";
import tailwindCSSPlugin from "eslint-plugin-tailwindcss";
// TODO: もっとeslintの設定を凝りたいけど一旦これでOK

export default [
  // eslint.configs.recommended,
  // eslintConfigPrettier,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: "module",
      },
    },
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    ignores: [
      "node_modules/",
      ".next/",
      "build/",
      "public/",
      "package-lock.json",
      "next.config.mjs",
      "tsconfig.json",
      "next-env.d.ts",
      "*.cjs",
      "*.mjs",
    ],
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "error",
    },
  },
];
