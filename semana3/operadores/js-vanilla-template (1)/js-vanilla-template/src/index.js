// exercicio 1

// a é false
//  b é false
//  c é true
//  e é boolean

//exercicio 2

// a é undefined
// b é null
// c é 11
// d é 3
// e é 0: 1: 19 2: 5 3: 6 4: 7 5: 8 6: 9 7: 10 8: 11 9: 12 10: 13
// f é 9

let idadeUsuario = prompt("Qual sua idade usuario?")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo?")

let resultado = idadeUsuario > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

let resultado2 = idadeUsuario - idadeAmigo

console.log(resultado2)

let numeroPar = prompt("Digite um número par")


console.log(Number(numeroPar))

let divisaoNumeroPar = numeroPar % 2

console.log(divisaoNumeroPar)

// o resto da divisão  de um número par por 2 é sempre um numero 0
// caso o número seja impar o resultado é sempre 1

let listaDeTarefas = []

let tarefa1 = prompt("Qual a primeira tarefa precisa fazer hoje")
let tarefa2 = prompt("Qual a segunda tarefa precisa fazer hoje")
let tarefa3 = prompt("Qual a  terceira tarefa precisa fazer hoje")

listaDeTarefas.push(tarefa1)


listaDeTarefas.push(tarefa2)


listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indiceTarefa = prompt("Digite um indice de uma tarefa que realizou: 0, 1 ou 2 ?")
console.log(listaDeTarefas[indiceTarefa])

listaDeTarefas.splice(indiceTarefa, 1)
console.log(listaDeTarefas)

let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu e-mail")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem vindo(a) " + nomeDoUsuario + "!")