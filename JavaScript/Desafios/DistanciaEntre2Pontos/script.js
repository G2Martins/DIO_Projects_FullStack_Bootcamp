// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let p1 = gets().split(" ");
let p2 = gets().split(" ");

let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);
let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);

// TODO: Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
let distancia = ((x2 - x1)**2) + ((y2-y1) **2);

     
print(Math.sqrt(distancia).toFixed(4));