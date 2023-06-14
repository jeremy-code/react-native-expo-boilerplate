/** @type {import('@babel/core').ConfigFunction} */
const config = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["expo-router/babel", ["module-resolver", { alias: { "~": "./src" } }]],
  };
};

module.exports = config;
