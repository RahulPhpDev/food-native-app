module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["tailwindcss-react-native/babel", { platform: "native" }]],

    // plugins: ["nativewind/babel"],
  };
};
