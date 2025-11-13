const fs = require('fs'); //carregando módulo filesystem (tecnicamente um import)
const data = fs.readFileSync('file.txt'); //tá lendo o arquivo e colocando no data de maneira síncrona.

//////////////////////////////////////////////////////
//a execução é bloqueada aqui até o arquivo ser lido//
//////////////////////////////////////////////////////

console.log(data.toString()); //passa o arquivo para texto
