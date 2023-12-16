module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // Important: return the modified config

    // TODO: Remove logging. Testing purpose only.
    // console.log('Webpack Config:', config)

    return config;
  },
};
