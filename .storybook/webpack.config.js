const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.extensions.push('.ts', '.vue', '.css', '.scss');

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader', 
      'css-loader',
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../../')
  });

  config.stats = 'errors-only'

  return config;
};
