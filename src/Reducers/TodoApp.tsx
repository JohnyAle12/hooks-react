import { useReducer, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';
import { Action, State } from './types';

const initialState: State[] = [
    {
        id: new Date().getTime(),
        description: 'Implementar planos de construcción',
        done: false
    },
    {
        id: new Date().getTime() * 2,
        description: 'Revisar financiación de cada equipo',
        done: false
    }
];

const init = (): [] => {
    return JSON.parse(localStorage.getItem('todos') || '') || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    return (
        <>
            <div>TodoApp</div>
            <div><small>Total(10) Pentientes (2)</small> </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar tarea</h4>
                    <TodoForm onNewTodo={handleNewTodo} />
                </div>
            </div>
            
        </>
    );
}
