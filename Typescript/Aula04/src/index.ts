/**
 * Variáveis
 */

// Tipos primitivos: 
// • boolean (True Or False), 
// • number (Númerico com ou sem decimal),
// • String (Texto)

// Como declarar na prática?
let ligado: boolean = false; 
// OR
let ligado1 = false;
//Ambas são tipadas como boolean mesmo sem a declaração explícita

let nome:string = "Gustavo";
let idade: number = 30;
let altura: number = 1.9;

// Tipos Especiais (null e undefined):
let nulo: null = null;
let indefinido: undefined = undefined;
//Ambas apenas aceitam valores null e undefined respectivamente

//Tipos abrangentes(any e void):
function executaQuery(): void{}; // Usado coisas para não retornar nada
let retorno:void
let retornoView:any = 2312; // Aceita qualquer coisa

/**
 * Objetos
 * (Usado quando não se tem uma forma definida)
 * Porém não é uma boa prática pela falta de previsibilidade
 */

//Objeto - sem previsibilidade
let produto:object = {
    name:"Gustavo",
    cidade:"Brasília",
    idade:"21",
};

//Objeto Tipado - Usado para definir o objeto
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number,
}; 

let meuProduto: ProdutoLoja = {
    nome:"Tênis",
    preco: 89.99,
    unidades: 5,
};

/**
 * Arrays
 */

let dados: string[] = ["Gustavo", "Luisa", "Pedro"];
let dados2: Array<string> = ["Gustavo", "Luisa", "Pedro"];

// Arrays de Multi types aceita multi valores definidos porém sem uma ordem a se seguir
let info: (string | number)[] = ["Gustavo", 30, "Luisa", 21]

/**
 * Tuplas
 * Vetor de multi types
 * porém com um lugar certo para cada coisa
 */

let boleto:[string, number, number] = ["Água Conta", 199.90, 2312974];
// let boleto:[string, number, number] = [2312974, "Água Conta", 199.90]; Vai dar erro

/**
 * Métodos Arrays
 */
//dados.pop()

/**
 * Dates
 */
let aniversario:Date = new Date("2003-26-11 12:00");
console.log(aniversario.toString());

/**
 * Funções
 */

//tipar os parâmetros e o retorno da função
function addNumber(x:number, y:number): number{
    return x + y;
}

function addToHello(name:string){
    return `Hello ${name}!`;
}

function CalltoPhone(phone: number | string){
    return phone;
}

// Promise
async function getDataBase(id:number): Promise<string> {
    return "Gustavo";
}

let soma:number = addNumber(11, 11);
console.log(soma); // return = 22
console.log(addToHello("Gustavo")); // return = Hello Gustavo !
console.log(CalltoPhone("8399108311")); 

/**
 * Interface
 */

// Tipar um objeto
type robot = {
    id: number;
    name: string;
};

// Usado dentro de classes
interface robot2 {
    id: number;
    name: string;
    sayHello(): string;
}
// Multi types Interface
interface robot3 {
    readonly id: number | string;
    name: string;
}
// readonly = usado para quando tal valor não pode ser alterado pelo mundo exterior

const bot: robot = {
    id: 1,
    name: "Megamen",
};

//Classes
class Pessoa implements robot2{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "LuisaLuisa")
console.log(p.sayHello()); // 