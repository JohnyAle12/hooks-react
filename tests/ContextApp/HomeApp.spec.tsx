import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomeApp } from '../../src/ContextApp/HomeApp';
import { UserContext } from '../../src/ContextApp/context/UserContext';

describe('<HomeApp />', () => {

    const user = {
        id: 1,
        name: 'johny',
        email: 'johny@mail.com'
    }

    test('should render component without user', () => {
        render(
            <UserContext.Provider value={{ user: undefined }}>
                <HomeApp />
            </UserContext.Provider>
        )

        expect(screen.getByLabelText('user').innerHTML).toBe('Current User:  - ');
    });

    test('should render component with user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomeApp />
            </UserContext.Provider>
        )

        expect(screen.getByLabelText('user').innerHTML).toBe(`Current User: ${user.name} - ${user.email}`);
    });
})