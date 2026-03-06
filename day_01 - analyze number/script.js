/*
Escreva um programa que recebe um número inteiro e mostra:
- se é par ou ímpar
- se é positivo ou negativo
- quantos dígitos ele possui
*/

function oddOrEven (num) {
    if(num % 2 == 0) {
        return `${num} é par`
    } else if (num % 2 == 1){
        return `${num} é ímpar`
    } else {
        return `${num} não é um número, tente novamente`
    }
}

function posOrNeg(num) {
    if (num >= 0) {
        return `${num} é positivo`
    } else if (num < 0) {
        return `${num} é negativo`
    } else {
        return `${num} não é um número, tente novamente`
    }
}

function countChar(num) {
    const characters = num.toString().length
    return `${num} tem ${characters} caracteres`
}

function analyzeNumber(number){
    const parity = oddOrEven(number);
    const status = posOrNeg(number);
    const length = countChar(number);

    return `${parity} | ${status} | ${length}`
}

console.log(analyzeNumber(162))