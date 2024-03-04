//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

let valorFinal = valorInicial * Math.pow((1 + taxaJuros), periodo); 
// Neste código, a fórmula para calcular o valor final com juros compostos é aplicada. A função Math.pow() é usada para calcular 
// a potência (1 + taxaJuros) elevada ao número de períodos.

print('Valor final do investimento: R$', valorFinal.toFixed(2));