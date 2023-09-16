// Cálculo de Juros: Crie uma função que calcule o montante final de um investimento com base no capital inicial, taxa de juros e período.

function investimento(capitalInicial, taxaJuros, periodoMeses){
    let calculoJuros = taxaJuros * periodoMeses
    calculoJuros = calculoJuros / 100
    let calculo = (calculoJuros * capitalInicial) + capitalInicial
    return calculo
}

let montanteFinal = investimento(10000, 0.5, 12)
console.log('Valor do retorno do investimento é: ', montanteFinal)

