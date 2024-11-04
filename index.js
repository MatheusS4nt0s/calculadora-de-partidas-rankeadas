// Calculadora de partidas rankeadas

let heroi = "Mestre dos Magos"
let rank = ""

//Variaveis criadas para armazenar a quantidade de vitórias e derrotas do jogador
let victory = 35
let defeat = 8

// variavel criada para receber o resultado de vitorias - derrotas do jogador
let getGameResult = result(victory, defeat)


// função para calcular o rank
function result(getVictory = 0, getDefeat = 0){

    let gameResult = getVictory - getDefeat
    return gameResult
    
}


// condição de validação do rank do jogador
if (getGameResult < 11) {
    rank = "Ferro";
} else if (getGameResult >= 11 && getGameResult <= 20) {
    rank = "Bronze";
} else if (getGameResult > 20 && getGameResult <= 50) {
    rank = "Prata";
} else if (getGameResult > 50 && getGameResult <= 80) {
    rank = "Ouro";
} else if (getGameResult > 80 && getGameResult <= 90) {
    rank = "Diamante";
} else if (getGameResult > 90 && getGameResult <= 100) {
    rank = "Lendário";
} else if (getGameResult > 100 && getGameResult <= 10000) {
    rank = "Imortal";
}


// exibição do texto ao final
console.log("O Herói de nome " + heroi +" tem o saldo de "+ getGameResult + " Vitórias e está no nível de " + rank);