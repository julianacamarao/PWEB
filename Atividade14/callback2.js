function exibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback(); // tá executando apenas aqui
}

//////////////
//executando//
//////////////

exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem\n', function() {
    console.log('Essa é a segunda mensagem exibida na ordem'); //essa porra só tá sendo declarada, mas não executada
});