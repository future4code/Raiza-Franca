// 1- O valor de b mudará para 5
// 2- a,b e c valerão 10 respectivamente.

//exercicio 1

let nome = ""

let idade =

    console.log(typeof nome)

console.log(typeof idade)

// string porque contém aspas para receber um nome e undefined por que não há um valor em idade

nome = prompt("Qual seu nome")

console.log(nome)

idade = prompt("Qual sua idade")

console.log(idade)

console.log(typeof nome)

console.log(typeof idade)

//string porque as porguntas estão entre aspas

let mensagem = ("Olá " + nome + ", você tem " + idade + " anos")

console.log(mensagem)

//exercicio 2

let endereco = prompt("1. Qual o seu endereço?")
console.log("Resposta: " + endereco)

let cor = prompt("2. Qual a sua cor favorita?")
console.log("Resposta: " + cor)

let banda = prompt("3. Qual a sua banda favorita?")
console.log("Resposta: " + banda)

let livro = prompt("3. Qual seu livro favorita?")
console.log("Resposta: " + livro)

let filme = prompt("3. Qual seu filme favorita?")
console.log("Resposta: " + filme)

//exercicio 3
let arr = ["arroz", "banana", "feijão", "ovo", "carne"]

console.log(arr)

console.log("Essas são as minhas comidas preferidas: ")
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

let comida = prompt("3. Qual sua comida favorita?")
console.log("Resposta: " + comida)

arr[1] = comida;
console.log(arr)

//exercicio 4

let perguntas = ["Você está usando uma roupa azul hoje? ", "Você bebeu água hoje? ", "Você está estudando hoje? "]
let respostas = [true, true, true]

console.log(perguntas[0] + [respostas[0]])
console.log(perguntas[1] + [respostas[1]])
console.log(perguntas[2] + [respostas[2]])