const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractThemeA = new MiniCssExtractPlugin({
  filename: "./[name].css",
  allChunks: true,
});

module.exports = {
  entry: { myName: "./src/app.js" },
  output: {
    path: utils.resolve("/dist"),
  },
  plugins: [
    ExtractThemeA,
    // more plugins for other css files
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // Note: No changes to splitChunks
        vendor: {
          // custom commons chunk for js
        },
      },
    },
    module: {
      rules: [
        {
          test: /theme-a\.scss$/,
          use: ExtractThemeA.extract(["css-loader", "sass-loader"]),
        },
        // more module rules for each css file needed
      ],
    },
  },
};
