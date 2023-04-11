/*
Funcao randomComputerHand() : Caractere
Var
   randomNumber: Inteiro
Inicio
      
      randomNumber <- RandI(3)
// Transforme o número gerado em texto
   Se (randomNumber = 0) entao
      retorne "pedra"
   Senao
        Se (randomNumber = 1) entao
           retorne "papel"
        Senao
             Se (randomNumber = 2)entao
                retorne "tesoura"
             FimSe
        FimSe
   FimSe
FimFuncao
*/


function randomComputerHand() {
// função que gera um número aleatório de 0 a 2, sendo pedra [0],
      //papel [1], tesoura [2]
      let randomNumber = Math.floor(Math.random()*3) + 1;
      return randomNumber;

}
console.log(randomComputerHand());