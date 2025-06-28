module.exports = function (api) {
  api.cache(true);

  return {
    plugins: ['macros', 'react-native-reanimated/plugin'],
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
  };
};
