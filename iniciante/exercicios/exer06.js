// Contagem de Vogais: Crie uma função que conte o número de vogais em uma string.

var vogais = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U']
var palavra = 'Amor'
var contador = 0


vogais.filter((vogal)=>{
    for(let i of palavra){
        if(i === vogal){
            contador++
        }
    }    
})
    
console.log(contador)