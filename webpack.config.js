const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/',
    libraryTarget: 'var',
    library: 'ROLO'
  },
  resolve: ['.js', '.hbs'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      // {
      //   test: /\.scss$/,
      //   loaders: [
      //     "style",
      //     "css?sourcemaps",
      //     "postcss?sourcemaps",
      //     "sass?sourcemaps"
      //   ]
      // }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 4000,
    host: '0.0.0.0',
    progress: true
  },
};
