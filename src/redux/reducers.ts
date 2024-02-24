import { actionRedux } from "../types";
import {
    SAVE_DATA_POKEMON
} from './actions'

export const dataPokemonReducer =(state: any[] | undefined, action: actionRedux)=>{
    switch(action.type){
        case SAVE_DATA_POKEMON: 
            return [...action.payload]
        default:
            return state=[]
    }
}