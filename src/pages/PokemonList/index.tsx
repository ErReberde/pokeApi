import React, { useEffect, useState } from "react"
import { pokeApiFetch } from "../../axios"
import { pokemonBasicData } from "../../types"
import LayOutPokemonList from "../../components/LayOutPokemons"
import SearchComponent from "../../components/SearchComponent"
import { Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../../redux/store"
import { savePokemonsAction } from "../../redux/actions"
import Loader from "../../components/Loader"


const PokemonList = () => {

    const [pokemons, setPokemons] = useState<any[]>([])
    const [textFilter, setTextFilter] = useState<string>("")

    const dispatch = useDispatch()
    const selectorPokemon = useSelector(getPokemons)

    const getAllPokemonsFromApi = async(url:string)=>{
      try{
          const {data: { results }} = await pokeApiFetch.get(url)

          if(results.length > 0){
            results.map(async (pokemon: pokemonBasicData)=>{
  
                const {data} = await pokeApiFetch.get(pokemon.url)
                setPokemons(prevPokemons => [...prevPokemons, data]) 
              }
            )
          dispatch(savePokemonsAction(pokemons))
          }
      }catch(e){
        console.log(e)
      }
    }
    
    const onChangeTextFilter = (event: React.ChangeEvent<HTMLInputElement>)=>{
      
      setTextFilter(event.target.value)
    }

    const filterArrayPokemons = ()=>{
      return pokemons.filter((pokemon)=>
            pokemon.name.toLowerCase().includes(textFilter.toLowerCase())
        )
    }


    useEffect(()=>{
      if(selectorPokemon.length === 0){
        getAllPokemonsFromApi(`pokemon?limit=100&offset=0"`)
      }else{
        setPokemons(selectorPokemon)
      }
    },[])

  

  return (
    <Box sx={{display: "flex", flexDirection: "column" , alignItems: "center"}}>
      <SearchComponent onChangeEvent={onChangeTextFilter}/>
      {pokemons.length > 0 ? <LayOutPokemonList pokemonList={filterArrayPokemons()}/> : <Loader/>}
    </Box>
  )
}

export default PokemonList