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
        break;
        case '[TODO] Remove todo':
            return state.filter(todo => todo.id !== action.payload.id);
        break;
        case '[TODO] Update todo':
            throw new Error('This action still doesnt work.')
        break;
    
        default:
            return state;
        
    }
}
