import { Box, IconButton, Paper, Typography } from '@mui/material'

import { pokemonCard } from '../../types'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';
import { addPokemonToStorage, pokemonIsOnFavoriteList } from '../../utils';
import { useNavigate } from 'react-router-dom';

const cardPokemon ={
    container:{
        flexGrow: 1,
        textAlign: "center", 
        width: "15vw", 
        height: "40vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        background: "linear-gradient(to right, goldenrod, yellow, goldenrod)",
        minWidth: "230px",
        cursor: "pointer"
    }
}

const MY_POKEMONS_STORAGE = import.meta.env.VITE_POKEMONS_FAVORITE_STORAGE


const CardPokemon = (pokemon: pokemonCard) => {
    
    const [pokemonIsFavorite, setPokemonIsFavorite] = useState(false)
    const navigate = useNavigate()
    const addFavorite = (event: React.MouseEvent, pokemon: pokemonCard, storage: string)=>{
        event.stopPropagation()
        addPokemonToStorage(pokemon, storage)
        setPokemonIsFavorite(pokemonIsOnFavoriteList(pokemon))
    }

    const goInfoPokemonById=(idPokemon: number)=>{
        navigate(`/pokemon/${idPokemon}`)
    }


    useEffect(()=>{
        setPokemonIsFavorite(pokemonIsOnFavoriteList(pokemon))
         
    },[])
  return (
    <Paper  
        sx={cardPokemon.container}
        onClick={()=>goInfoPokemonById(pokemon.id)}
        >
        <Typography
            variant='h5'>
            {pokemon.name}
        </Typography>
        <Box sx={{alignSelf: "center"}}>
            <img width={200} src={pokemon.sprites.front_default}/>
        </Box>
        <Box onClick={(event:React.MouseEvent)=>addFavorite(event, pokemon, MY_POKEMONS_STORAGE)} sx={{justifySelf: "end" , display: "flex", justifyContent: "space-around"}}>
            <IconButton >
                {pokemonIsFavorite ? <FavoriteIcon color="error"/>: <FavoriteBorderIcon/>}
            </IconButton>
        </Box>
    </Paper>
  )
}

export default CardPokemon