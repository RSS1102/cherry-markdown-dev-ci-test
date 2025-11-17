/* Minimal Babel config for build
 * Compatible with both CommonJS and ESM environments
 */

module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  env: { test: { presets: [['@babel/preset-env']] } },
  plugins: [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup'],
        plugins: [],
        css: false,
      },
    ],
  ],
};
