import react from 'react';

type State = {
    id: number,
    todo: string,
    done: boolean
}

type Action = {
    type: string,
    payload: State
}

const initialState: State[] = [
    {
        id:1,
        todo: 'Implementar planos de construcción',
        done:  false
    }
];

const todoReducer = (
    state: State[] = initialState,
    action?: Action
) => {

    if (action?.type === '[TODO] add todo') {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'Revisar financiación de cada equipo',
    done:  false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);
