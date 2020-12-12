//Exercícios de interpretação de código

//1
//Uma função que recebe um parâmentro, 
//dentro da função é declarada uma variável que pega o valor do prompt e transforma em número
//que retorna o parâmentro vezes o valor inserido no prompt.
//fora da função é declarada uma variável que recebe a função com o parâmetro 100
// no console imprimi a variável que guarda a função.
// caso eu coloque o número 5 no prompt o console imprimiria o resultado R$500

//2
//Uma função que recebe dois parâmetros
//dentro da função é declarada uma variável que vai guardar o valor apos o investimento
// E usado o método switch para cada caso de investimento e que multiplica o segundo parâmentro
// valor por um  valor fixo determinado no switch e guardado na variável valor apos investimento
//ao final retorna a variavel apos investimento
//fora da função é declarada duas variáveis que recebe a função, uma com os parâmentros 
// caso seja ação o valor será 150
// caso seja tesouro direto o valor será 200
// no final imprimi as duas variáveis com os resultados 165 e undefined porque tesouro direto não foi informado

//3 
// Foi declarado 3 arrays, um com os números e outros dois para guardar os números pares e impares
// Um loop que corre o array de números, caso os números sejam pares enviar para o array1
// caso os números sejam impares enviar para array2
// ao final 3 consoles um para imprimir a quantidade de números do array números que é 14
// e os outros dois para imprimir quantos números pares há no array1 que é 6
// e quantos números impares há no array2 que é 8

//4
//Um array populado com números positivos e negativos e duas variáveis foi criadas para armazenar 
//o maior e o menor valor do array de números
//um loop para correr o array e caso seja o menor número guarda na variável
// caso seja o maior número guarda na outra variável, por fim da console nas duas variáveis 
// para ver o menor e maior número do array, 1590 e -10 respectivamente



//Exercícios de Lógica de Programação
//1
// for, while, for of

const dias = [01, 05, 25, 33, 45]

for (let i = 0; i < dias.length; i++) {
    console.log(dias[i])
}

let index = 0
while (index < dias.length) {

    console.log(dias[index])
    index++
}

for (const index of dias) {
    console.log(index)
}


//2

//a)false
//b)false
//c)true
//d)true
//e) true 

//3
// Faltou definir o valor da variável quantidade de números pares e fazer o incremento no loop


const quantidadeDeNumerosPares = 3
let i = 0
while (i <= quantidadeDeNumerosPares) {
    i++
    console.log(i * 2)
}


//4
function trigonometria() {

    let a = Number(prompt("digite a:"));
    let b = Number(prompt("digite b:"));
    let c = Number(prompt("digite c:"));

    if (a === b && b === c) {
        console.log("Equilátero")

    } else if (a !== b && b !== c && c !== a) {
        console.log("Escaleno")

    } else {
        console.log("Isósceles")
    }
}

trigonometria()

//5


function MaiorValor(num1, num2) {

    let max = 0
    let min = 0;


    if (num1 > num2) {

        max = num1
        min = num2
    } else {
        max = num2
        min = num1

    }
    console.log(`O maior número é:${max}`)

    if (min % max === 0) {
        console.log(min.toString(), " é divisível por ", max.toString())
    } else {
        console.log(min.toString(), " não é divisível por ", max.toString())
    }

    if (min % max === 0) {
        console.log(max.toString(), " é divisível por ", min.toString())
    } else {
        console.log(max.toString(), " não é divisível por ", min.toString())
    }

    console.log("A diferença entre eles é ", max - min)
}

MaiorValor(50, 20)



//Exercícios de Funções
//1

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function doisMaioresNumeros() {

    let max = sampleArray[0]
    let min = sampleArray[0]
    let max2 = sampleArray[0]
    let min2 = sampleArray[0]


    for (let num of sampleArray) {


        if (num > max) {
            max = num
        }
        if (num < min) {
            min = num
        }


    }
    for (let num of sampleArray) {


        if ((num > max2) && (num < max)) {
            max2 = num;
        }

        if ((num < min2) && (num > min)) {
            min2 = num;
        }


    }
    console.log(`O segundo maior número é: ${max2}`)
    console.log(`O segundo menor número é: ${min2}`)

}
doisMaioresNumeros()

//2

const hello = function() {
    const msg = "Hello Labenu!";
    alert(msg)
}
hello()

//Exercícios de Objetos
//1
//Array é uma lista de números, strings e outros e é usado para guardar mais de uma informação
//Objetos é varias listas onde podemos guardar várias informações classificadas mais organizado.

//2
function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2,
    }
    console.log(`A Largura do retangulo é: ${retangulo.largura}`)
    console.log(`A Altura do retangulo é: ${retangulo.altura}`)
    console.log(`O perimetro do retangulo é: ${retangulo.perimetro}`)
    console.log(`A área do retangulo é: ${retangulo.area}`)

    return retangulo
}

criaRetangulo(20, 40)

//3
const filmeFavorito = {
    titulo: "O Regresso",
    ano: 2015,
    diretor: "Alejandro González Iñárritu",
    atores: ["Leonardo DiCaprio",
        "Tom Hardy", "Domhnall Gleeson"
    ]

}
console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[2]}. `)

//4
const dadosPessoais = {
    nome: "Viviane",
    idade: 35,
    email: " viviane@bol.com",
    endereco: "rua curitiba nº 351, Vale do Paraiba, Maringa, São Paulo"
}
console.log(dadosPessoais)

function anonimizarPessoa() {
    return {
        nome: "ANONIMO",
        idade: dadosPessoais.idade,
        email: dadosPessoais.email,
        endereco: dadosPessoais.endereco
    }
}
console.log(anonimizarPessoa(dadosPessoais))




//Exercícios de Funções de array
const dados = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

//1 a)
const maiores20 = dados.filter((dados) => {
    return dados.idade >= 20
})

console.log(maiores20)

//1 b)
const menores20 = dados.filter((dados) => {
    return dados.idade < 20
})

console.log(menores20)

//2

const array = [1, 2, 3, 4, 5, 6]

//a)

const multiplo2 = array.map((i) => {
    return i * 2
})

console.log(multiplo2)

//b)
const multiplo3 = array.map((i) => {
    const result = i * 2
    return result.toString()
})
console.log(multiplo3)

//c)

const parImpar = array.map((i) => {
    if (i % 2 === 0) {
        return i + " é par"
    } else {
        return i + " é impar"
    }

})

console.log(parImpar)

//3

const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]

const temPermissao = pessoas.filter((pessoas) => {

    if (pessoas.altura >= 1.5 && pessoas.idade >= 14 && pessoas.idade <= 60)
        return pessoas
})

console.log(temPermissao)

const naoTemPermissao = pessoas.filter((pessoas) => {

    if (pessoas.altura < 1.5 || pessoas.idade < 14 || pessoas.idade > 60)
        return pessoas
})

console.log(naoTemPermissao)

//4

const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emails = consultas.map((consulta) => {
    let emailFinal = "Olá, "

    if (consulta.cancelada) {
        if (consulta.genero === "feminino") {
            emailFinal += "Sra. "
        } else {
            emailFinal += "Sr. "
        }

        emailFinal += consulta.nome + ". "

        emailFinal += "Estamos enviando esta mensagem para "

        if (consulta.genero === "feminino") {
            emailFinal += "lembrá-la "
        } else {
            emailFinal += "lembrá-lo "
        }

        emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
        emailFinal += "Por favor, acuse o recebimento deste-email."
    } else {

        if (consulta.genero === "feminino") {
            emailFinal += "Sra. "
        } else {
            emailFinal += "Sr. "
        }

        emailFinal += consulta.nome + ". "

        emailFinal += "Infelizmente sua consulta marcada para o dia "

        emailFinal += consulta.dataDaConsulta + " foi cancelada. "
        emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
    }
    return emailFinal
})

console.log(emails)
    //5

const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((contas) => {

    let totalDeCompras = 0
    contas.compras.forEach((valor) => {
        totalDeCompras += valor
    })

    contas.saldoTotal -= totalDeCompras
})

console.log(contas)