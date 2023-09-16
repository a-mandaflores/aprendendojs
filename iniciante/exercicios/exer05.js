// Cronômetro: Crie um cronômetro simples usando funções para iniciar, pausar e reiniciar.
const { clear } = require('console');
const keypress = require('keypress');
const process = require('process');

keypress(process.stdin);

process.stdin.setRawMode(true);
process.stdin.resume();


var segundos = 0
function cronometro(tempo){

  const contagemSegundos = setInterval(()=>{
    process.stdin.on('keypress',(_, key)=>{
      if(key.name === 'p'){
        clearTimeout(contagemTempo)
        clearInterval(contagemSegundos)
      }      
      console.clear()
      console.log('A contagem esta em ', segundos,'segundos.\nAperte I para reiniciar ou S para sair')      
    })

    console.clear()
    segundos++
    console.log('Tempo: ', segundos, 'segundos')
  },1000)

  var contagemTempo = setTimeout(()=>{
    clearInterval(contagemSegundos)
    console.log('Clique em S para sair do programa ou I para reiniciar')
  },tempo)
}


console.log('O cronometro tem contagem de 5 segundos.\nPrecione I para iniciar')
process.stdin.on('keypress', (_,key)=>{
    if(key.name === 'i' || key.name === 'I'){
      cronometro(6000)
      console.clear()

    }

    if(key.name === 's' || key.name === 'S'){
      console.clear()
      console.log('Cronometro encerrado')
      process.exit()
    }

})


