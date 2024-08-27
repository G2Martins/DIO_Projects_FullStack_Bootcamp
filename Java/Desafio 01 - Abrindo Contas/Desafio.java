import java.util.Scanner;

public class Desafio {
    public static void main(String[] args) {
        // Lendo os dados de Entrada:
        Scanner scanner = new Scanner(System.in);

        // Entrada dos dados
        int numeroConta = scanner.nextInt();
        scanner.nextLine(); // Consome a quebra de linha após a entrada do número da conta
        String nomeTitular = scanner.nextLine();
        double saldo = scanner.nextDouble();
        scanner.close(); // Fecha o scanner

        // Criando o objeto ContaBancaria
        ContaBancaria conta = new ContaBancaria(numeroConta, nomeTitular, saldo);
        
        // Exibindo as informações da conta formatadas
        System.out.format("Informacoes:\nConta: %06d\nTitular: %s\nSaldo: R$ %.1f", 
                          conta.getNumero(), conta.getTitular(), conta.getSaldo());
    }
}

class ContaBancaria {
    private int numero;
    private String titular;
    private double saldo;

    // Construtor
    public ContaBancaria(int numero, String titular, double saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    // Métodos getters para acessar os atributos
    public int getNumero() {
        return numero;
    }

    public String getTitular() {
        return titular;
    }

    public double getSaldo() {
        return saldo;
    }
}
