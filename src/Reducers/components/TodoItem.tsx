import { State } from '../types'

type Props = {
    todo: State,
    onDeleteTodo(todo: State): void
}

export const TodoItem = ({todo, onDeleteTodo}: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{ todo.description }</span>
        <button
            onClick={ () => onDeleteTodo(todo) }
            className="btn btn-sm btn-danger"
        >
            Eliminar
        </button>
    </li>
  )
}
