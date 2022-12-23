import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/ContextApp/context/UserContext';
import { Login } from '../../src/ContextApp/Login';

describe('<Login />', () => {
    const setUser = jest.fn();
    const user = {
        id: 123,
        name: 'Johny Prieto',
        email: 'johny.prieto@mail.com'
    }

    test('should component without user', () => {
        render(
            <UserContext.Provider value={{ user: undefined }}>
                <Login />
            </UserContext.Provider>
        )

        expect(screen.getByLabelText('user').innerHTML).toBe('Current User:  - ');
    })

    test('should call function to set user', () => {
        render(
            <UserContext.Provider value={{ user: undefined, setUser }}>
                <Login />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button', { name: 'New User'});
        fireEvent.click(button);

        expect(setUser).toHaveBeenCalled();
        expect(setUser).toHaveBeenCalledWith(user);
    })
})