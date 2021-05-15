const CracoAlias = require('craco-alias');

console.log('test');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};
