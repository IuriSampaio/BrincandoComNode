//requerindo informaçãoes do sistema operacional 
//por meio de um módulo do node.js que permite essa possibilidade
const os = require('os')

//importando o arquivo logger.js
const log = require('./logger.js')

//colocando a função do tipo arrow function em 
//um itervalo para ela atualizar sozinha a cada segundo
setInterval(()=>{
    //importando de os as funçoes freemem() , totalmem() 
    //para verificação de memoria livre, e memortia total 
    const {freemem , totalmem} = os

    //transformando as unidades
    const total =parseInt(totalmem()/1024/1024)
    const livre =parseInt(freemem()/1024/1024)

    const usado = total -livre

    const porcento = parseInt(usado*100/total) 

    //criando um array que exibe a memoria livre, 
    //total, e oque esta sendo usado em porcetagem 
    const statusDeMemoria={
        livre: `${livre}MB`,
        total: `${total}MB`,
        usado: `${porcento}%`
    }
    
    //
    console.clear()
    console.log("====status de memoria====")
    console.table( statusDeMemoria )

    //chamando função exportada pela constante log 
    log(`${JSON.stringify(statusDeMemoria)}\n`)
},1000)
