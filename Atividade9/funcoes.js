function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function ordenarCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

function verificarPalindromo(palavra) {
  let texto = palavra.toUpperCase();
  let invertido = texto.split('').reverse().join('');
  if (texto === invertido) {
    return `A palavra "${palavra}" é um palíndromo.`;
  } else {
    return `A palavra "${palavra}" NÃO é um palíndromo.`;
  }
}

function tipoTriangulo(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Os valores informados não formam um triângulo.";
  } else if (a === b && b === c) {
    return "Triângulo Equilátero (todos os lados iguais).";
  } else if (a === b || a === c || b === c) {
    return "Triângulo Isósceles (dois lados iguais).";
  } else {
    return "Triângulo Escaleno (todos os lados diferentes).";
  }
}

// Testes no console
console.log("Maior número:", maiorNumero(10, 25, 15));
console.log("Ordem crescente:", ordenarCrescente(9, 2, 5));
console.log(verificarPalindromo("arara"));
console.log(verificarPalindromo("Juliana"));
console.log(tipoTriangulo(3, 3, 3));
console.log(tipoTriangulo(3, 4, 5));
