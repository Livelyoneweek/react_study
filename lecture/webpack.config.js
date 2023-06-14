const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports ={
    name: 'wordrelay-setting',
    mode: 'development', //실서비스에선 production
    devtool: 'eval', //개발 모드 옵션
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'] //확장자도 필요없음 css json 등등, 위에 resolve에 확장자 확인
    }, //입력

    // entry로 가져와서 module 적용하고 output으로 뺀다!
    module: {
        rules: [{
            test: /\.jsx?/,
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
                plugins: [
                    'react-refresh/babel',
                ],
            },
            exclude: path.join(__dirname, 'node_modules'),
        }],
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'), //경로를 합쳐줌 __dirname는 현재 경로를 의미 -> 현재경로안에 dist 폴더를 의미
        filename: '[name].js',
        publicPath: '/dist',
    }, //출력
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
}