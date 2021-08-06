// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        autocomplete="off"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  )
}

function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        autocomplete="off"
        id="animal"
        value={animal}
        onChange={(event) => onAnimalChange(event.target.value)}
      />
    </div>
  )
}

function Display({animal}) {
  return animal ? <div>{`Your favorite animal is: ${animal}!`}</div> : null;
}

function App() {
  const [animal, setAnimal] = React.useState('');

  return (
    <form>
      <Name />
      <FavoriteAnimal animal={animal} onAnimalChange={setAnimal} />
      <Display animal={animal} />
    </form>
  )
}

export default App
