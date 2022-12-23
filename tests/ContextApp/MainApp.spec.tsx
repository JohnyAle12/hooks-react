import React from 'react';
import { render, screen } from "@testing-library/react"
import { MainApp } from '../../src/ContextApp/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('<MainApp />', () => {
    test('should show the home page', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('HomeApp')).toBeTruthy()
    })

    test('should show the login page', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('Login Page')).toBeTruthy()
    })
})