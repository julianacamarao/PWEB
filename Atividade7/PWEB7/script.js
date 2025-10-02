const botaoJogar = document.getElementById('botaoJogar');

botaoJogar.addEventListener('click', jogar);

function jogar() {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura?");

  if (escolhaUsuario === null) {
    alert("Jogo cancelado.");
    return;
  }

  escolhaUsuario = escolhaUsuario.toLowerCase();
  if (!opcoes.includes(escolhaUsuario)) {
    alert("Escolha inválida! Por favor, digite pedra, papel ou tesoura.");
    return;
  }

  const indiceComputador = Math.floor(Math.random() * 3);
  const escolhaComputador = opcoes[indiceComputador];

  let mensagemResultado = `Você escolheu: ${escolhaUsuario}\nO computador escolheu: ${escolhaComputador}\n\n`;

  if (escolhaUsuario === escolhaComputador) {
    mensagemResultado += "O resultado é um EMPATE!";
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra")
  ) {
    mensagemResultado += "Parabéns, VOCÊ VENCEU!";
  } else {
    mensagemResultado += "Que pena, o COMPUTADOR VENCEU!";
  }

  alert(mensagemResultado);
}