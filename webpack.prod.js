/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable no-func-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable func-names */
/* eslint-disable radix */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
const _0x45ba9c = _0x2794;
(function (_0x2a553a, _0x4d7382) {
  const _0x5c29c1 = _0x2794; const
    _0xa13093 = _0x2a553a();
  while ([]) {
    try {
      const _0x533cf4 = parseInt(_0x5c29c1(0xd1)) / 0x1 * (-parseInt(_0x5c29c1(0xe1)) / 0x2) + -parseInt(_0x5c29c1(0xe4)) / 0x3 * (-parseInt(_0x5c29c1(0xd9)) / 0x4) + -parseInt(_0x5c29c1(0xd2)) / 0x5 + parseInt(_0x5c29c1(0xe5)) / 0x6 + parseInt(_0x5c29c1(0xd3)) / 0x7 + -parseInt(_0x5c29c1(0xe2)) / 0x8 + -parseInt(_0x5c29c1(0xd0)) / 0x9 * (parseInt(_0x5c29c1(0xd6)) / 0xa);
      if (_0x533cf4 === _0x4d7382) { break; } else { _0xa13093.push(_0xa13093.shift()); }
    } catch (_0x42eb1c) {
      _0xa13093.push(_0xa13093.shift());
    }
  }
}(_0x3ecd, 0x5e46d));
const path = require(_0x45ba9c(0xdf)); const HtmlWebpackPlugin = require(_0x45ba9c(0xdc)); const
  { CleanWebpackPlugin } = require(_0x45ba9c(0xde));
module.exports = {
  mode: _0x45ba9c(0xd7),
  entry: path[_0x45ba9c(0xdb)](__dirname, _0x45ba9c(0xdd)),
  output: {
    path: path[_0x45ba9c(0xdb)](__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: { static: path[_0x45ba9c(0xdb)](__dirname, _0x45ba9c(0xd5)) },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path[_0x45ba9c(0xdb)](__dirname, _0x45ba9c(0xd8)),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          _0x45ba9c(0xe3),
          'eslint-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          _0x45ba9c(0xe0),
          _0x45ba9c(0xda),
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '*',
      _0x45ba9c(0xd4),
    ],
  },
};
function _0x2794(_0x173a55, _0x5dc52d) {
  const _0x3ecd2f = _0x3ecd();
  return _0x2794 = function (_0x279418, _0xe0d021) {
    _0x279418 -= 0xd0;
    const _0x5e6c69 = _0x3ecd2f[_0x279418];
    return _0x5e6c69;
  }, _0x2794(_0x173a55, _0x5dc52d);
}
function _0x3ecd() {
  const _0x48650c = [
    '41260OTqksa',
    'production',
    './src/index.html',
    '172jBvPwK',
    'sass-loader',
    'resolve',
    'html-webpack-plugin',
    './src/index.js',
    'clean-webpack-plugin',
    'path',
    'css-loader',
    '375868NuPejA',
    '2660288SkzEdc',
    'babel-loader',
    '28293tAnYlv',
    '2523984dtAVON',
    '369XdokdN',
    '2TiOvpi',
    '811825RfjNdM',
    '4199265CqePLc',
    '.js',
    './dist',
  ];
  _0x3ecd = function () {
    return _0x48650c;
  };
  return _0x3ecd();
}
