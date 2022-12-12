import { State } from '../types'
import { useState } from 'react';

type Props = {
    onNewTodo(todos: State): void
}

export const TodoForm = ({onNewTodo}: Props) => {

    const [input, setInput] = useState('');

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim().length < 1) return;

        onNewTodo({
            id: new Date().getTime(),
            description: input,
            done: false
        });
        setInput('');
    }

    return (
        <form onSubmit={ (e) => onSubmitForm(e) } aria-label="form">
            <input
                type="text"
                className="form-control"
                placeholder='Que hay que hacer?'
                value={input}
                onChange={ (e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    );
}
