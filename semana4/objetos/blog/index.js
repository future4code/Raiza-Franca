function infoBlog() {
    const titulo = document.getElementById('titulo-post').value
    const autor = document.getElementById('autor-post').value
    const conteudo = document.getElementById('conteudo-post').value
    const section = document.getElementById('container-de-posts')
    const imagem = document.getElementById('img-post').value


    const BLogValue = {
        titulo: titulo,
        autor: autor,
        conteudo: conteudo,
        imagem: imagem,

    }


    const infoInArray = []
    infoInArray.push(BLogValue.titulo)
    infoInArray.push(BLogValue.autor)
    infoInArray.push(BLogValue.conteudo)
    infoInArray.push(BLogValue.imagem)




    section.innerHTML += `<p>${BLogValue.titulo}</p>`
    section.innerHTML += `<p>${BLogValue.autor}</p>`
    section.innerHTML += `<p>${BLogValue.conteudo}</p>`
    section.innerHTML += `<img src=${BLogValue.imagem}>`

    BLogValue.value = ''

}

infoBlog()