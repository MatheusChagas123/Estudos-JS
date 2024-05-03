// Crie uma função para verificar se um valor é Truthy
function  isTruthy(value) {
return  !!value;
}
console.log(isTruthy(""));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado*4;
}
console.log(perimetroQuadrado(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Matheus','santos'))


// Crie uma função que verifica se um número é par
// ou impar
function parOuImpar(numero){
  if (numero % 2 == 0) { 
    console.log('par')
    } else { 
      console.log('impar');
}
return  numero;
}
parOuImpar(8);
parOuImpar(7);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(valor){
   return typeof valor;}
console.log(tipoDado());

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll',function(){console.log('Matheus Chagas')})
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);

