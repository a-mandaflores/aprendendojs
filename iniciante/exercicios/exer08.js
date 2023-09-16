// Encontre o Maior Valor: Escreva uma função que encontre o maior valor em um array de números.

var arr = [1, 4, 8, 10]

var maiorValor = 0

arr.map((i)=>{

    if(i > maiorValor){
        maiorValor = i
    }
})

console.log(maiorValor)