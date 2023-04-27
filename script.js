function randomComputerHand() {
// Atualiza o DOM: sessão resultados. Altera o icone do CPU na rodada atual.
let computer = document.querySelector('#cpu');


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
      computer.className = `card cpu ${cpuHand}`;
      return cpuHand;
}

// TODO: Funcao geraPlayer1()
function geraPlayer1(string) {
   

   if (string.includes('pedra')) {
      return 'pedra';
   } else if (string.includes('papel')) {
      return 'papel';
   } else if (string.includes('tesoura')) {
      return 'tesoura';
   }
}



// Escreva uma função que joga uma unica rodada de pedra, papel, tesoura.

function playRound(pontosJogador, pontosCPU,string) {
   let player1 = geraPlayer1(string).toLowerCase();


   // Atualiza o DOM: sessão resultados. Altera o icone do player na rodada atual.
   let playerHand = document.querySelector('#player');
   playerHand.className = `card player ${player1}`;


   let computerHandColor = document.querySelector('#cpu');
   

   let CPU = randomComputerHand();
   let resultado;

   if (player1 == "pedra") {
      if (CPU == "pedra") {
         resultado = "Empate. Os dois jogaram pedra"
      } else if (CPU == "papel") {
         resultado = "Voce perdeu. Papel ganha de pedra.";
      } else {
         resultado = "Voce venceu. Pedra ganha de tesoura.";
         
      }
   } else if (player1 == "papel") {
      if (CPU == "pedra") {
         resultado = "Voce venceu. Papel ganha de pedra.";
      } else if (CPU == "tesoura"){
         resultado = "Voce perdeu. tesoura ganha de papel.";
      } else {
         resultado = "Empate. Papel empata com papel."
      }
   } else if (player1 == "tesoura") {
      if (CPU == "pedra") {
         resultado = "Você perdeu. Pedra ganha de tesoura."
      } else if (CPU == "papel") {
         resultado = "Você venceu. Tesoura ganha de papel."
      } else {
         resultado = "Empate. Tesoura empata com tesoura."
      }
   }

   // Change the player's and cpu's hand color according to match result.
   if(resultado.includes("venceu")) {
      playerHand.className = `card player ${player1} bg-green`;
      computerHandColor.className = `card player ${CPU} bg-red`;
   } else if (resultado.includes("perdeu")) {
      playerHand.className = `card player ${player1} bg-red`;
      computerHandColor.className = `card player ${CPU} bg-green`;
   } else {
      playerHand.className = `card player ${player1} bg-golden`;
      computerHandColor.className = `card player ${CPU} bg-golden`;
   }
   return resultado;
}



// Iniciar o jogo com os dois com os pontos zerados. Variáveis globais podem dar problema.
let pointsPlayer1 = 0;
let pointsCPU = 0;

function game(player1) {
   let scorePlayerNode = document.querySelector('#score__player');
   let scoreCpuNode = document.querySelector('#score__cpu');

   let resultado;


   
      resultado = playRound(pointsPlayer1, pointsCPU,player1);

      if (resultado.includes("venceu")) {
         pointsPlayer1 += 1;
         scorePlayerNode.textContent = pointsPlayer1;

      } else if (resultado.includes("perdeu")){
         pointsCPU += 1;
         scoreCpuNode.textContent = pointsCPU;
      } 

      const scoreText = document.querySelector('#roundResult');

      scoreText.textContent = resultado;
      console.log(resultado); // Exibe o resultado da rodada na tela.
      
      
      // TODO: Exibe o resultado final de cada player no score board ao final de 5 rodadas.
      console.log(`Pontuação final: Jogador: ${pointsPlayer1} CPU: ${pointsCPU}`); // Exibe a pontuação final na tela.

      if (pointsPlayer1 == 5 || pointsCPU == 5) {
         
         scoreText.textContent = (pointsPlayer1 > pointsCPU) ? "O player 1 ganhou." : (pointsPlayer1 == pointsCPU) ? "Houve um empate no jogo." : "GAME OVER: O CPU ganhou.";
         scoreText.textContent += ` Placar final: Player: ${pointsPlayer1} X CPU: ${pointsCPU}.`;

         scoreText.innerText += '  Escolha uma mão para começar uma nova rodada.'

         // Reseta pontuação
         pointsPlayer1 = 0;
         pointsCPU = 0;
         scorePlayerNode.textContent = pointsPlayer1;
         scoreCpuNode.textContent = pointsCPU;
      };
}

// game();

// ################################ create a const for each button ################# // 

const select = document.querySelector('.select__hands');
select.addEventListener('click', (e) => {
   let player1 = e.target.classList[1];
   game(player1);
});
