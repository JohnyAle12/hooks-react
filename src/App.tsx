import { CounterApp } from "./CounterApp/CounterApp"

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CounterApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
