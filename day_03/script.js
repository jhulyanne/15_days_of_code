/*
Entrada: uma string
Saída: 
- número de palavras
- palavra mais longa
- número de letras totais
*/

function numOfWords(str) {
    const words = str.split(' ');
    return words.length;
}

function longestWord(str) {
    const words = str.split(' ').filter(word => word.length > 0);
    if (words.length === 0) return '';
    return words.reduce((maior, atual) =>
        atual.length > maior.length ? atual : maior
    );
}

function numOfLetters(str) {
    return str.replace(/\s/g, '').length;
}

function analyzeString(string) {
    const words = numOfWords(string);
    const longest = longestWord(string);
    const letters = numOfLetters(string);

    return `    A frase tem ${words} palavras
    A palavra mais longa é "${longest}"
    A frase tem ${letters} letras.`
}

console.log(analyzeString("Frase de exemplo para a função"));