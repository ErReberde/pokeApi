export const SAVE_DATA_POKEMON = "saveDataPokemon"


export const savePokemonsAction = (payload: any)=>{
    return {
        type: SAVE_DATA_POKEMON,
        payload: payload
    }
}