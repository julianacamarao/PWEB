function parseNumeroBR(valor) {
  const limpinho = String(valor).trim().replace(",", ".");
  const num = parseFloat(limpinho);
  return Number.isFinite(num) ? num : NaN;
}

function calcularIMC(alturaEmMetros, pesoEmKg) {
  return pesoEmKg / (alturaEmMetros * alturaEmMetros);
}

function classificarIMC(imc) {
  if (imc < 18.5)               return { classificacao: "Magreza",         grau: "0"   };
  if (imc <= 24.9)              return { classificacao: "Normal",           grau: "0"   };
  if (imc <= 29.9)              return { classificacao: "Sobrepeso",        grau: "I"   };
  if (imc <= 39.9)              return { classificacao: "Obesidade",        grau: "II"  };
                               return { classificacao: "Obesidade Grave",  grau: "III" };
}

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-calcular");
  btn.addEventListener("click", aoCalcular);
});

function aoCalcular() {
  const elAltura = document.getElementById("altura");
  const elPeso   = document.getElementById("peso");
  const saida    = document.getElementById("resultado");

  const altura = parseNumeroBR(elAltura.value);
  const peso   = parseNumeroBR(elPeso.value);

  if (!Number.isFinite(altura) || !Number.isFinite(peso) || altura <= 0 || peso <= 0) {
    saida.textContent = "Por favor, informe altura e peso válidos (ex.: 1,65 e 60,5).";
    return;
  }

  const imc  = calcularIMC(altura, peso);
  const info = classificarIMC(imc);

  saida.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> — ` +
                    `<strong>${info.classificacao}</strong> (Grau ${info.grau}).`;
}

