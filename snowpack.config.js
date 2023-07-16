// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: "/",
    views: "/"
  },
  plugins: [
    "@snowpack/plugin-postcss"
  ],
  devOptions: {
    openUrl: "/signin.html"
  },
  optimize: {
    minify: true,
    bundle: true
  }
};
