let entrada = gets().split(" ");
let p, j1, j2, r, a;

p = parseInt(entrada[0]);
j1 = parseInt(entrada[1]);
j2 = parseInt(entrada[2]);
r = parseInt(entrada[3]);
a = parseInt(entrada[4]);

// Caso 1: Jogador 1 rouba e o jogador 2 não acusa
if (r == 1 && a == 0) {
    print("Jogador 1 ganha!");
}
// Caso 2: Jogador 1 rouba e o jogador 2 acusa
else if (r == 1 && a == 1) {
    print("Jogador 2 ganha!");
}
// Caso 3: Jogador 1 não rouba e o jogador 2 acusa incorretamente
else if (r == 0 && a == 1) {
    print("Jogador 1 ganha!");
}
// Caso 4: Sem roubo, o jogo segue as regras de ímpar ou par
else {
    let soma = j1 + j2;
    
    // Jogador 1 escolheu ímpar (p == 0) e a soma é ímpar
    if (p == 0 && soma % 2 != 0) {
        print("Jogador 1 ganha!");
    }
    // Jogador 1 escolheu par (p == 1) e a soma é par
    else if (p == 1 && soma % 2 == 0) {
        print("Jogador 1 ganha!");
    }
    // Caso contrário, Jogador 2 ganha
    else {
        print("Jogador 2 ganha!");
    }
}
