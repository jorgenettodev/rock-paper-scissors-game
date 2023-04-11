function randomComputerHand() {
// função que gera um número aleatório de 0 a 2, sendo pedra [1],
      //papel [2], tesoura [3]
      let cpuHand;
      let randomNumber = Math.floor(Math.random()*3) + 1; // Math.floor arrendonda pra baixo
      if (randomNumber == 1) {
         cpuHand = "pedra";
      } else if (randomNumber == 2) {
         cpuHand = "papel";
      } else {
         cpuHand = "tesoura"
      }
      return cpuHand;
}

// TODO: Funcao geraPlayer1()
function geraPlayer1() {
   let player1;
   player1 = prompt("Escolha uma opção: pedra, papel, tesoura");
   return player1;
}



// TODO: Funcao playRound(player1, cpu)
// Escreva uma função que joga uma unica rodada de pedra, papel, tesoura.

function playRound(pontosJogador, pontosCPU) {
   let player1 = geraPlayer1().toLowerCase();
   let CPU = randomComputerHand();
   let resultado;

   if (player1 == "pedra") {
      if (CPU == "pedra") {
         resultado = "Empate. Os dois jogaram pedra"
      } else if (CPU == "papel") {
         return resultado = "Voce perdeu. Papel ganha de pedra.";
      } else {
         return resultado = "Voce venceu. Pedra ganha de tesoura.";
         
      }
   } else if (player1 == "papel") {
      if (CPU == "pedra") {
         return resultado = "Voce venceu. Papel ganha de pedra.";
      }
   } else {

   }
}



// TODO: Funcao game()

function game() {
   let pointsPlayer1 = 0;
   let pointsCPU = 0;
   let resultado;
   resultado = playRound(pointsPlayer1, pointsCPU);

      if (resultado.includes("venceu")) {
         pointsPlayer += 1;
      } else {
         pointsCPU += 1;
      }
      console.log(`Pontuação final: Jogador: ${pointsPlayer1} CPU: ${pointsCPU}`);
}

game();

