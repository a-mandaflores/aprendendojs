// Validação de Senha: Escreva uma função que valide senhas com base em critérios como comprimento mínimo, letras maiúsculas, números, etc.

function validandoSenha(senha){
    let maiuscula = false
    let numeros = false  
    let tamanho = false

    if(senha != ''){
        tamanho = senha.length >= 8 ? true : false;
        for(let i of senha){
            if(!isNaN(i)){
                numeros = true
                break
            }             
        }
        var padrao = /[A-Z]+/
        maiuscula = senha.match(padrao) !== null ? true : false     
    }

    let testando = tamanho && numeros && maiuscula == true ? console.log(senha,' A senha esta validada'): 
    console.log(senha, ' Esta incorreta');
}

validandoSenha('segredo')
validandoSenha('segredo12')
validandoSenha('Asegredo')
validandoSenha('Asegredo123')