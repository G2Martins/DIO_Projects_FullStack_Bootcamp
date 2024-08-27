import java.util.Scanner;

// Classe abstrata Cofre
abstract class Cofre {
    protected String tipo;
    protected String metodoAbertura;

    // Construtor da classe Cofre
    public Cofre(String tipo, String metodoAbertura) {
        this.tipo = tipo;
        this.metodoAbertura = metodoAbertura;
    }

    // Método para imprimir as informações do cofre
    public void imprimirInformacoes() {
        System.out.println("Tipo: " + this.tipo);
        System.out.println("Metodo de abertura: " + this.metodoAbertura);
    }
}

// Classe CofreDigital que herda de Cofre
class CofreDigital extends Cofre {
    private int senha;

    // Construtor da classe CofreDigital
    public CofreDigital(int senha) {
        super("Cofre Digital", "Senha");
        this.senha = senha;
    }

    // Método para validar a senha
    public boolean validarSenha(int confirmacaoSenha) {
        return confirmacaoSenha == this.senha;
    }
}

// Classe CofreFisico que herda de Cofre
class CofreFisico extends Cofre {

    // Construtor da classe CofreFisico
    public CofreFisico() {
        super("Cofre Fisico", "Chave");
    }
}

// Classe principal para executar o desafio
public class Desafio_Cofre_2 {   

    public static void main(String[] args) {
        // Lê o tipo de cofre (primeira linha da entrada)
        Scanner scanner = new Scanner(System.in);
        String tipoCofre = scanner.nextLine();

        // Verifica se o tipo de cofre é digital
        if (tipoCofre.equalsIgnoreCase("digital")) {
            // Lê a senha e a tentativa de confirmação
            int senha = scanner.nextInt();
            int senhaTentativa = scanner.nextInt();
            CofreDigital cofreDigital = new CofreDigital(senha);

            // Valida a senha e imprime as informações
            if (cofreDigital.validarSenha(senhaTentativa)) {
                cofreDigital.imprimirInformacoes();
                System.out.println("Cofre aberto!");
            } else {
                cofreDigital.imprimirInformacoes();
                System.out.println("Senha incorreta!");
            }

        } else if (tipoCofre.equalsIgnoreCase("fisico")) {
            // Cria o cofre físico e imprime as informações
            CofreFisico cofreFisico = new CofreFisico();
            cofreFisico.imprimirInformacoes();
        }

        scanner.close(); // Fecha o scanner após o uso
    }
}
