
const escolha = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End? ")

let linguagens = ""

if(escolha == "Front-End"){
    linguagens = prompt("aprender React ou aprender Vue.")
}

else if(escolha == "Back-End"){
    linguagens = prompt("aprender C# ou aprender Java.")
}

else{
    alert("Entrada inválida!")
}

escolhaGeral = prompt("1 - seguir se especializando na área escolhida \n2 - seguir se desenvolvendo para se tornar Fullstack")

if(escolhaGeral == 1){
    alert(`Ótima escolha! É sempre bom se especializar em ${escolha} e na linguagem ${linguagens}.`)
} 

else if(escolhaGeral == 2){
    alert(`Se quer se tornar Full Stack além de saber ${linguagens} é preciso aprender novas linguagens`)
}

else{
    alert("Entrada inválida!")
}

let tecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender - Digite Sim caso exista? " )

while (tecnologias === "Sim"){
    let newTecnology = prompt("Deseja aprender qual tecnológias novas? ")
    alert(`${newTecnology} é uma ótima escolha!`)

    tecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender?" )
}