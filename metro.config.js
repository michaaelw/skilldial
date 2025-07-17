// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// To fix issue importing tslib from moti

const ALIASES = {
  tslib: path.resolve(__dirname, "node_modules/tslib/tslib.es6.js"),
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Ensure you call the default resolver.
  return context.resolveRequest(
    context,
    // Use an alias if one exists.
    ALIASES[moduleName] ?? moduleName,
    platform
  );
};

module.exports = withNativeWind(config, { input: "./global.css" });
