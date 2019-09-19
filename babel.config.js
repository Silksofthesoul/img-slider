const polyfill = require('@babel/polyfill');
const ptfo = require('@babel/plugin-transform-for-of');

module.exports = function (api) {
  api.cache(true);
  const presets = ['@babel/preset-env'];
  const plugins = [polyfill, ptfo];

  return {
    presets,
    plugins,
  };
};
