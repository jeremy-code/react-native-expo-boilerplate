/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};

module.exports = config;
