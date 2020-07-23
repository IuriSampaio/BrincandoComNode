const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector('form')


async function load(){
    const api =await fetch("http://localhost:3000/").then((data)=>data.json())
    api.urls.map(({name,url})=> addElement({name,url}))
} 
load()
function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)

    
}

function removeElement(el) {
    if (confirm(`Tem certeza que deseja deletar ${el.parentNode.parentNode.textContext}?`))
        el.parentNode.remove()
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo')

    const [name, url] = value.split(",")

    if (!url) 
        return alert('formate o texto da maneira correta')

    if (!/http/.test(url)){
        const urlAux= url.trim()
        const urlN=`http://${urlAux}`
        input.value = ""
        return alert(`digite: ${urlN} como URL`)
    }else{
        addElement({ name , url })
    }
        
    input.value = ""
})