import React from 'react'
import { State } from '../types'
import { TodoItem } from './TodoItem'

type Props = {
    todos: State[]
}

export const TodoList = ({todos}: Props) => {
  return (
    <ul className="list-group">
        { todos.map( todo => (
            <TodoItem key={todo.id} todo={todo} />
        )) }
    </ul>
  )
}
