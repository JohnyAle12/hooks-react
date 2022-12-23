import { State } from '../types'

type Props = {
    todo: State,
    onDeleteTodo(todo: State): void,
    onToggleTodo(todo: State): void
}

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span
            className={`align-self-center ${ todo.done ? 'text-decoration-line-through':'' }`}
            onClick={ () => onToggleTodo(todo) }
            aria-label="todo-span"
        >{ todo.description }</span>
        <button
            onClick={ () => onDeleteTodo(todo) }
            className={`btn btn-sm btn-danger ${ todo.done ? 'disabled':'' }`}
        >
            Eliminar
        </button>
    </li>
  )
}
