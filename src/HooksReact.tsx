import { CounterApp } from "./CounterApp/CounterApp"
import { FocusScreen } from "./FocusScren/FocusScreen"
import { CallbackHook } from "./Memos/CallbackHook"
import { MemoHook } from "./Memos/MemoHook"
import { Memorize } from "./Memos/Memorize"
import { MultiplesHooks } from "./MultiplesHooks/MultiplesHooks"
import { SimpleForm } from "./SimpleForm/SimpleForm"
import { SimpleFormCustomHook } from "./SimpleForm/SimpleFormCustomHook"

export const HooksReact = () => {
  return (
    <>
        <CounterApp />
        <SimpleForm />
        <SimpleFormCustomHook />
        <MultiplesHooks />
        <FocusScreen />
        <Memorize />
        <MemoHook />
        <CallbackHook />
    </>
  )
}
