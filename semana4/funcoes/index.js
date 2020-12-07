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

function meusDados() {
    console.log("Eu sou Raíza, tenho 30 anos, moro em Minas Gerais e sou estudante.")
}
meusDados()

function meusDados2(nome, idade, cidade, ocupacao) {
    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + ocupacao + ".")
}

meusDados2("Raiza", "30", "Minas Gerais", "estudante")

//Exercicio 5

function somaNum(num1, num2) {

    return num1 + num2
}
console.log(somaNum(2, 2))

function comparaNumeros(num1, num2) {
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}
console.log(comparaNumeros(5, 3))


function repeteString(frase) {
    for (let i = 0; i < 10; i++) {
        console.log("Seja Bem Vindo!")
    }
    return frase
}
repeteString()

//Exercicio 6

const meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function contaIndices(meuArray) {

    return meuArray
}

console.log(contaIndices(meuArray.length))

function ePar(meuArray) {
    if (meuArray % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(ePar(meuArray[5]))