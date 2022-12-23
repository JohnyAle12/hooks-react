import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/Reducers/TodoApp';
import { useTodo } from '../../src/Reducers/hooks/useTodo';

jest.mock('../../src/Reducers/hooks/useTodo')

const todos = [
    {
        id:1,
        description: 'Hello world',
        done: false
    },
    {
        id:2,
        description: 'Hello world two',
        done: true
    },
]

const handleDeleteTodo = jest.fn();
const handleToggleTodo = jest.fn();
const handleNewTodo = jest.fn();

describe('<TodoApp />', () => { 
    test('should render the component sucessfuly', () => {

        useTodo.mockReturnValue({
            todos,
            handleDeleteTodo,
            handleToggleTodo,
            handleNewTodo,
            todosCount: 2,
            todosPendientCount: 1
        })

        render(<TodoApp />);

        expect(screen.getByText('Hello world')).toBeDefined();
        expect(screen.getByText('Hello world two')).toBeDefined();
        expect(screen.getByRole('textbox')).toBeDefined();
    })
})