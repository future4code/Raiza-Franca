import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [pokelist, setPokeList] = useState([])
  const [pokePhoto, setPokePhoto] = useState('')
  const [pokeName, setPokeName]=useState('')
  const [pokeWeigth, setPokeweigth]=useState('')
  const [pokeType, setPokeKind]=useState('')

  useEffect(() => {
    getPokemons()
  })

  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {

        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getInformation = (event) => {
    const url = event.target.value
    axios.get(url)
      .then((res) => {
        setPokeName(res.data.name)
        setPokeweigth(res.data.weight)
        setPokeKind(res.data.types[0].type.name)
        setPokePhoto(res.data.sprites.front_default)

        console.log(res)

      }).catch((err) => {
        console.log(err)
      })
  }


  return (
    <div >
      <h1>Pokemons</h1>
      <select onChange={getInformation}>
        <option>Selecione</option>
        {pokelist.map((pokemon) => {
          return (

            <option value={pokemon.url}>{pokemon.name}</option>
          )
        })}

      </select>
      <div>

        <img src={pokePhoto}></img>
      <p>{pokeName}</p>
      <p>{pokeWeigth} Kg</p>
      <p>{pokeType}</p>
      </div>

    </div>
  );
}

export default App;
