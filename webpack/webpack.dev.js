const { HotModuleReplacementPlugin } = require("webpack");
const { merge }                      = require("webpack-merge");
const common                         = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = 
{
    mode      : "development",
    target    : "web",
    // devtool   : "eval-source-map",
    devtool : "source-map",

    devServer : 
    {
        port        : 3000,
        contentBase : "../dist",
        open        : "chrome",
        hot         : false,
    },
};

module.exports = merge(common, devConfig);