//Exercicio 1
// Qual o teste que ele realiza? 
// O teste verifica o número for par passou no teste se for impar não passou no teste

// Para que tipos de números ele imprime no console "Passou no teste"? 
// par

// Para que tipos de números a mensagem é "Não passou no teste"? 
// impar


// Exercicio 2
//a. Para que serve o código acima?
//Para quando o usuario escolher uma fruta imprimir seu preço

//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta Macã  é  R$  2.25

//c. Considere que um usuário queira comprar uma `Pêra`, 
//qual seria a mensagem impressa no console se retirássemos o `break` 
//que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// Ele  leria o default como o preço da Pêra
// O preço da fruta  Pêra  é  R$  5

//Exercicio 3

//a. O que a primeira linha está fazendo?
//Declara uma variavel e transforma o resultado de string para número

//b. Considere um usuário digitou o número 10. 
//Qual será a mensagem do terminal?

//Esse número passou no teste

// E se fosse o número -10?

//Daria erro

//c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// A variavel mensagem não é lida, porque ela foi declarada dentro do escopo e ela não é lida fora dele


// Exercicio 4

let idade = Number(prompt("Qual a sua idade"))

if (idade > 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

//Exercicio 5

let saudacao = prompt("Digite M (Matutino) ou V (Vespertino) ou N (Noturno).")

if (saudacao === "M") {
    console.log("Bom Dia!")
}
if (saudacao === "V") {
    console.log("Boa Tarde!")
}
if (saudacao === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Digite um valor válido")
}

let saudacao2 = prompt("Digite M (Matutino) ou V (Vespertino) ou N (Noturno).")

switch (saudacao2) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "v":
        console.log("Boa Tarde!")
        break;
    case "M":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Digite um valor válido")

}

//Exercicio 7

let filme = prompt("qual o gênero de filme que vão assistir?")
let precoIngresso = Number(prompt("Qual preço do ingresso ?"))

if (filme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}