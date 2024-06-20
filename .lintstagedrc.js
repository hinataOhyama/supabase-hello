const path = require("path");

const buildEslintCommand = (filenames) =>
  `ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.mjs './**/*.{ts,tsx}' --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "*.{ts,tsx}": [
    buildPrettierCommand,
    buildEslintCommand,
    () => "tsc --incremental false --noEmit",
  ],
  "*.{scss,json,yml}": [buildPrettierCommand],
};
