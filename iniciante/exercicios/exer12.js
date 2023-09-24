// Editor de Texto Simples: Desenvolva um editor de texto simples em JavaScript para representar documentos, parágrafos e formatações de texto. 
// Permita que os usuários criem, editem e formateiem documentos de texto.

class EditorTexto{
    constructor(){
        this.texto = []
    }

    addTexto(newTexto){
        this.texto.push(newTexto)
    }

    exibirTexto(){
        return this.texto
    }
    
    excluirTexto(){
        this.texto.pop()
    }

    editarTexto(i, x){
        var novo = this.texto[1].replace(i, x)
        this.texto.splice(1, 1, novo)
        
    }
}

const texto = new EditorTexto()
texto.addTexto('Amanda é bonita e amigavel')
texto.addTexto('Amanda é bonita e chata')
texto.addTexto('Amanda é feia e amigavel')
console.log(texto.exibirTexto())
texto.excluirTexto()
console.log(texto.exibirTexto())
texto.editarTexto('Amanda', 'Julia')
console.log(texto.exibirTexto())