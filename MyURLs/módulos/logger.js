//exportando módulos de eventos do node.js
// e gradando em variaveis/funções

//trabalha com evenetos
const EventEmitter = require('events')

//trabalha com arquivos do sistema
const fs = require('fs')

//pega o arquivo no local exato
const path = require('path')


const emitter = new EventEmitter()

//quando for emitido log executa-se a mensgem  
emitter.on('log',(mensagem)=>{
    fs.appendFile(path.join(__dirname , "./log.txt"), mensagem, err => {
        if (err) throw err
    })
})

//função que emite log, e recebe como argumento uma mensagem para ser exibida 
function log(mensagem){
    emitter.emit("log",mensagem)
}
// exportando a função log
module.exports= log