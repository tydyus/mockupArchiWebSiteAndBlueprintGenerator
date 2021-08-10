const path = require('path');

module.exports = {
    mode: 'development',
    entry: './ts/blueprintGenerator.ts', //dossier source
    output: {
        filename: 'blueprintGen.js', //nom du fichier sortant
        path: path.resolve(__dirname, 'js'), //chemin de sortit du fichier
        publicPath: 'js' //Si webpack gére le serveur, permet de lui dire qu'il a la compilation en memoire
    },
    devServer: {
        contentBase: path.resolve(__dirname, '')
     },
    devtool: 'inline-source-map', //source-map, aide de debug
    module: {
        rules:[
            {
                test: /\.ts$/, //regarde les fichiers finissant par .ts
                use: 'ts-loader', //les gérent avec ts-loader
                exclude: /node_modules/ //ignore le fichier node_modules
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js'] //cherche les fichier js et ts pour les compacter
    }
};