import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// eslint-config-next@16 exports flat config; compat.extends("next/...") causes circular JSON
const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  ...compat.config({}),
  {
    ignores: ["components/ui/**", "hooks/**"],
  },
];

export default eslintConfig;
