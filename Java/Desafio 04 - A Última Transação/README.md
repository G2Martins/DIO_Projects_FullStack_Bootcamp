# Desafio Abrindo Contas
<p>
   Neste desafio, você criará uma solução para um sistema bancário utilizando conceitos de orientação a objetos. A implementação solicitada pela equipe de desenvolvimento da empresa bancária, gostaria de fosse realizado uma melhoria no sistema de registros, onde é recebido os dados brutos dos registros bancários. O objetivo é obter as informações de uma forma mais amigavel para o cliente e não oferecer informações brutas.

    Considere que cada transação é representada por apenas uma string contendo as seguintes informações:

    data,hora,descricao,valor
    Dessa forma, crie uma classe representando as Transacoes e nela será recebido os atributos necessários para guardar as informações, ao fim, retorne o registro contendo a data, hora e valor da transação.
</p>

## Entrada
<p>
    A entrada será a representação de um registro (string) no formato e sequencia: "data,hora,descricao,valor".
</p>

## Saída
<p>
    A saída deve ser o valor do registro (string) recebido na entrada informando a transação efetuada, contendo, descrição, data, hora e valor da transação, como no exemplo da tabela a baixo.
</p>

## Exemplos
<p>
    A saída deve ser o valor do registro (string) recebido na entrada informando a transação efetuada, contendo, descrição, data, hora e valor da transação, como no exemplo da tabela a baixo.
</p>

### Entrada	01
01/02/2023,09:00:00,Deposito,100.00

### Saída 01
Deposito
01/02/2023
09:00:00
100.00

### Entrada 02
11/05/2023,11:15:00,Transferencia,25.00

### Saída 02
Transferencia
11/05/2023
11:15:00
25.00

### Entrada 03
21/09/2023,10:30:00,Saque,30.00

### Saída 03
Saque
21/09/2023
10:30:00
30.00