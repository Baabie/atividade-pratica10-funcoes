// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function parametro () {
    let numero = Number(prompt('Digite um número'));
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log('É um número primo');
            return true;
        } else {
            console.log('Não é um número primo');
            return false;
        }
    }

}

parametro()