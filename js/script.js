// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link)
{
    const url = location.href;
    
    if(url.includes(link.href))
    {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);
// fim ativar links do menu


// ativar itens do orçamento.
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro)
{
    const elemento = document.getElementById(parametro);
    if(elemento)
    {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);
// fim ativar itens do orçamento.

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function eventosPerguntas(pergunta)
{
    pergunta.addEventListener('click', ativarPergunta);
}

function ativarPergunta(event)
{
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    console.log(controls)

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");

    if(ativa)
    {
        pergunta.setAttribute('aria-expanded', ativa);
    }
    else
    {
        pergunta.setAttribute('aria-expanded', ativa);
    }
}

perguntas.forEach(eventosPerguntas);
// FIM Perguntas frequentes

//galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event)
{
    const img = event.currentTarget;
    const media = mmatchMedia('(min-width:1000px)').matches;
    if(media)
    {
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img)
{
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// animação - plugin andre rafael
if(window.SimpleAnime)
{
    new SimpleAnime();
}