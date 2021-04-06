const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const components = require('./build/compontents.json')

const isDevelopment = true

module.exports = {
  publicPath: './',
  productionSourceMap: isDevelopment,
  pages: isDevelopment
    ? undefined
    : {
        examples: {
          entry: 'lib/main.ts'
        }
      },
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
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  },
  configureWebpack: config => {
    if (!isDevelopment) {
      config.entry = components
      config.output = {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
      }
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
      ],
      // 抽离公共文件
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]ts[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    // 自动启动浏览器
    open: true,
    proxy: {
      '': {
        target: 'https://mock.yonyoucloud.com/mock/5859/test', // 后端地址
        changeOrigin: true,
        ws: true
      }
    }
  }
}
