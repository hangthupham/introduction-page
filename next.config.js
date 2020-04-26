const withLess = require('@zeit/next-less');
const path = require('path');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  ...withCss({
    ...withImages({
      inlineImageLimit: 16384,
      ...withSass({
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[path][name]__[local]--[hash:base64:8]',
          context: path.resolve(__dirname, 'src'),
          hashPrefix: 'athenka-studio__',
          localsConvention: 'camelCase',
          esModule: false,
        },
        sassLoaderOptions: {},
        ...withLess({
          lessLoaderOptions: {
            javascriptEnabled: true,
          },
          webpack: (config, { isServer }) => {
            if (!isServer) {
              config.node = {
                fs: 'empty',
              };
            }

            if (isServer) {
              const antStyles = /antd\/.*?\/style.*?/;
              const origExternals = [...config.externals];
              // eslint-disable-next-line no-param-reassign
              config.externals = [
                // eslint-disable-next-line consistent-return
                (context, request, callback) => {
                  if (request.match(antStyles)) return callback();
                  if (typeof origExternals[0] === 'function') {
                    origExternals[0](context, request, callback);
                  } else {
                    callback();
                  }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
              ];

              config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
              });
            }
            config.resolve.modules.push(path.resolve('./src'));
            config.resolve.alias['~'] = path.resolve(__dirname, './src');
            return config;
          },
        }),
      }),
    }),
  }),
};
