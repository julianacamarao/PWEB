const prompt = require('prompt-sync')(); //saporra é o import dessa merda de callback


function saudacao(nome){ //declaração de função com um log e parâmetro nome
    console.log('Oii, ' + nome);
}

function entradaNome(callback) { //esse callback é tecnicamente o ponteiro pra uma outra função, nada mais que isso.
    let nome = prompt('Digite seu nome:');
    callback(nome); //chamando a função callback (saudação)
}

entradaNome(saudacao); //uma função callback nada mais é do que uma função que é chamada dentro de outras funções