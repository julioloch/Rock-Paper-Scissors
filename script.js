let arrayJogadas = ['pedra', 'papel', 'tesoura'];
let computerSelection = '';
let playerSelection = '';
let vitorias = 0;
let derrotas = 0;
let empates = 0;

function perdeu(){
    console.log(`Voce perdeu! ` + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ` perde para ${computerSelection}!`)
    return derrotas++
}

function ganhou(){
    console.log("Voce ganhou! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ` ganha de ${computerSelection}!`)
    return vitorias++
}

function empatou(){
    console.log("Empatou! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ` empata com ${computerSelection}!`)
    return empates++
}

function computerPlay(){
    let computerChoose = arrayJogadas[Math.floor(Math.random()*arrayJogadas.length)]
    return computerChoose;
}

function playRound(playerSelection, computerSelection){

    if ((playerSelection === 'papel' && computerSelection === 'papel') || 
    (playerSelection === 'pedra' && computerSelection === 'pedra') ||
    (playerSelection === 'tesoura' && computerSelection === 'tesoura')){
        empatou()
    }
    else if ((playerSelection === 'papel' && computerSelection === 'pedra')||
    (playerSelection === 'pedra' && computerSelection === 'tesoura') ||
    (playerSelection === 'tesoura' && computerSelection === 'papel')){
        ganhou()
    }
    else{
        perdeu()
    }
}

function game(){
    for (let i=0;i<5;i++){
        computerSelection = computerPlay();
        playerSelection = prompt("Escolha entre pedra, papel ou tesoura", '').toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log("Vitorias: "+vitorias+" Derrotas: "+derrotas+" Empates: "+empates)
    }
}

game();

if(vitorias>derrotas){
    console.log("Parabens! Voce venceu!")
}
else if(derrotas>vitorias){
    console.log("Que pena, voce perdeu. :(")
}
else if(empates===vitorias){
    console.log("Empatou!")
}