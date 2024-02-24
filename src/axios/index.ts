import axios, {AxiosInstance} from 'axios'


export const pokeApiFetch: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_URI_POKEAPI,
    headers: {'Content-type': 'application/json'},
    
})
