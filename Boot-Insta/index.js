//IMPORTANDO BIBLIOTECA PARA MEXER NUMA PAGINA WEB
const pupeter = require('puppeteer')

// Ler a pagina do insta

const comecar = async( ) => {

    const carregaMais = async( pagina , seletor ) => {
        // PEGANDO O SELETOR EXISTENTE NA PAGINA
        const btnMais = await pagina.$(seletor)
        // SE O SELETOR EXISTIR
        if (btnMais){
            console.log("====MAIS====")
            // EXECUTANDO CLICK NO BOTÃO
            await btnMais.click()
            // ESPERNANDO 3 SEGUNDOS E VENDO  SE SERÁ CARREGADO, SE NÃO, DA UM TIMEOUT
            await pagina.waitFor( seletor , { timeout : 3000 } ).catch( () => { console.log("timeout") })
            // ENQUANTO HOUVER BOTÃO, ELE CARREGA MAIS
            await carregaMais(pagina,seletor)
        }
    }

    
    // pegar @acc
    const pegaComentario = async( pagina , seletor ) =>{
        // PARA TODO COMENTARIO ELE NA PAGINA ELE PEGA O LINK NA TAG A OU SEJA O @
        const comentatario = await pagina.$$eval( seletor , links=>links.map(link => link.innerText ) )
        return comentatario
    }

// ESPERA ROODAR O NAVEGADOR
    const navegador = await pupeter.launch()
// ESPERA A NOVA PAGINA DO NAVEGADOR
    const pagina = await navegador.newPage()
// FAZENDO CONEXÃO COM A PAGINA
    await pagina.goto('https://www.instagram.com/p/CChMVvQgYKK/')
// CARREGANDO A PAGINA A PARTIR DO CLICK DO BOTÃO
    await carregaMais(pagina,'.dCJp8')
// PEGAN O COMENTARIO NA TAG ESPECIFICADA
    const arrobas = await pegaComentario(pagina, '.C4VMK span a')
// CONTANDO AS REPETIÇÕES E ORDENANDO     
    const ordenado = ordenar(contadora(arrobas))
// MOSTRAR CADA ITEM DO ARRAY ORDENADO
    ordenado.forEach(arroba => { console.log(arroba) } )
// FECHANDO O NAVEGADOR
    await navegador.close()
}


comecar()


// Contar @acc repetido

const contadora = ( arroba ) => {
    const contador = {}
    // para cada arroba encontrado
    arroba.forEach(arr => {
        // adicionar no contador na posição equivalente ao indicie 
        // do elemento com o array trazido, assim adicionando o 
        // numero de vezes que ele apareceu, ou se não apareceu nenhuma
        // vez sera atribuido o valor de 0 ao numero de vezes que apareceu
        // e depois disso somado a 1 pois o menor valor possivel é 1
        contador[arr] = (contador[arr] || 0) + 1
    });
    // retorna um objeto com o arroba e quantas vezes apareceu
    return contador
}


// Ordenar

const ordenar = ( arrobaContado ) =>{ 
    // AS DUAS SEGUINTES MANEIRAS RESULTAM A MESMA COISA
//transformando o objeto recebido em um array de arrays com cada elemento do objeto
//__________________USANDO FOR_____________________________    
    // const entradas = []

    // for( propriedade in arrobaContado ){
        
    //     // retona o numero de vezes que o @ apareceu
    //     //console.log(arrobaContado[propriedade])
        
    //     // retona o @
    //     //console.log(propriedade)
        
    //     // TRANSFORMANDO O OBJETO EM UM ARRAY
    //     entradas.push( [ propriedade , arrobaContado[propriedade] ] )
    // }
//__________________ USANDO Object.entries()_______________
    const entradas = Object.entries(arrobaContado)

// ordenando o array entradas

// array.sort --> PEGA DOIS ELEMENTOS E COMPARA PARA VER QUAL VEM PRIMEIRO (MENOR PRO MAIOR) -- O INVERSO É SÓ TROCAR O B PELO A 
/////////EXEMPLO DO .sort( ( a , b ) => a-b || b-a )////////////////

// DO MENOR PRO MAIOR 
//console.log([5,3,5,6,78,3,1,2,34,56,7,6,3,1,2,3].sort( (a,b) => a-b )) 
// DO MAIOR PRO MENOR
//console.log([5,3,5,6,78,3,1,2,34,56,7,6,3,1,2,3].sort( (a,b) => { return b-a } )) 
    
// [1] --> SIGNIFICA QUE TA PEGANDO O PRIMEIRO ELEMENTO DE CADA ARRAY NO ARRAY ENTRADAS
    const ordenados = entradas.sort((a,b) => b[1] - a[1] ) // se usar chave ele trata como uma função, assim tem que colocar o return pra funcionar
    //devolvendo o array ordenado
//    console.log(ordenados)
//RETORNANDO OS 5 QUE FORAM MAIS MENCIONADOS
    return [ordenados[0],ordenados[1],ordenados[2],ordenados[3],ordenados[4]]
}

//ordenar(contadora(fake))

