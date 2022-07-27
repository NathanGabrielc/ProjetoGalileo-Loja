const titulo = document.querySelector('.product-title')
const imagem = document.querySelector('.img-main')
const descricao = document.querySelector('.product-detail p')
const produto1 = document.querySelector('.btn')
const produto2 = document.querySelector('.btn2')


async function buscaproduto(page){
    const response = await fetch(`https://62d0e2051cc14f8c088fc83d.mockapi.io/produto/${page}`)
    const data = await response.json()
    mostrarNoHtml(data)
}

function mostrarNoHtml(data){
    titulo.innerText = data.titulo
    imagem.setAttribute('src', data.imagem)
    descricao.innerText = data.descricao
}

produto1.addEventListener('click', function(){
    buscaproduto (32)
    console.log('clicou')
})
produto2.addEventListener('click', function(){
    buscaproduto(27)
    console.log('clicou')
   
})