import { useState } from 'react';
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const clickHandler = () => {
    fetch("http://registphp",{
      method:'POST',
      header: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({action : 1})
    })
    .then(rep => rep.json())
    .then(rep => {
      setWord(rep);
    })
  }

  return (
    <>
      <div className="container">
        this page using php
        <button onClick={clickHandler}></button>
        
      </div>
      {
          word
        }
    </>
  )
}

export default App
