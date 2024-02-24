export interface PokemonListLayOut {
    pokemonList : any[],
    title?: string
}

export interface pokemonBasicData {
    name: string,
    url: string
}

export interface pokemonCard extends pokemonBasicData{
    sprites: sprites,
    name: string,
    id: number
}

export interface pokemonAllData extends pokemonCard {
   stats: statPokemon[]
}

type sprites={
    back_default: string,
    front_default:string
}

type statPokemon = {
    base_stat : number,
    effort: number,
    stat : {
        name: string,
        url: string
    }
}

export type objectImage = {
    hp: string,
    attack: string,
    defense: string,
    "special-atack": string,
    "special-defense" : string,
    speed: string,
}

export type SearchComponentType = {
    onChangeEvent: React.ChangeEventHandler
}

export type actionRedux = {
    type: string,
    payload? : any
}