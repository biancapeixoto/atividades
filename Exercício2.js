//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.//

function testarFibonacci(numero) {
    if (numero == 0 || numero == 1) {
        return true;
    }
   
    let a = 0, b = 1, c;
    while (true) {
        c = a + b;
        a = b;
        b = c;
        if (c == numero) {
            return true;
        } else if (c >= numero) {
            return false;
        }
    }
}

let numero = 13;
if (testarFibonacci(numero)) {
    console.log(numero + " pertence a sequência de fibonacci");
} else {
    console.log(numero + " não pertence a sequência de fibonacci");
}

console.log(testarFibonacci(13));