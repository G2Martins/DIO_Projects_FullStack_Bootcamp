//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

var valor = parseFloat(gets());

if (valor > 0) {
  //TODO: Imprimir a mensagem de sucesso, formatando o saldo atual (vide Exemplos).
    valor = valor.toFixed(2);
    print(`Deposito realizado com sucesso! \nSaldo atual: R$ ${valor}`);
    
} else if (valor < 0) {
  //TODO: Imprimir a mensagem de valor inválido.
  
  print(`Valor invalido! Digite um valor maior que zero.`);
} else {
  //TODO: Imprimir a mensagem de encerrar o programa.
    print(`Encerrando o programa...`);
}