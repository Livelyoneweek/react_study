const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval', //개발일 때는 eval, production hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry : {
        app: './client',
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers:['> 5% in KR'], //깃허브 browserslist에서 옵션 참고
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'],
                plugins: [],
            }
        }],
    },

    //module에 options 안에 debug true 다 넣어주는 플러그인, 예시로 넣어봄
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true}),
    ],

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'), //경로를 합쳐줌 __dirname는 현재 경로를 의미 -> 현재경로안에 dist 폴더를 의미
    },
};