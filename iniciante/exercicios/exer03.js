// Validação de E-mail:
// Escreva uma função que valide se uma string é um endereço de e-mail válido.

var email = 'nanda@gmail.com'
var condicao = false

for(const letra of email){
        if(letra === '@' ){
        condicao = true
        break
    }
}

const verificando = condicao === true ? 'Email valido': 'Email invalido'
console.log(verificando)