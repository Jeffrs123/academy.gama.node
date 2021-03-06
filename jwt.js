const jwt = require('jsonwebtoken');

let [,, comando, chave, parametro] = process.argv;


if (comando === 'sign') {
    console("cli", comando, chave, parametro);
    parametro = JSON.parse(parametro);
};

const resultado = jwt[comando](parametro, chave);

// node jwt.js sign chavesecreta '{'sub':'rs.mensur@gmail.com'}'

console.log(resultado);