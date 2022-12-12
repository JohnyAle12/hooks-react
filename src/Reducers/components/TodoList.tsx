import React from 'react'
import { State } from '../types'
import { TodoItem } from './TodoItem'

type Props = {
    todos: State[],
    onDeleteTodo(todo: State): void
}

export const TodoList = ({todos, onDeleteTodo}: Props) => {
  return (
    <ul className="list-group">
        { todos.map( todo => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        )) }
    </ul>
  )
}
