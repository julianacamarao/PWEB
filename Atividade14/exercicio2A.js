console.log('1');
t();
console.log('3');
function t() {
    setTimeout(function(){
        console.log('2');
    },10); //saporra bota um atraso de 10ms para que o console.log('3') seja executado antes da função;
}