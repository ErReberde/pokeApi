
import { Box, Stack, Typography } from '@mui/material'
import { PokemonListLayOut, pokemonCard } from '../../types'
import CardPokemon from '../Card'



const LayOutPokemonList = ({pokemonList, title}: PokemonListLayOut) => {
    
  return (
    <Box sx={{mt: 5, m: 10}}>
        <Typography 
          variant='h2'
          component={"h2"}
          sx={{
            m: 10,
            color: 'white',
            fontFamily: "Pokemon solid"
          }}
        >
          {title}
        </Typography>
        {pokemonList.length > 0 && <Stack spacing={{ xs: 1, sm: 2}} direction="row" useFlexGap flexWrap="wrap">
            {pokemonList.map((pokemon: pokemonCard)=>
                <CardPokemon url={pokemon.url} sprites={pokemon.sprites} id={pokemon.id} name={pokemon.name} key={pokemon.id*Math.random()}/>
            )}
        </Stack>}
    </Box>
  )
}

export default LayOutPokemonList