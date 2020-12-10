import { useState, useEffect } from 'react';
import Axios from 'axios';

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('Pikachu');
  const [pokemonImage, setPokemonImage] = useState('');
// useEffect obviates the need for checking for infinite loops
  useEffect(() => {
    console.log('hello from useEffect');
    if (pokemonName === '') {
      return
    }
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
      setPokemonImage(res.data.sprites.front_default)
    }).catch((err) => {
      setPokemonImage('')
    })
  })
  return (
    <div>
      <h1>Fischer-Price My First Pokedex</h1>
      <input value={pokemonName} onChange={(e) => {setPokemonName(e.target.value.toLowerCase())}} />
      <img src={pokemonImage} />
    </div>
  )
}
