import React from 'react';
import { TodoItem } from '../../../src/Reducers/components/TodoItem';
import { fireEvent, render, screen } from '@testing-library/react';

const todo = {
    id:1,
    description: 'Hello world',
    done: false
}

const onDeleteTodo = jest.fn();
const onToggleTodo = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
})

describe('<TodoItem />', () => {
    test('should render susesfully ', () => {
        render(
            <TodoItem
                todo={todo} 
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        )
        expect(screen.getByText('Hello world')).toBeDefined();
        expect(screen.getByRole('button', {name: 'Eliminar'})).toBeDefined();
    })

    test('should call the onDeleteTodo function', () => {
        render(
            <TodoItem
                todo={todo} 
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        )

        const deleteButton = screen.getByRole('button', {name: 'Eliminar'});
        fireEvent.click(deleteButton);

        expect(onDeleteTodo).toHaveBeenCalledWith(todo);
    })

    test('should call the onToggleTodo function', () => {
        render(
            <TodoItem
                todo={todo} 
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        )

        const item = screen.getByLabelText('todo-span');
        fireEvent.click(item);

        expect(onToggleTodo).toHaveBeenCalledWith(todo);
    })

    test('should have the item strikethrough when item is done', () => {
        render(
            <TodoItem
                todo={{
                    ...todo,
                    done: true
                }} 
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        )
        const item = screen.getByLabelText('todo-span');
        expect(item.className).toContain('text-decoration-line-through');
    })

    test('should have the delete button disable when item is done', () => {
        render(
            <TodoItem
                todo={{
                    ...todo,
                    done: true
                }} 
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        )
        const deleteButton = screen.getByRole('button', {name: 'Eliminar'});
        expect(deleteButton.className).toContain('disabled');
    })
})