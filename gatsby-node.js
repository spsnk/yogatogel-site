const path = require("path")
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
          src: path.resolve(__dirname, "src"),
          "~components": path.resolve(__dirname, "src/components"),
          "~data": path.resolve(__dirname, "src/data"),
          "~images": path.resolve(__dirname, "src/images"),
          "~utils": path.resolve(__dirname, "src/utils"),
        },
      },
    })
  } else {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          src: path.resolve(__dirname, "src"),
          "~components": path.resolve(__dirname, "src/components"),
          "~data": path.resolve(__dirname, "src/data"),
          "~images": path.resolve(__dirname, "src/images"),
          "~utils": path.resolve(__dirname, "src/utils"),
        },
      },
    })
  }
}
