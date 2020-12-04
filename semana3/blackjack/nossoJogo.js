/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta();
const usuario = comprarCarta()
const usuario2 = comprarCarta()
const computador = comprarCarta()
const computador2 = comprarCarta()
let pontuacaoComputador = comprarCarta()
let pontuacaoUsuario = comprarCarta()

let result1 = (usuario.valor) + (usuario2.valor)
let result2 = (computador.valor) + (computador2.valor)


console.log("Bem vindo ao jogo de Blackjack!")



if (confirm("Quer iniciar uma nova rodada?")) {
    console.log("Usuario - cartas: " + usuario.texto + " " + usuario2.texto + " - pontuação " + result1)
    console.log("Computador - cartas: " + computador.texto + " " + computador2.texto + " - pontuação " + result2)

} else {
    console.log("O jogo acabou!")
}


if (pontuacaoUsuario.valor < pontuacaoComputador.valor) {
    console.log("O usuário ganhou!")
} else if (pontuacaoUsuario.valor > pontuacaoComputador.valor) {
    console.log("O computador ganhou!")

} else if (pontuacaoUsuario.valor === pontuacaoComputador.valor) {

    console.log("Empate!")
}