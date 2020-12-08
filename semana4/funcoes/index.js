// Exercicio 1

// A multiplicação do parametro e 5, 10 e 50 respectivamente.
// Se retirasse os consoles não apareceria nada.

//Exercicio 2

//A impressão dos dois primeiros indices

// Seria impresso os dois indices do array

//Exercicio 3

// O código declara uma função que declara uma variavel contendo um array vazio, 
//corre o array atravez do loop for e se quando os numeros forem par adiciona o numero vezes ele mesmo.

//Um nome melhor para o código seria multiplicaNumPares

//Exercicio 4

const nome = "Raíza"
const idade = 30
const cidade = "Minas Gerais"
const souEstudante = "sou"

function meusDados() {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${souEstudante} estudante.`)
}
meusDados()

function meusDados2(nome, idade, cidade, souEstudante) {

    if (souEstudante) {
        souEstudante = "sou"

    } else {
        souEstudante = "não sou"
    }
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${souEstudante} estudante.`
}

console.log(meusDados2("Raiza", "30", "Minas Gerais", "sou"))

//Exercicio 5

//A

function somaNum(num1, num2) {

    return num1 + num2
}
console.log('A soma dos números é igual a: ', somaNum(2, 2))

//B
function comparaNumeros(num1, num2) {
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}
console.log('O primeiro númerio é maior ? ', comparaNumeros(5, 3))

//C
function repeteString(frase) {
    for (let i = 0; i < 10; i++) {
        console.log("Seja Bem Vindo!")
    }
    return frase
}
repeteString()

//Exercicio 6

const meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//A
function contaIndices(meuArray) {

    return meuArray
}

console.log('A quantidade de números no array é: ', contaIndices(meuArray.length))

//B
function numPar(meuArray) {
    return meuArray % 2 === 0
}
console.log('O Número é par ? ', numPar(meuArray[5]))


//C

function NumbersPares(meuArray) {
    let numerosPares = []
    for (const numero of meuArray) {
        if (numero % 2 === 0) {
            numerosPares.push(numero)
        }
    }
    return numerosPares.length
}
console.log('A quantidade de números pares é ', NumbersPares(meuArray))

//D

function NumbersPares2(meuArray) {
    let numerosPares = []
    for (const numero of meuArray) {
        if (numPar(numero)) {
            numerosPares.push(numero)
        }
    }
    return numerosPares.length
}
console.log('A quantidade de números pares é ', NumbersPares2(meuArray))

//Desafios

//Exercicio 1

//1-

let parametro = (param) => {
    console.log('O parâmetro da função é: ', param)
}

parametro(30)
    // 2-

let resultado = (val1, val2) => {
    const soma = val1 + val2
    parametro(soma)
}
resultado(3, 4)

//Exercicio 2
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//A

function multiplicaNumPares(numeros) {
    const newArray = []
    for (const numero of numeros) {
        if (numero % 2 === 0)
            newArray.push(numero * 2)
    }
    return newArray

}

console.log('Numeros pares multiplicados por 2 :', multiplicaNumPares(numeros))

//B

function maiorNum(numeros) {
    let maiorNumero = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]

        }
    }
    return maiorNumero
}
console.log('O  maior número é: ', maiorNum(numeros))

//C

function indicethebig(numeros) {
    let indice;
    let maiorNumero = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNUmero = numeros[i]
            indice = i
        }

    }
    return {
        maiorNumero,
        indice
    }


}
console.log(indicethebig(numeros))

//D 

function inverteArray(numeros) {
    let arrayInvertido = []
    for (let i = numeros.length - 1; i >= 0; i--) {
        arrayInvertido.push(numeros[i])
    }
    return arrayInvertido
}
console.log('Array Invertido: ', inverteArray(numeros))