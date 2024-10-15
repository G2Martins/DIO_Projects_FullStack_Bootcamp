// Leitura do valor de N e da lista de números
let N = parseInt(gets());
let numeros = gets().split(" ").map(Number);

// Variáveis para armazenar os contadores de múltiplos
let multiplos2 = 0;
let multiplos3 = 0;
let multiplos4 = 0;
let multiplos5 = 0;

// Percorre a lista de números e verifica múltiplos
numeros.forEach(numero => {
    if (numero % 2 === 0) multiplos2++;
    if (numero % 3 === 0) multiplos3++;
    if (numero % 4 === 0) multiplos4++;
    if (numero % 5 === 0) multiplos5++;
});

print(`${multiplos2} Multiplo(s) de 2`);
print(`${multiplos3} Multiplo(s) de 3`);
print(`${multiplos4} Multiplo(s) de 4`);
print(`${multiplos5} Multiplo(s) de 5`);
