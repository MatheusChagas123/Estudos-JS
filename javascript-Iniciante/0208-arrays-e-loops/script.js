// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhou = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
for (let i=0;i<ganhou.length;i++){
  console.log(ganhou[i]);
}
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i=0;i<ganhou.length;i++){
  console.log(`O brasil ganhou a copa de ${ganhou[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var fruta = ['manga','acerola','uva','pera','laranja']
for ( let i=0;i<fruta.length;i++){
  console.log(fruta[i]);
  if (fruta[i]==='pera'){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = fruta[fruta.length-1];
console.log(ultimaFruta)

