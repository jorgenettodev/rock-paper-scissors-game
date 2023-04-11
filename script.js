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