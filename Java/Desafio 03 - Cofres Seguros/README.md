# Desafio Abrindo Contas
<p>
    Você foi contratado para desenvolver um sistema de cofres seguros. O objetivo é criar dois tipos de cofres: um Cofre Digital, que é aberto por senha, e um Cofre Físico, que é aberto por chave.
</p>

## Entrada
<p>
    O programa irá solicitar ao usuário que digite o tipo de cofre a ser criado: "digital" ou "físico". Se for escolhido o tipo "digital", o programa irá solicitar a senha e a confirmação de senha do cofre digital (ambas com apenas números). Caso seja escolhido o tipo "físico", não é necessário nenhuma outra entrada.
</p>

## Saída
<p>
    O programa irá exibir as informações do cofre criado. Para o Cofre Digital, será exibido o tipo e o método de abertura (senha). Para o Cofre Físico, será exibido apenas o tipo e o método de abertura (chave).
</p>

## Exemplos
<p>
    A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
</p>

### Entrada	01
digital
12345
1234

### Saída 01
Tipo: Cofre Digital
Metodo de abertura: Senha
Senha incorreta!

### Entrada 02
fisico

### Saída 02
Tipo: Cofre Fisico
Metodo de abertura: Chave

### Entrada 03
digital
2525
2525

### Saída 03
Tipo: Cofre Digital
Metodo de abertura: Senha
Cofre aberto!