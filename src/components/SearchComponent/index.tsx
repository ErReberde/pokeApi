
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import { SearchComponentType } from '../../types';

const containerSearchComponent ={
    container: {
        width: "80vw", mt: 10, display: "flex", justifyContent: "center"
    },
    inputText: {
        width: "30vw",
        backgroundColor: "white",
        borderRadius: "5px",
        height: "40px"
    }

}

const SearchComponent = ({onChangeEvent}: SearchComponentType) => {
  return (
    <Box sx={containerSearchComponent.container}>
        <InputBase onChange={onChangeEvent} sx={containerSearchComponent.inputText}/>
        <IconButton type="button" aria-label="search">
            <SearchIcon color='info'/>
        </IconButton>   
    </Box>
  )
}

export default SearchComponent