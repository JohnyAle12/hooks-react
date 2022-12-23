import { todoReducer } from '../../src/Reducers/todoReducer';

const initialState = [{
    id: 1,
    description: 'Inicial',
    done: false
}]

describe('Test to todoReducer', () => {
    test('should return the initial state', () => {
        const newState = todoReducer(initialState);
        expect(newState).toBe(initialState);
    })

    test('should add a todo', () => {
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain( action.payload );
    })

    test('should delete a todo', () => {
        const action = {
            type: '[TODO] Remove todo',
            payload: initialState[0]
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })

    test('should toggle a todo', () => {
        const action = {
            type: '[TODO] Toogle todo',
            payload: initialState[0]
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBeTruthy();
    })
})