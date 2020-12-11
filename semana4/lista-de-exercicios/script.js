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
// no final imprimi as duas variáveis com os resultados 165 e alert "Tipo de investimento informado incorreto"

//3 
// Foi declarado 3 arrays, um com os números e outros dois para guardar os números pares e impares
// Um loop que corre o array de números, caso os números sejam pares enviar para o array1
// caso os números sejam impares enviar para array2
// ao final 3 consoles um para imprimir a quantidade de números do array números 
// e os outros dois para imprimir quantos números pares há no array1
// e quantos números impares há no array2

//4
//Um array populado com números positivos e negativos e duas variáveis foi criadas para armazenar 
//o maior e o menor valor do array de números
//um loop para correr o array e caso seja o menor número guarda na variável
// caso seja o maior número guarda na outra variável, por fim da console nas duas variáveis 
// para ver o menor e maior número do array.



//Exercícios de Lógica de Programação
//1
// for, while, for of

//O while a seguir executará enquanto n for menor que três:

//n = 0;
//x = 0;
//while (n < 3) {
//  n++;
//  x += n;
//}

//2

//a)false
//b)false
//c)true
//d)true
//e) false 

//3
// Faltou definir o valor da variável quantidade de números pares e fazer o incremento no loop


const quantidadeDeNumerosPares = 3
let i = 0
while (i <= quantidadeDeNumerosPares) {
    i++
    console.log(i * 2)
}

/*
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
*/
//5
/*const sampleArray = [30, 15];

function MaiorValor() {

    let max = sampleArray[0];
    let min = sampleArray[0];

    let resultado = max - min

    for (let i = 1; i < sampleArray.length; i++) {



        if (sampleArray[i] > max) {

            max = sampleArray[i]
        }
        if (sampleArray[i] < min) {

            min = sampleArray[i]
        }
        console.log(`O maior número é:${max}`)

        if (max % min > 0) {

            console.log(`${max} é divisivel por ${min}`)
        }
        if (min % max < 0) {

            console.log(`${min} não é divisivel por ${max}`)
        }



    }

    console.log(`A diferença entre eles é:${resultado} `)
}


MaiorValor()*/



//Exercícios de Funções
//1

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function doisMaioresNumeros() {

    let max = sampleArray[0];
    let max2 = sampleArray[0]


    for (let i = 0; i < sampleArray.length; i++) {


        if (sampleArray[i] > max) {
            max = sampleArray[i]
        }


    }
    for (let i = 0; i < sampleArray.length; i++) {


        if ((sampleArray[i] > max) && (sampleArray[i] != max)) {
            max2 = sampleArray[i];
        }


    }
    console.log(max)
    console.log(max2)

}
doisMaioresNumeros()

//2

const hello = function() {
    const msg = "Hello Labenu!";
    alert(msg)
}
hello()