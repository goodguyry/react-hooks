// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, initialValue = '') {
  const [value, setValue] = React.useState(
    () => window.localStorage.getItem(key) || JSON.stringify(initialValue),
  )

  React.useEffect(() => {
    const readyValue = 'string' === typeof value
      ? value
      : JSON.stringify(value);

    window.localStorage.setItem(key, readyValue);
  }, [key, value]);

  return [value, setValue];
}

function Greeting({initialValue = ''}) {
  const [name, setName] = useLocalStorageState('name', initialValue);

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialValue={['Ryan', 'Domingue']} />
}

export default App
