const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge }            = require("webpack-merge");
const common               = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const prodConfig = 
{
    mode    : "production",
    // devtool : "source-map",
    plugins: 
    [
        new MiniCssExtractPlugin(
        {
            filename      : "static/css/[name].[contenthash].css",
            chunkFilename : "[id].[contenthash].css",
        })
    ],
    module  : 
    {
        rules: 
        [
            {
                test: /\.(css|scss|sass)$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
};

module.exports = merge(common, prodConfig);