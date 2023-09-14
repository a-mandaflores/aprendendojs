// Calculadora Simples:
// Crie uma calculadora que aceite dois números e uma operação (adição, subtração, multiplicação ou divisão) como entrada e retorne o resultado.
var nume1 = 10
var op = '*'
var nume2 = 5

switch(op){
    case '*':
        console.log(nume1 * nume2)
        break
    case '-':
        console.log(nume1 - nume2)
        break
    case '+':
        console.log(nume1 + nume2)
        break
    case '/':   
        console.log(nume1 / nume2)
        break
    default:
        console.log('Operação invalida')
    }