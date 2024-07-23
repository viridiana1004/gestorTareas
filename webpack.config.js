const path = require('path');

module.exports = {
    entry: './src/index.js', // punto de entrada de tu aplicacion
    output: {
        filename: 'bundle.js', // nombre del archivo de salida
        path: path.resolve(__dirname,'dist'), // carpeta de salida 
    }, 
    module:{
        rules: [
            {
                test: /\.css$/, //para identificar archivos css
                use:['style-loader', 'css-loader'], // loaders para procesar archivos
            },
            {
                test:/\.js$/, // regex para identificar archivos JS 
                exclude: /node_modules/, //excluir la carpeta node:modules
                use: {
                    loader: 'babel-loader', // loader para transpilar JS moderno a JS compatible con mas navegadores
                    options: {
                        presents: ['@babel/preset-env'], // preset de babel para convertir JS moderno a versiones mas antiguas
                    }
                }
            }
        ]
    },
    devtool: 'source-map', // generar source maps para facilitar la depuracion 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //carpeta desde donde obtenemos los archivos que mostramos al usuario
        compress: true, // habilitando la compresion gzip
        port: 9000, // puerto del servidor del desarrollo
    }
}