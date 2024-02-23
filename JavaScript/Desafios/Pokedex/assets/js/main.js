
function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                
                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

// Promise - A promessa de um Response(Resposta) 
// Processamento Assíncrono (Não tem a resposta de Imediato)
pokeApi.getPokemons().then((pokemons = []) => {   
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') // Transforma o Objeto em um item de Lista em HTML
})                                                                     // Juntar todos os elementos da Lista Convertendo em uma string a partir de um separador                

