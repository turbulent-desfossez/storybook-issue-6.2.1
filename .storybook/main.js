module.exports = {
  stories: [
    './src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs',
    '@storybook/addon-postcss',
    'storybook-addon-themes',
  ],
};
