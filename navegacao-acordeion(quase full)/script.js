
function initTabNva(){
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
}
initTabNva();

//accordion
 function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt')
if(accordionList.length){
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');


function activeAccordion(event){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo');
}
accordionList.forEach((item)=> {
  item.addEventListener('click',activeAccordion);
});
}
}

initAccordion();

// sroll devagavar para o link interno
function initScrollSuave () {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
}

initScrollSuave();

// animação para o scroll
function InitanimacaoScroll(){
const sections = document.querySelectorAll('.js-scroll');

if (sections.length){
const windown60 = window.innerHeight * 0.6
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top ;   
    const isSectionVisible = (sectionTop-windown60)< 0;
    if (isSectionVisible ) {
      section.classList.add('ativo');
    }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);
}
}

InitanimacaoScroll();