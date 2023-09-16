// Fatorial: Escreva uma função que calcule o fatorial de um número dado.

var fatorial = 5
var resultado = 0

for(let i = fatorial; i > 0; i--){
    let fatorialMenos = i - 1

    if(resultado = 0){
        let calculo = i * fatorialMenos
        resultado = calculo
        console.log(resultado)
    }
}

console.log(resultado)