import { Action, State } from './types'

export const todoReducer = (
    state: State[],
    action?: Action
):State[]  => {
    switch (action?.type) {
        case '[TODO] Add todo':
            return [
                ...state,
                action.payload
            ];
        
        case '[TODO] Remove todo':
            return state.filter(todo => todo.id !== action.payload.id);
        
        case '[TODO] Toogle todo':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !action.payload.done
                    }
                }
                return todo;
            });

        case '[TODO] Update todo':
            throw new Error('This action still doesnt work.')

        default:
            return state;
        
    }
}
