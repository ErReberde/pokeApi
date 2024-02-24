
import { dataPokemonReducer } from './reducers'
import { savePokemonsAction } from './actions'
import { pokemonAllData } from '../types'
import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
    reducer:{
        pokemon: dataPokemonReducer
    }
})


// selectors


export const getPokemons = (state: any )=> state.pokemon as pokemonAllData []



