const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length){


// deixa a primeira section com a class ativo adicionada
tabContent[0].classList.add('ativo');

//adiciona a classe ativo em uma section da seleção tabContent
function activeTab(index){
  //foreche pecorre todas as section retirando todos que tem a classe ativo
  tabContent.forEach((section)=>{
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
 
}
//loop para cada li em tab menu
tabMenu.forEach((itemMenu,index)=>{
  //adiciona um evento de click em cada li e no item menu para pode acessar a função active tab e utilizar o indenx do forech de tabMenu tem que fazer uma função anonima () =>{e passar a função aqui dentro }
  itemMenu.addEventListener('click',()=>{
    activeTab(index);
  });
});
}
