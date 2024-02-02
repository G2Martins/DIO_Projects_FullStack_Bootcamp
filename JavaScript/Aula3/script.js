// ------------------------------------------------------------------------------------------//
// Vetores e Arrays

// Como declarar um ARRAY
let array = ['String', 1, true];
console.log(array);

// Pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array3'], ['array4'], ['array5'], ['array6']];
console.log(array2);
console.log(array2[0]); // Acessando o valor de acordo com o indice

// forEach - Retorna o valor de cada item com seu indice dento do array EX: String 0
array2.forEach(function(item, index){console.log(item, index)});

// Push - Adiciona um novo item ao final do array, com qualquer dado
array2.push('novo item');
console.log(array2);

// POP - Remove o item ao final do Array
array2.pop();
console.log(array2);

// Shift - Remove o item no Inicio do Array
array2.shift();
console.log(array2);

// Unshift - Adiciona um novo item no inicio do array
array2.unshift('novo item no inicio');
console.log(array2);

// IndexOf - Retorna um indice de um valor
console.log(array2.indexOf(true)); // Indice = 2

// Splice - Remove ou substitui um item pelo indice;
array2.splice(0, 3);
console.log(array2)

// Slice - Retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);
//-------------------------------------------------------------------------------------------//

//Objetos
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object);
console.log(object.boolean); // Acessar os valores

var string = object.string;
console.log(string);

var array3 = object.array;
console.log(array3);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
