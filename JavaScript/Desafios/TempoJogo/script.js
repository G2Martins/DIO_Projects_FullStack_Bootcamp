// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

var line = gets().split(" ");

var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);

// Se a hora inicial for igual à hora final, o jogo durou 24 horas
if (hInicial == hFinal) { 
    print('O JOGO DUROU 24 HORA(S)');
} 
// Se a hora inicial for menor que a hora final, o jogo durou a diferença entre as horas
else if (hInicial < hFinal) {
    print('O JOGO DUROU ' + (hFinal - hInicial) + ' HORA(S)');
} 
// Se a hora inicial for maior que a hora final, o jogo atravessou a meia-noite e durou até o próximo dia
else {
    print('O JOGO DUROU ' + (24 - hInicial + hFinal) + ' HORA(S)');
}
