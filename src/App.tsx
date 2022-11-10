import './App.css'
import { useActionHistory } from './hooks/useActionHistory'

function App() {

  const { state, setState, undo, redo } = useActionHistory("")

  console.log(state)

  const onUndoBtnClick = () => {
    undo()
  }

  const onRedoBtnClick = () => {
    redo()
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }

  return (
    <div className="App">
      <h1>Undo/Redo Example:)</h1>
      <div>
        <button onClick={onUndoBtnClick}>
          Undo
        </button>
        <button onClick={onRedoBtnClick}>
          Redo
        </button>
      </div>
      <div>
        <input type="text" value={state} onInput={onInputChange} />
      </div>
    </div>
  )
}

export default App
