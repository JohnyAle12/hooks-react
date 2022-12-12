import React from 'react'
import { State } from '../types'
import { TodoItem } from './TodoItem'

type Props = {
    todos: State[],
    onDeleteTodo(todo: State): void,
    onToggleTodo(todo: State): void
}

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}: Props) => {
  return (
    <ul className="list-group">
        { todos.map( todo => (
            <TodoItem 
                key={todo.id} 
                todo={todo} 
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        )) }
    </ul>
  )
}
