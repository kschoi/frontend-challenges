const getCssLoaders = (config) => {
  const loaderFilter = (rule) =>
    rule.loader && rule.loader.includes("css-loader");

  let loaders = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf)
  ).oneOf;

  loaders = loaders.reduce((ldrs, rule) => ldrs.concat(rule.use || []), []);

  return loaders.filter(loaderFilter);
};

/**
 * Overrides a create-react-app configuration for the given sources.
 *
 * @param src Source path of the create-react-app project.
 */
module.exports = (config, env) => {
  // Fix url('/images/....') being processed by css-loader 4 =/
  for (const loader of getCssLoaders(config)) {
    loader.options.url = (url) => url.startsWith(".");
  }

  return config;
};
