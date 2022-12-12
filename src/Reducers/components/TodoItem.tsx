import { State } from '../types'

type Props = {
    todo: State
}

export const TodoItem = ({todo}: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{ todo.description }</span>
        <button
            className="btn btn-sm btn-danger"
        >
            Eliminar
        </button>
    </li>
  )
}