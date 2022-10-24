import { useEffect, useState } from "react";

function PokemonList() {
    const [state, setState] = useState([])

    useEffect(() => {
        async function catchingPokemon() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await response.json()
            console.log(data)

            setState(data.results)
        }

        catchingPokemon()
    }, [])

    return (
        <ul>
            {/* <li>{JSON.stringify(state)}</li> */}
            {state.map((pokemon) => <li>{pokemon.name}</li>)}
        </ul>
    )
}

export default PokemonList