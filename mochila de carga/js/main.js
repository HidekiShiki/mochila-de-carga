const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements["nome"]
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)
    
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome    

    const botaoRemover = document.createElement("div")
    botaoRemover.classList.add("deletar")
    botaoRemover.innerHTML = "🗑"
    botaoRemover.value = lista.childNodes.length
    botaoRemover.addEventListener("click", removerElemento)
    novoItem.appendChild(botaoRemover)

    lista.appendChild(novoItem)
}

function removerElemento(evento) {
    const ul = document.getElementById("lista")
    const child = ul.childNodes[evento.target.value]
    ul.removeChild(child)
}