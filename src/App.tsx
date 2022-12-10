import { CounterApp } from "./CounterApp/CounterApp"
import { FocusScreen } from "./FocusScren/FocusScreen"
import { MultiplesHooks } from "./MultiplesHooks/MultiplesHooks"
import { SimpleForm } from "./SimpleForm/SimpleForm"
import { SimpleFormCustomHook } from "./SimpleForm/SimpleFormCustomHook"

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CounterApp />
            <SimpleForm />
            <SimpleFormCustomHook />
            <MultiplesHooks />
            <FocusScreen />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
