var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/',
    libraryTarget: 'var',
    library: 'ROLO'
  },
  resolve: ['.js', '.scss', '.hbs'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  },
};