import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Customize or disable specific ESLint rules
      "@typescript-eslint/no-unused-vars": "warn", // Warn about unused variables instead of error
      "@typescript-eslint/no-explicit-any": "warn", // Warn about using `any` instead of error
      "import/no-anonymous-default-export": "off", // Disable the rule for anonymous default exports
    },
  },
];

export default eslintConfig;