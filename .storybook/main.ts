import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // 절대 경로 인식
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src'),
        '~components': path.resolve(__dirname, '../src/components'),
        '~assets': path.resolve(__dirname, '../src/assets'),
        '~styles': path.resolve(__dirname, '../src/lib/styles'),
        '~utils': path.resolve(__dirname, '../src/lib/utils'),
      };
    }
    // svg 파일 인식
    const moduleRules = config.module?.rules;
    if (moduleRules) {
      const imageRule = moduleRules.find((rule) =>
        rule?.['test']?.test('.svg'),
      );

      if (imageRule) {
        imageRule['exclude'] = /\.svg$/;
      }

      moduleRules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
};

export default config;
