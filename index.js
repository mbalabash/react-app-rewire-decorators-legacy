const { injectBabelPlugin } = require("react-app-rewired");

function rewireDecorators(config, env) {
  const pluginName = "transform-decorators-legacy";
  config = injectBabelPlugin([pluginName, {}], config);
  return config;
}

module.exports = rewireDecorators;
