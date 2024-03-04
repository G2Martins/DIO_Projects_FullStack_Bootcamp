//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

// Verifica se o saldo disponível é suficiente para o saque
if (saldoTotal >= valorSaque) {
    // Subtrai o valor do saque do saldo total
    saldoTotal -= valorSaque;
    // Imprime a mensagem de saque realizado com sucesso
    print(`Saque realizado com sucesso. Novo saldo: ${saldoTotal}`);
} else {
    // Imprime a mensagem de saldo insuficiente
    print("Saldo insuficiente. Saque nao realizado!");
}