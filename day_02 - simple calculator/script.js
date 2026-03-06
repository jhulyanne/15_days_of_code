/*
Crie uma calculadora que receba:
- numero operador numero
Exemplo: 4 * 8
- E retorna o resultado.
*/

function calculator(num1, op, num2) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 == 0) throw new Error("Divisão por zero")
            return num1 / num2
    }
}

console.log(calculator(10, "/", 0))