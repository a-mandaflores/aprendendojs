// Lista de Tarefas: Crie uma aplicação de lista de tarefas usando classes para representar 
// tarefas, categorias e uma lista de tarefas. Permita que os usuários adicionem, 
// removam e marquem tarefas como concluídas. Você também pode adicionar 
// recursos como filtragem por categoria ou data de vencimento.

const listaTarefas = {
    tarefa:[],
    addTarefaz:function(cat, tar, dat){        
        if(cat == 'Geral' || cat == 'Faculdade' || cat == 'Trabalho'){ 
        this.tarefa.push({categoria: cat, tarefa: tar, data: dat})
        }else{console.log('Categoria invalida')}
    },
    removerTarefa: function(tar){
        for(i of this.tarefa){
            if(i['tarefa'] == tar){
                this.tarefa.splice(i, 1)
            }
            
        }
    },
    listarCategoria: function(car){
        for(i of this.tarefa){
            if(i['categoria'] == car){
                console.log(i)
            }
            
        }
    }
}

//Categorias vão ser Geral, Faculdade, Trabalho
listaTarefas.addTarefaz('Geral', 'limpar', '10/10')
listaTarefas.addTarefaz('Faculdade', 'tarefa', '09/10')
listaTarefas.addTarefaz('Trabalho', 'organizar', '07/10')
listaTarefas.addTarefaz('Geral', 'fazer comida', '11/10')
listaTarefas.addTarefaz('Faculdade', 'prova', '12/10')
listaTarefas.addTarefaz('Geral', 'limpar Casa', '13/10')
console.log(listaTarefas.tarefa)

listaTarefas.removerTarefa('Geral', 'limpar')
console.log(listaTarefas.tarefa)

listaTarefas.listarCategoria('Geral')



