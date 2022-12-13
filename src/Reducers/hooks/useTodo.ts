import { useReducer, useEffect } from 'react';
import { todoReducer } from '../todoReducer';
import { Action, State } from '../types';

const init = (): [] => {
    return JSON.parse(localStorage.getItem('todos') || '') || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleNewTodo = (todo: State) => {
        const action: Action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        
        dispatch(action);
    }

    const handleDeleteTodo = (todo: State) => {
        const action: Action = {
            type: '[TODO] Remove todo',
            payload: todo
        }
        
        dispatch(action);
    }

    const handleToggleTodo = (todo: State) => {
        const action: Action = {
            type: '[TODO] Toogle todo',
            payload: todo
        }
        
        dispatch(action);
    }

    const todosCount = todos.length;
    const todosPendientCount = todos.filter( todo => todo.done ).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount,
        todosPendientCount
    }
}
