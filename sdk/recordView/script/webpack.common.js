const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'index.js')
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'record.min.js',
        path: path.resolve(__dirname, 'dist')
    }
}
