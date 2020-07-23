const http = require('http')
const data = require('./urls.json')
const URL= require('url')
const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')

const emitter = new EventEmitter()

// const fazJson = writeFile(fazJson)?  emitter.on(fazJson, ({name,url})=>{
//     fs.appendFile(path.join(__dirname,"./urls.json"))
// }):console.log("deu ruin")

function writeFile(cb){
    fs.writeFile(
        path.join(__dirname, "./urls.json"),
        JSON.stringify(data,null,2),
        err=>{
            if(err) throw err

           // cb (JSON.stringify({message: "ok"}))
        }
    )
}


http.createServer((req,res)=>{
   const {name,url,del}=URL.parse(req.url, true).query

    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    })

    if( !name || !url ){
        return res.end(JSON.stringify(data))
    } if(del){
        data.urls= data.urls.filter(i=>String(i.url) !== String(url))        
        return writeFile((mensage)=>res.end(mensage))
    }
     
    data.urls.push({name,url})

    return writeFile((mensage)=>res.end(mensage))

}).listen(3000, ()=>console.log('ta rodando a API poraaaaaaaa, na porta 3000'))