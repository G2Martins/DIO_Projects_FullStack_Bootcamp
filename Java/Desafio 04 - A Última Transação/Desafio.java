import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita ao usuário que forneça o registro da transação no formato "data,hora,descricao,valor"
        String entrada = scanner.nextLine();
        scanner.close();

        // Divide a string de entrada em partes separadas por vírgulas
        String[] partes = entrada.split(",");

        // Cria uma nova transação utilizando os valores da string de entrada
        String data = partes[0];
        String hora = partes[1];
        String descricao = partes[2];
        double valor = Double.parseDouble(partes[3]);

        Transacao transacao = new Transacao(data, hora, descricao, valor);

        // Imprime os detalhes da transação de forma amigável
        transacao.imprimir();
    }
}

class Transacao {
    private String data;
    private String hora;
    private String descricao;
    private double valor;

    // Construtor para inicializar os atributos da transação
    public Transacao(String data, String hora, String descricao, double valor) {
        this.data = data;
        this.hora = hora;
        this.descricao = descricao;
        this.valor = valor;
    }

    // Método para imprimir os detalhes da transação
    public void imprimir() {
        System.out.println(this.descricao);
        System.out.println(this.data);
        System.out.println(this.hora);
        System.out.printf("%.2f\n", this.valor);
    }
}
