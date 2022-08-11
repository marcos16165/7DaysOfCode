//Funçao que gera um número inteiro
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
//Gerando um número intero entre 1 e 10
let certo = getRandomInt(1, 10)

for(n = 0; n<3; n++){
    let msg = prompt("Chute um número entre 1 e 10: ")
    //No momento em que acertar o programa para a execução.
    if(msg == certo){
        alert("Parabéns você acertou!")
        break
    }
    //Exibindo essa mensagem até a segunda tentativa.
    else if(msg != certo && n<2)
        alert("Você errou, tente novamente")
    //Caso erre as três tentativas, uma mensagem final será exibida.
    else{
        alert(`Você não conseguiu acertar, o valor correto era ${certo}`)
    }
}