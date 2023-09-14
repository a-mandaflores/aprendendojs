// Verificação de Palíndromo:
// Escreva uma função que verifique se uma palavra ou frase é um palíndromo (ou seja, se ela pode ser lida da mesma forma de trás para frente).

var palavra = 'ovo'
var dividir = palavra.split('')
var girar = dividir.reverse()
var juntar = girar.join('')

if(palavra == juntar){
    console.log('É um palindromo')
}else{
    console.log('Não é um palindromo')
}