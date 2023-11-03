const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Other Webpack configuration options...

  module: {
    rules: [
      // Other rules...

      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },

  // Other Webpack configuration options...

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/UserProfile.html", // Your HTML template file
      filename: "UserProfile.html", // Output HTML filename
    }),
    // Other plugins...
  ],
};
