import './App.css'
import useToggle from './hooks/useToggle'

function App() {
  const [isVisible, toggleVisible] = useToggle(true)



  return (
    <>
      <button onClick={toggleVisible}>test</button>  
      {isVisible ? <h1>true</h1> : <h1>false</h1>} 
    </>
  )
}

export default App
