import { Box} from '@mui/material'
import { imagen } from '../../assets/index'
import './style.css'
const loaderStyle ={
    box:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        position: "absolute"
    },
    img:{
        width: 50,
        animation: "rotating 2s linear infinite"
    }
}

const Loader = () => {
  return (
    <Box sx={loaderStyle.box}>
        <img  style={loaderStyle.img} src={imagen.pokeball} />
    </Box>
  )
}

export default Loader