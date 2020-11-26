const path = require("path"); 

module.exports= { 
    entry: "./script.js", 
    output: { filename: "script.js", 
              path: path.resolve(__dirname, "dist"), 
    }, 
    devServer: { 
        contentBase: "./dist", 
    },
};