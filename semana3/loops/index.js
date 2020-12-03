//Exercicio 1

// O código inicia definindo uma váriavel valor que inicia em 0 
// um loop for que incia em 0 e enquanto a váriavel valor for menor que 5 ele incrementa i
//ele guarda o acrescimo no valor e soma mais o valor do indice
// por fim ele imprime o valor 10

//Exercicio 2
//Será impresso os números maiores que 18
//sim, com o for... of eu consigo acessar os indices do array
// eu usario o operador de comparação

//Desafio 1
// imprimiria 4 linhas de 0 crescentes


//Exercicio 3

const arrayOrigin = [59, 57, 30, 28, 70, 46, 112]


for (let i = 0; i < arrayOrigin.length; i++) {

    console.log(arrayOrigin[i])
}

for (let i = 0; i < arrayOrigin.length; i++) {

    let result = arrayOrigin[i] / 10

    console.log(result)
}

for (let i = 0; i < arrayOrigin.length; i++) {

    if (arrayOrigin[i] % 2 === 0) {

        console.log(arrayOrigin[i])
    }
}

for (let i = 0; i < arrayOrigin.length; i++) {

    console.log("O elemento do índex " + i + " é: " + arrayOrigin[i])
}





let valorMaximo = arrayOrigin[0]
let valorMinimo = arrayOrigin[0]

for (let i = 0; i < arrayOrigin.length; i++) {

    if (arrayOrigin[i] > valorMaximo) {

        valorMaximo = arrayOrigin[i]
    }
    if (arrayOrigin[i] < valorMinimo) {

        valorMinimo = arrayOrigin[i]
    }

}



console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo + ".")

//Desafio 2

let numero1 = Number(prompt("Jogador 1 - Escolha um número"))

console.log("Vamos jogar!")


let numero2 = Number(prompt("Jogador 2 - Advinhe o número"))

console.log("O número chutado foi " + numero2)


let tentativas = []

for (let i = 0; i < numero2.value; i++) {


    if (numero1 > numero2) {

        console.log("Errou. O número escolhido é maior")

        tentativas = true
    }

    if (numero1 < numero2) {

        console.log("Errou. O número escolhido é menor")

        tentativas = true

    } else {

        console.log("Acertou")

        tentativas = false
    }
}
jogadas = []



console.log("O número de tentativas foi : " + jogadas)