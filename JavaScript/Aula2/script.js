// ------------------------------------------------------------------------------------------//
// Tipos primitivos
// Boolean
var VouF = false;
console.log(VouF);
console.log(typeof(VouF)); // Identifica o tipo da variável

// Number
var number_1 = 1;
console.log(number_1);
console.log(typeof(number_1));

// String
var nome = 'Gustavo';
console.log(nome);
console.log(typeof(nome));

// Function
var funcao = function(){};
console.log(typeof(funcao));
// ------------------------------------------------------------------------------------------//

// Como declarar
// VAR
var variavel = 'Gustavo'; // Escopo Local e Global
variavel = 'Martins';
console.log(variavel); // Resultado  = undefined caso o var nao se declare nada nele

// LET
let variavel2 = 'Gustavo'; // Escopo Local
variavel2 = 'Martins';
console.log(variavel2);

// CONST
const constante = 'Gustavo'; 
constante = 'Martins'
console.log(constante); //Resultado ERRO pois uma constante não pode ter seu valor alterado
// ------------------------------------------------------------------------------------------//

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopolocal() {
    let escopoLocalInterno =  'local';
    console.log(escopoLocalInterno);
}

escopolocal();
// ------------------------------------------------------------------------------------------//

// Atribuição
var atribuicao = 'Gustavo';

// Comparação
var comparacao = '0' == 0; // Retorna Valores Booleanos
console.log(comparacao);

// Comparação Identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);
// ------------------------------------------------------------------------------------------//

// Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// Divisão Inteira ou Resto da Divisão (MOD)
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);
// ------------------------------------------------------------------------------------------//
//  Operadores Relacionais

// Maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 < 2; 
console.log(menorQue);

// Maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// Menor ou igual a 
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);
// ------------------------------------------------------------------------------------------//
// Operadores Lógicos

// AND
var and = true && false;
console.log(and); // Resultado = False pois os 2 precisam ser verdadeiros

// OR
var or = true || false;
console.log(or); // Resultado = Verdadeiro pois apenas 1 precisa ser Verdadeiro

// Not
var not = !true;
console.log(not); // Resultado = False
// ------------------------------------------------------------------------------------------//