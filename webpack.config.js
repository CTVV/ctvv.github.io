const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    module: {
        rules: [
            { 
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'] }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}