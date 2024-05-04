// Retorne no console todas as imagens do site
const imgAll = document.querySelectorAll('img');
console.log(imgAll);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const filterImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(filterImagem);

// Selecione todos os links internos (onde o href começa com #)
const linkCSS = document.querySelectorAll('[href^="#"]');
console.log(linkCSS);

// Selecione o primeiro h2 dentro de .animais-descricao

const selectclass = document.querySelector('.animais-descricao')
const primeiroh2 = selectclass.querySelector('h2');
console.log(primeiroh2);

// Selecione o último p do site

const todosP = document.querySelectorAll('p');
const ultimoP=todosP.length;
console.log(todosP[ultimoP-1]);