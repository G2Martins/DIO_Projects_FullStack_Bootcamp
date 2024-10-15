// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let C = parseInt(gets()); // Lê o número de casos de teste

for (let i = 0; i < C; i++) {
    var input = gets().split(" ");
    let A = parseInt(input[0]);
    let B = parseInt(input[1]);

    // Calcula o número de dígitos do resultado de A^B usando logaritmo
    let digitos = Math.floor(B * Math.log10(A)) + 1;

    print(digitos); // Imprime o número de dígitos
}
