//-------------------------------------------------------------------------------------------//

var jogador1 = 0;
var jogador2 = 0;
var placar;

// if(jogador1 != -1){
//     if (jogador1 > 0){
//         console.log("Jogador 1 Marcou ponto!");
//     } else if(jogador2 > 0) {
//         console.log("Jogador 2 Marcou ponto!");
//     } else {
//         console.log("Ninguem Marcou ponto");
//     }
// }

// IF TERNÁRIO
jogador1 != -1  && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Os jogadores Inválidos");

// Usando IF
if(jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 Marcou ponto!");
    placar = jogador1 > jogador2;
}

// Usando Else IF
else if(jogador2 > 0 && jogador1 == 0){
    console.log("Jogador 2 Marcou ponto!");
    placar = jogador2 > jogador1;
}
// Usando Else
else{
    console.log("Ninguém marcou ponto!");
}
//-------------------------------------------------------------------------------------------//

// Switch case

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 Ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 Ganhou');
        break;
    default:
        console.log('Ninguém Ganhou');
}
//-------------------------------------------------------------------------------------------//

// FOR
let array = ['Valor1','Valor2','Valor3','Valor4','Valor5',];

let object = {propriedade1: 'Obj1', propriedade2: 'Obj2', propriedade3:'obj3',};

for(let i = 0; i < array.length; i++) // 0, 1, 2, 3 , 4
{
    console.log(i);
}
//-------------------------------------------------------------------------------------------//

// For/in - Executa repetição a partir de uma propriedade
// Com Array
for(let i in array){ // 0, 1, 2, 3 , 4
    console.log(i);
}

// Com Object
for (i in object){
    console.log(i)  // Propriedade 1... 2. .. 3
}

// For/of - Executa repetição a partir de valor
//Com Array
for(i of array){
    console.log(i); // Valor1, Valor2 ... 5
}

// Com Object
for (i of object.propriedade1){ 
    console.log(i); // V A L O R 1
}
//-------------------------------------------------------------------------------------------//

// While

var a = 0;

while( a < 10){
    a++;
    console.log(a);
}

// Do-Whiçe

do {
    a++
    console.log(a);
} while(a < 10);
//-------------------------------------------------------------------------------------------//