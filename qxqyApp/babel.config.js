module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src/',
        rootPathPrefix: '@/',
      },
    ],
    [
      'import',
      {
        libraryName: '@ant-design/react-native',
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ]
  ],
};
