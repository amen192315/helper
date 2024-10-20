import useToggle from './hooks/useToggle'

const Test = () => {
    const [toggle, setToggle] = useToggle(true)
  return (
    <div>
      <button onClick={setToggle}>testing</button>
        {toggle ? <h1>ttt</h1> : <h1>fff</h1>}
    </div>
  )
}

export default Test
