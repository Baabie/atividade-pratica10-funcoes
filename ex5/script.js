// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

function somaDivisoresProprios(numeroDigitado) {
    let soma = 0;
  for (let i = 1; i < numeroDigitado; i++) {
    if (numeroDigitado % i === 0) {
      soma += i;
    }
  }
  return soma;
}

function verificaNumeroPerfeito(numero){
    return somaDivisoresProprios(numero) === numero;
}

let numeroDigitado = Number(prompt('Digite um numero inteiro'));
console.log(verificaNumeroPerfeito(numeroDigitado));

// function encontraNumerosPerfeitos(quantidade) {
//   const numerosPerfeitos = [];
//   let numeroAtual = 1;

//   while (numerosPerfeitos.length < quantidade) {
//     const soma = somaDivisoresProprios(numeroAtual);
//     if (soma === numeroAtual) {
//       numerosPerfeitos.push(numeroAtual);
//     }
//     numeroAtual++;
//   }
//   return numerosPerfeitos;
// }

// const numerosPerfeitos = encontraNumerosPerfeitos(4);
// console.log(numerosPerfeitos);
