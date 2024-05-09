// Retorne no console todas as imagens do site
// const imgAll = document.querySelectorAll('img');
// console.log(imgAll);

// Retorne no console apenas as imagens que começaram com a palavra imagem
// const filterImagem = document.querySelectorAll('img[src^="img/imagem"]')
// console.log(filterImagem);

// Selecione todos os links internos (onde o href começa com #)
// const linkCSS = document.querySelectorAll('[href^="#"]');
// console.log(linkCSS);

// Selecione o primeiro h2 dentro de .animais-descricao

// const selectclass = document.querySelector('.animais-descricao')
// const primeiroh2 = selectclass.querySelector('h2');
// console.log(primeiroh2);

// Selecione o último p do site

// const todosP = document.querySelectorAll('p');

// console.log(todosP[todosP.length-1])

// outra forma

// console.log(todosP[--todosP.length])

// forEach e Arrow function


// foreach(função,index,array) 
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(valorAtual, index, array){
//   console.log(valorAtual); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
// });

// foreach e arrays

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//   console.log(item);
// });

// estrututa de foreach com arrow fuction ao invés do nome fuction () só colocar => primeiro o parâmetro depois o => não precisa dde {} se tiver só uma linha de código, n pode colocar ; nesse de uma linha
// const imgsf = document.querySelectorAll('img');

// imgsf.forEach((item) => {
//   console.log(item);
// });


// exercícios
// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
// const paragrafos = document.querySelectorAll('p');

// paragrafos.forEach((item)=>{
//   console.log(item.innerText)
// });
// e

// //Como corrigir os erros abaixo:
// const imgsexercio = document.querySelectorAll('img');

// imgsexercio.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// correçâo:

// const imgsexercio = document.querySelectorAll('img');

// imgsexercio.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgsexercio.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);
// console.log(i);

// classes e atributos

// const menu = document.querySelector('.menu');

// menu.classList.add('ativo','teste')// add classes
// menu.classList.remove('teste')//remove uma classe
// menu.classList.toggle('azul')// se a classe azul remove, se n tiver add

// "Contains "retorna sim ou n
// if(menu.classList.contains('azul')){
//   menu.classList.add('possui-azul')
// }else{
//   menu.classList.add('nao-possui-azul')
// }

// Adicione a classe ativo a todos os itens do menu
// const itemMenu = document.querySelectorAll('.menu a');

// itemMenu.forEach((item)=>{
//   item.classList.add('ativo');
// })
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// let x=0;
// itemMenu.forEach((item,)=>{
//   item.classList.remove('ativo');
// })
// itemMenu[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
// const imgN= document.querySelectorAll('img');
// imgN.forEach((item,)=>{
//   if(item.hasAttribute('alt')? console.log('Sim'): console.log('Não'));
  
// })
// Modifique o href do link externo no menu

// const link =document.querySelector('a[href^="http"]');
// link.setAttribute('href','https://www.google.com');

// Verificar tamanho de tlink se estão no mínino  com 48 px x 48 px minimo aceitavel

// const linkss = document.querySelectorAll('a');
// linkss.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;
//   if (linkWidth < 48 && linkHeight < 48){
//     console.log(link,'possui acessibilidade')
//   }else{
//     console.log(link,'não possui acessbilidade')
//   }
// });

// Eventos

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function ativarLinksInternos(event) {
//   event.preventDefault();
  
//   // Remove a classe "ativo" de todos os links internos
//   linksInternos.forEach(link => {
//     link.classList.remove('ativo');
//   });

//   // Adiciona a classe "ativo" apenas ao item clicado
//   event.target.classList.add('ativo');
  
//   console.log("Acredito que deu certo");
// }

// // Adiciona o evento de clique a todos os links internos
// linksInternos.forEach(link => {
//   link.addEventListener('click', ativarLinksInternos);
// });


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const todosElementos = document.querySelectorAll('body *');
// function handleElemento(event){
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento)=>{
//   elemento.addEventListener('click',handleElemento)
// })




// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function hadleClickT(event){
 
  if(event.key === 't'){
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown',hadleClickT)

