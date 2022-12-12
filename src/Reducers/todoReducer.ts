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
        case 'Revisar financiación de cada equipo':
            throw new Error('This action still doesnt work.')
        break;
    
        default:
            return state;
        
    }
}
