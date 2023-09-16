// Sistema Bancário: Crie um sistema bancário para representar contas bancárias, clientes e transações. 
// Implemente funcionalidades como depósitos, saques, transferências e geração de extratos bancários.

const banco = {
    nome: '',
    saldo: 0,
    extrato: [],
    depositar: function(deposito){
        let novoSaldo = this.saldo+deposito
        this.saldo = novoSaldo
        this.extrato.push(`Novo valor depositado: ${deposito} reais`)
    },
    sacar: function(saque){
        let novoSaque = this.saldo - saque
        this.saldo = novoSaque
        this.extrato.push(`Novo valor sacado ${saque} reais`)
    },
    addCliente: function(nome,saldo){
        this.nome = nome
        this.saldo = saldo
    },
    informacoes: function(){
        console.log(this.nome)
        console.log(this.saldo)
        console.log(this.extrato)
    }
} 

var cliente = banco.addCliente('Amanda de Souza', 1000)
banco.depositar(100)
banco.sacar(20)
banco.depositar(200)
banco.informacoes()

