module.exports = function (api) {
  api.cache(true);

  return {
    plugins: ['macros'],
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
  };
};
