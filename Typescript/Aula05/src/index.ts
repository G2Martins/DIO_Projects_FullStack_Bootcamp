/**
 * Classes
 *  ? - Utilizado para campos que não são obrigatórios
 * 
 * Data Modifiers:
 *  public = Acesso a todos
 *  private = Apenas acessada por dentro da classe
 *  protected = Acesso apenas por dentro da classe e de subclasse que herdem dessa classe
 */

class Character {
    protected name: string;
    strength: number;
    skill: number;
    
    constructor(name:string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`)
    }
    /**
    protected attack(): void {
        console.log(`Attack with ${this.strength} points`)
    } */
}

// Character = Superclass
// Magician = SubClasses
// -> O qual tem o mesmo comportamento da classe super
// Entretanto foi adicionado um novo campo de magia
class Magician extends Character{
    magicPoints: number;

    constructor(
        name:string, 
        strength: number, 
        skill: number,
        magicPoints: number
    ){
        super(name, strength, skill)
        this.magicPoints = magicPoints;
    }
}


const p1 = new Character("Ryu", 10, 98);
p1.attack();

const p2 = new Magician("Mago", 9, 30, 99);

/**
 * Generics
 */

// Jeito errado de ser usar generics
function concatArray(...itens: any[]):any[]{
    return new Array().concat(...itens);
}
// Erro = pelo fato de variáveis com numArray aceitar letras e não apenas números e vice-versa
const numArray = concatArray([1,5], [3]);
const stgArray = concatArray(["gustavo", "luisa"], ["barto"])
console.log(numArray); // Return = [1, 5, 3]
console.log(stgArray); // Return = ["gustavo", "luisa", "barto"]

// Jeito Certo de usar generics
function concatArray2<T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray2 = concatArray2<number[]>([1,5], [3]);
const stgArray2 = concatArray2<string[]>(["gustavo", "luisa"], ["barto"])
console.log(numArray2); // Return = [1, 5, 3]
console.log(stgArray2); // Return = ["gustavo", "luisa", "barto"]

/**
 * Decorators
 */
function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome // Return = [class Funcionario]
class Funcionario{}

@ExibirNome // Return = [class Quincas]
class Quincas{}

// Class Decorator
function apiVersion(version: string){
    return (target: any) =>{
        Object.assign(target.prototype, {__version: version, __name: "Gustavo"});
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();
//console.log(api.__version); //para rodar necessário npm run start:dev
//console.log(api.__name);

// Attribute Decorator
function minLength(length: number){
    return (target:any, key: string) =>{
        // console.log(target) = name
        // console.log(key) = produtos
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) =>{
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        }
        
        Object.defineProperty(target, key,{
            get: getter,
            set: setter,
        });
    };
}

class Api1{
    //@minLength(10)
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

const api1 = new Api1("produtos");
console.log(api1.name);