/* eslint-disable no-constant-condition */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-sequences */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable radix */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
const _0x2fa82c = _0x18fc;
function _0x4c44() {
  const _0x477d7d = [
    '1ZfxePF',
    'clean-webpack-plugin',
    '1522728VunEOo',
    'style-loader',
    '497FZQPXR',
    'exports',
    'development',
    'babel-loader',
    './dist',
    '46660YAWUhd',
    './src/index.html',
    'path',
    '24416JjcdqF',
    'sass-loader',
    '2234507Jnbtjl',
    '30ayyfIX',
    'css-loader',
    '4qzHtjj',
    './src/js/index.js',
    'html-webpack-plugin',
    '.js',
    'resolve',
    '224698KxXOFO',
    '150KXtmOI',
    '15972MQvvmT',
    'bundle.js',
    '322578XCZdxr',
    'eslint-loader',
  ];
  _0x4c44 = function () {
    return _0x477d7d;
  };
  return _0x4c44();
}
function _0x18fc(_0x4b9f9c, _0x5b803e) {
  const _0x4c44f5 = _0x4c44();
  return _0x18fc = function (_0x18fc6f, _0x1b5343) {
    _0x18fc6f -= 0x135;
    const _0x4c6f53 = _0x4c44f5[_0x18fc6f];
    return _0x4c6f53;
  }, _0x18fc(_0x4b9f9c, _0x5b803e);
}
(function (_0xb04baa, _0x4b6c30) {
  const _0x5df756 = _0x18fc; const
    _0x243eda = _0xb04baa();
  while ([]) {
    try {
      const _0xbcea9b = -parseInt(_0x5df756(0x14a)) / 0x1 * (-parseInt(_0x5df756(0x144)) / 0x2) + -parseInt(_0x5df756(0x146)) / 0x3 * (-parseInt(_0x5df756(0x13f)) / 0x4) + parseInt(_0x5df756(0x137)) / 0x5 * (-parseInt(_0x5df756(0x145)) / 0x6) + -parseInt(_0x5df756(0x14e)) / 0x7 * (-parseInt(_0x5df756(0x13a)) / 0x8) + parseInt(_0x5df756(0x148)) / 0x9 * (parseInt(_0x5df756(0x13d)) / 0xa) + -parseInt(_0x5df756(0x13c)) / 0xb + parseInt(_0x5df756(0x14c)) / 0xc;
      if (_0xbcea9b === _0x4b6c30) { break; } else { _0x243eda.push(_0x243eda.shift()); }
    } catch (_0x4689e7) {
      _0x243eda.push(_0x243eda.shift());
    }
  }
}(_0x4c44, 0x204fc));
const path = require(_0x2fa82c(0x139)); const HtmlWebpackPlugin = require(_0x2fa82c(0x141)); const
  { CleanWebpackPlugin } = require(_0x2fa82c(0x14b));
module[_0x2fa82c(0x14f)] = {
  mode: _0x2fa82c(0x150),
  entry: path.resolve(__dirname, _0x2fa82c(0x140)),
  output: {
    path: path[_0x2fa82c(0x143)](__dirname, './dist'),
    filename: _0x2fa82c(0x147),
  },
  devServer: { static: path[_0x2fa82c(0x143)](__dirname, _0x2fa82c(0x136)) },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path[_0x2fa82c(0x143)](__dirname, _0x2fa82c(0x138)),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          _0x2fa82c(0x135),
          _0x2fa82c(0x149),
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          _0x2fa82c(0x14d),
          _0x2fa82c(0x13e),
          _0x2fa82c(0x13b),
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '*',
      _0x2fa82c(0x142),
    ],
  },
};
