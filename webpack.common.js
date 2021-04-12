const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: {
      app: path.resolve('./src', 'index.tsx')
    }, 
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'src', 'index.html')
        }) 
    ],
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve('./tsconfig.json'),
                            allowTsInNodeModules: true
                          }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'hiring.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, './tsconfig.json')
            })
        ],
        symlinks: false,
        cacheWithContext: false
    }
}