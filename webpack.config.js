const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isDev = options.mode == 'development';
    const isProd = options.mode == 'production';

    return {
        context: path.resolve(__dirname, 'src'),
        devtool: 'source-map',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
            clean: true,
            publicPath: '/',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            port: 3000,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName:
                                        '[name]__[local]_[hash:base64:5]',
                                    auto: /\.module\.\w+$/i,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                minify: {
                    collapseWhitespace: isProd,
                },
            }),
        ],
    };
};
