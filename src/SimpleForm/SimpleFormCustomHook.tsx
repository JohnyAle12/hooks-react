import { useEffect, useState } from 'react';
import { useForm } from './hooks/useForm';

export const SimpleFormCustomHook = () => {
    
    const { username, email, password, onInputChange, onResetForm} = useForm({
        username: 'juan.perez',
        email: '',
        password: ''
    });

    return (
        <>
            <h4>SimpleForm with Custom Hook</h4>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='UserName'
                    name='username'
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                />
                <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={onInputChange}
                />
            </form>
            <button className='btn btn-primary mt-2' onClick={ onResetForm }>
                Reset
            </button>
            <hr />
        </>
    )
}
