// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

function calcularTempo () {
    let tempoSegundos = parseFloat(prompt('Digite o tempo de duração em segundos'));
   
    let tempoHoras = Math.floor(tempoSegundos / 3600);
    let tempoMinutos = Math.floor((tempoSegundos % 3600) / 60);
    let segundosRestantes = (tempoSegundos % 60);

    console.log(`Horas ${tempoHoras}: Minutos ${tempoMinutos}: Segundos ${segundosRestantes}`);
}

calcularTempo()