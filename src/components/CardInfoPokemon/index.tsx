import { Box,  Stack, Typography } from '@mui/material'
import { pokemonAllData } from '../../types'
import {imagen} from '../../assets'

const cardInfoPokemonStyle ={

    containerBox:{
        mt:5,
       
    },
    typography:{

    },
    img:{

    },
    boxStatContainer:{
        gap: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        background: "linear-gradient(to right, goldenrod, yellow, goldenrod)",
        width: "500px",
        borderRadius: "10px",
        padding: "15px",
        margin: "0 auto"

    },
   
    chip:{
        width: "250px",
        backgroundColor: "transparent",
        color: "black",
        display: "flex",
        gap: "10px",
        fontSize: "1.3rem"
    }

}


const CardInfoPokemon = ( {id, name, sprites, stats, url} : pokemonAllData) => {

    
    return (
    <>{sprites &&
        <Box sx={cardInfoPokemonStyle.containerBox}>
            <Typography
                variant='h2'
                sx={{fontFamily: "Pokemon solid"}}
                >
                {name.toUpperCase()}
            </Typography>
            <figure>
                <img width={350} src={sprites.front_default} alt={name}/>
                <img width={350} src={sprites.back_default} alt={name}/>
            </figure>
            <Box sx={cardInfoPokemonStyle.boxStatContainer}>
                {stats.map(stat=>
                    <Stack 
                    key={id*Math.random()} 
                    direction="row" 
                    spacing={1}
                    gap={5}
                    >
                        <Typography
                            component={"p"}
                            sx={cardInfoPokemonStyle.chip}
                        >
                        {stat.stat.name}
                        <img width={30} height={20} src={
                        stat.stat.name == "hp" ? imagen.hp : 
                        stat.stat.name == "attack" ? imagen.attack : 
                        stat.stat.name == "defense" ? imagen.defense : 
                        stat.stat.name == "special-attack" ? imagen["special-attack"] : 
                        stat.stat.name == "special-defense" ? imagen["special-defensa"] :
                        imagen.speed
                        }/>
                        </Typography>
                        <Typography
                            sx={cardInfoPokemonStyle.chip}
                        >
                        {stat.base_stat}
                        </Typography>
                        
                    </Stack>
                    )}
            </Box>
        </Box>}
    </>
  )
}

export default CardInfoPokemon