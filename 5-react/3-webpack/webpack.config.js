const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development", // 실서비스: production
  devtool: "eval", // 실서비스: hidden-source-map
  entry: "./src",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist'
  },
  resolve: {
    extensions: [".js", ".jsx"], // entry에 들어갈 모듈의 확장자를 직접 적을 필요없이 resolve에서 해결
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR"], // browserslist: https://github.com/browserslist/browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  devServer: {
    compress: true,
    hot: true, // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
    port: 9000, // 접속 포트 설정
  },
};
