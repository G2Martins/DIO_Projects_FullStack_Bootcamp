const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 12
let offset = 0;

function loadPokemonItens(offset, limit){                                                
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {                    
        const newHTML = pokemons.map((pokemon) =>
        `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                
                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>                                                              
        `).join('')                                                   // Promise - A promessa de um Response(Resposta)  
        pokemonList.innerHTML += newHTML                              // Processamento Assíncrono (Não tem a resposta de Imediato)  
    })                                                                // Transforma o Objeto em um item de Lista em HTML                 
}                                                                     // Juntar todos os elementos da Lista Convertendo em uma string a partir de um separador
   
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
