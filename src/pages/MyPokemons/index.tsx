import React, { useEffect, useState } from 'react'
import LayOutPokemonList from '../../components/LayOutPokemons'
import { PokemonListLayOut } from '../../types'
import { getFavoritePokemons } from '../../utils'



const MyPokemons = () => {
    
  const [favoritePokemons, setFavoritePokemons ] = useState([])

  const pokemonList = getFavoritePokemons()  

  useEffect(()=>{

    setFavoritePokemons(pokemonList)
    
  },[])

  return (

    <LayOutPokemonList title="Mis pokemones favoritos" pokemonList={favoritePokemons}/>
  )
}

export default MyPokemons