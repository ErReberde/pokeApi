import { useParams } from "react-router-dom"
import { pokeApiFetch } from "../../axios"
import { useEffect, useState } from "react"
import CardInfoPokemon from "../../components/CardInfoPokemon"
import { pokemonAllData } from "../../types"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../../redux/store"
import { savePokemonsAction } from "../../redux/actions"



const URL_API = import.meta.env.VITE_URI_POKEAPI

const PokemonDetails = () => {

  const [pokemonInfo, setPokemonInfo] = useState({})
  const dispatch = useDispatch()
  const selectorPokemon = useSelector(getPokemons)

  const {id} = useParams()

  const getInfoPokemonById= async () => {
    const {data} = await pokeApiFetch.get(`${URL_API}pokemon/${id}`)
    setPokemonInfo(data)
    dispatch(savePokemonsAction(data))
  }
  useEffect(()=>{
    if(selectorPokemon.length === 0){
      getInfoPokemonById()
    }
    
  },[])

  return (
    <CardInfoPokemon {...pokemonInfo as pokemonAllData} />
  )
}

export default PokemonDetails