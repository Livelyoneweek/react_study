const path = require('path');

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
                presets: ['@babel/preset-env', '@babel/preset-react'],
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'), //경로를 합쳐줌 __dirname는 현재 경로를 의미 -> 현재경로안에 dist 폴더를 의미
        filename: 'app.js'
    }, //출력

}