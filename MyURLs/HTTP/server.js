//modulos do servidor
const http = require('http')

const fs = require('fs')
const path = require('path')

http.createServer((req,res)=>{
    //req--> requisição / pedido
    //res--> resposta do servidor
    
    const file = req.url === '/' ?  'index.html' : req.url
    const filePath = path.join(__dirname,'front', file)
    const extName = path.extname(filePath)
    
    const permitidas =[ '.html','.css','.js']
    const permiteSe = permitidas.find(item=>item == extName)
    if (!permiteSe) return
    
    fs.readFile(
        filePath,
        (err, content)=>{
            if(err) throw err

            res.end(content)}
    )
    // //criaçao de caminhos a partir da url do servidor
    // if(req.url==='/')//esta na home
    //     fs.readFile(
    //         path.join(__dirname, 'index.html'),
    //         (err, content)=>{
    //             if(err) throw err
                
    //             res.end(content)
    //         }
    //     )
    // if(req.url==='/constatos')// esta na pagina conatos 
    //     return res.end('<h1>Constatos</h1>')

}).listen(5000, ()=>console.log('ta rodando poraaaaaaaa, na porta 5000'))