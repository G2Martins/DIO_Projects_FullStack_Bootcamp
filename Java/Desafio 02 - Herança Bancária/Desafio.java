import java.text.DecimalFormat;
import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) {
        // Lendo os dados de Entrada:
        Scanner scanner = new Scanner(System.in);

        // Capturando os dados necessários
        String titular = scanner.next();
        int numeroConta = scanner.nextInt();
        double saldo = scanner.nextDouble();
        double taxaJuros = scanner.nextDouble();
        scanner.close(); // Fechando o scanner após capturar os dados

        // Criando o objeto ContaPoupanca
        ContaPoupanca contaPoupanca = new ContaPoupanca(numeroConta, titular, saldo, taxaJuros);

        // Exibindo as informações da conta poupança
        System.out.println("Conta Poupanca:");
        contaPoupanca.exibirInformacoes();
    }
}

// Classe base ContaBancaria
class ContaBancaria 
{
    protected int numero;
    protected String titular;
    protected double saldo;

    // Construtor da classe ContaBancaria
    public ContaBancaria(int numero, String titular, double saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    // Método para exibir as informações da conta bancária
    public void exibirInformacoes() {
        DecimalFormat decimalFormat = new DecimalFormat("#.0");
        System.out.println(titular);
        System.out.println(numero);
        System.out.println("Saldo: R$ " + decimalFormat.format(saldo));
    }
}

// Classe derivada ContaPoupanca que herda de ContaBancaria
class ContaPoupanca extends ContaBancaria {
    private double taxaJuros;

    // Construtor da classe ContaPoupanca
    public ContaPoupanca(int numero, String titular, double saldo, double taxaJuros) {
        super(numero, titular, saldo);
        this.taxaJuros = taxaJuros;
    }

    // Sobrescrita do método exibirInformacoes para incluir a taxa de juros
    @Override
    public void exibirInformacoes() {
        super.exibirInformacoes(); // Chama o método da classe base para exibir as informações comuns
        DecimalFormat decimalFormat = new DecimalFormat("#.0");
        System.out.println("Taxa de juros: " + decimalFormat.format(taxaJuros) + "%");
    }
}
