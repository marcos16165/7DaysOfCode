
let frutas = []
let laticinios = []
let congelados = []
let doces = []
let comida = ""
let tipo = ""

let msg = "sim"
while(msg != "não"){
    msg = prompt("Deseja adicionar uma comida na sua lista de compras(sim/não)?")
    while(msg != "sim" && msg != "não"){
        alert("Entrada inválida")
        msg = prompt("Deseja adicionar uma comida na sua lista de compras(sim/não)?")
    }

    if(msg === "não"){
        break;
    }
    
    comida = prompt("Qual comida você deseja inserir?");
    tipo = prompt("Em qual categoria essa comida se encaixa?\n1 - Frutas.\n2 - Laticínios.\n3 - Congelados.\n4 - Doces.")
    if(tipo == "1"){
        frutas.push(comida)
    }

    else if(tipo == "2"){
        laticinios.push(comida)
    }

    else if(tipo == "3"){
        congelados.push(comida)
    }

    else if(tipo == "4"){
        doces.push(comida)
    }
    
    else{
        alert("Entrada inválida!")
    }
}

alert(`Lista de compras:\nFrutas: ${frutas} \nLaticinios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`)