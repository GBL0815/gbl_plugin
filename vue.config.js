const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const components = require('./build/compontents.json')

const isDevelopment = process.env.NODE_ENV === 'development'
const isLib = false

module.exports = {
  publicPath: './',
  productionSourceMap: isDevelopment,
  pages: isLib
    ? {
        index: {
          entry: 'publish/main.ts',
          filename: 'index.html'
        }
      }
    : undefined,
  chainWebpack: config => {
    // 修改路径
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('~', path.resolve('packages'))
    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
    // 增加package文件夹
    config.module
      .rule('js')
      .include
      .add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
  },
  configureWebpack: config => {
    // lib环境
    if (isLib) {
      config.entry = components
    }
    config.optimization = {
      // 代码压缩
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          },
          parallel: true
        })
      ]
    }
  },
  devServer: {
    disableHostCheck: true,
    // 自动启动浏览器
    open: true
    // https: true
  }
}
