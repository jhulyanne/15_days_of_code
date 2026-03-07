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

function longestWord(str){
    const words = str.split(' ');

}

function numOfLetters(str){
    return str.length
    // vai contar os espaços junto
}

function analyzeString(string) {
    numOfWords(string);
    longestWord(string);
    numOfLetters(string);
}

console.log(numOfLetters("aaaa aaaa aaaa aaaaa"));