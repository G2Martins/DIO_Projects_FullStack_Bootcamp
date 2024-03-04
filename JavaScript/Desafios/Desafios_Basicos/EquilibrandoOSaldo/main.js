//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.

var saldoAtual = parseFloat(gets())

var valorDeposito = parseFloat(gets())

var valorRetirada = parseFloat(gets())

saldoAtual += valorDeposito;
saldoAtual -= valorRetirada;

saldoAtual = saldoAtual.toFixed(1);
//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
print(`Saldo atualizado na conta: ${saldoAtual}`);