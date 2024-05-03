var nome = 'André';
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome);

var preco = 25,
 totalComprado = 3,
 totalPreco = preco * totalComprado;

console.log(totalPreco);

var sobrenome = 'Rafael',
    cidade = 'Rio';

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

// A linha abaixo está comentada para evitar erro devido à variável não definida.
// console.log(aindaNaoDefine);

var comida;
console.log(comida);
comida = 'Pizza';
console.log(comida);

// A linha abaixo está comentada para evitar erro devido à tentativa de reatribuição de uma constante.
// const time = 'Vasco';
// time = 'Flamengo';

// console.log(time);



console.log(typeof nome); // Retorna o tipo da variável (string)

// template string

var nomeComFrase = `testando o ${nome *6} em frases`;
console.log(nomeComFrase);// Declarar uma variável com o seu nome

// Declare uma variável contendo uma string
var minhaString = "Eu estou isso"

// Declare uma variável contendo um número dentro de uma string
 var stringComnumero = "Olá eu sou o " + 23 + " anos";


// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'matheus';
var sobrenome = 'chagas';
var nomeCompleto = `testando o ${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = 'It\'s time';

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

