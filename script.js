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
function geraPlayer1(string) {


   if (string.includes('pedra')) {
      console.log('pedra');
      return 'pedra';
   } else if (string.includes('papel')) {
      return 'papel';
   } else if (string.includes('tesoura')) {
      return 'tesoura';
   }
}



// TODO: Funcao playRound(player1, cpu)
// Escreva uma função que joga uma unica rodada de pedra, papel, tesoura.

function playRound(pontosJogador, pontosCPU,string) {
   let player1 = geraPlayer1(string).toLowerCase();
   let CPU = randomComputerHand();
   let resultado;

   if (player1 == "pedra") {
      if (CPU == "pedra") {
         return resultado = "Empate. Os dois jogaram pedra"
      } else if (CPU == "papel") {
         return resultado = "Voce perdeu. Papel ganha de pedra.";
      } else {
         return resultado = "Voce venceu. Pedra ganha de tesoura.";
         
      }
   } else if (player1 == "papel") {
      if (CPU == "pedra") {
         return resultado = "Voce venceu. Papel ganha de pedra.";
      } else if (CPU == "tesoura"){
         return resultado = "Voce perdeu. tesoura ganha de papel.";
      } else {
         return resultado = "Empate. Papel empata com papel."
      }
   } else if (player1 == "tesoura") {
      if (CPU == "pedra") {
         return resultado = "Você perdeu. Pedra ganha de tesoura."
      } else if (CPU == "papel") {
         return resultado = "Você venceu. Tesoura ganha de papel."
      } else {
         return resultado = "Empate. Tesoura empata com tesoura."
      }
   }

}




// TODO: Funcao game()

function game(player1) {
   let pointsPlayer1 = 0;
   let pointsCPU = 0;
   let resultado;

   
      resultado = playRound(pointsPlayer1, pointsCPU,player1);

      if (resultado.includes("venceu")) {
         pointsPlayer1 += 1;
      } else if (resultado.includes("perdeu")){
         pointsCPU += 1;
      } 

      console.log(resultado); // Exibe o resultado da rodada na tela.
   
      console.log(`Pontuação final: Jogador: ${pointsPlayer1} CPU: ${pointsCPU}`); // Exibe a pontuação final na tela.
      console.log((pointsPlayer1 > pointsCPU) ? "O player 1 ganhou." : (pointsPlayer1 == pointsCPU) ? "Houve um empate no jogo." : "O CPU ganhou"
      );
}

// game();

// ################################ create a const for each button ################# // 

const select = document.querySelector('.select__hands');
select.addEventListener('click', (e) => {
   let player1 = e.target.classList[1];
   game(player1);
});