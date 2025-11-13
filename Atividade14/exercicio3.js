let soma = 0;
for (let i=2; i<=process.argv.length-1;i++){
    soma=soma+Number(process.argv[i]);
}
console.log("soma="+soma);

//terminal node exercicio3.js 1 2 3 ->são os parâmetros de entrada