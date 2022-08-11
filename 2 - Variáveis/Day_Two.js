const nome = prompt("Qual o seu nome? ")
const idade = prompt("Quantos anos você tem? ")
const linguagem = prompt("Qual linguagem de programação você está estudando? ")

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

let resposta = prompt("Você gosta de estudar" + linguagem + "?\n1 - SIM. \n2 - NÃO.")

if(resposta == "1"){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}
if(resposta == "2"){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}