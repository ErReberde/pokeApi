import {objectImage, pokemonCard} from '../types'
const MY_FAVORITE_POKEMONS = import.meta.env.VITE_POKEMONS_FAVORITE_STORAGE


export const pokemonIsOnFavoriteList =(pokemon: pokemonCard) =>  {
    const MyPokemons = localStorage.getItem(MY_FAVORITE_POKEMONS) 

    if (MyPokemons){
        const pokemonsList = JSON.parse(MyPokemons)
        const pokemonFound = pokemonsList.find((ele: pokemonCard) => ele.id === pokemon.id)
        if(!pokemonFound) return false

        return true
    }else{

        return false
    }

}

export const addPokemonToStorage = (pokemon:pokemonCard, storageFavorite: string)=>{

    const MyPokemons = localStorage.getItem(storageFavorite) || "[]"
    const pokemonList = JSON.parse(MyPokemons)
    const pokemonIsFavoriteAlready = pokemonIsOnFavoriteList(pokemon)

    if(pokemonIsFavoriteAlready) {
        removePokemonOnFavoriteList(pokemon.id)
    }else{
            pokemonList.push(pokemon)
            localStorage.removeItem(storageFavorite)
            localStorage.setItem(storageFavorite, JSON.stringify(pokemonList))
        }

  

}

export const removePokemonOnFavoriteList = (idItem:number)=>{

    const MyPokemons = localStorage.getItem(MY_FAVORITE_POKEMONS) 

    if(MyPokemons){

        let pokemonsList = JSON.parse(MyPokemons)
    
        pokemonsList = [...pokemonsList.filter((id:number) => id != idItem)]
        localStorage.removeItem(MY_FAVORITE_POKEMONS)
        localStorage.setItem(MY_FAVORITE_POKEMONS, JSON.stringify(pokemonsList))
    }



}


export const getURLIcon =(objectImage : objectImage, property: string)=>{

    return Object.keys(objectImage).find((e)=> e.match(property))
}   

export const getFavoritePokemons = ()=> {

    const MyPokemons = localStorage.getItem(MY_FAVORITE_POKEMONS) || "[]"

    return JSON.parse(MyPokemons)

}
