import React, { fireEvent, render, screen } from "@testing-library/react"
import { useFetch } from "../../src/MultiplesHooks/hooks/useFetch";
import { MultiplesHooks } from '../../src/MultiplesHooks/MultiplesHooks';
import useCounter from '../../src/CounterApp/hooks/useCounter';

jest.mock('../../src/CounterApp/hooks/useCounter')
jest.mock('../../src/MultiplesHooks/hooks/useFetch')

beforeEach(() => {
    jest.clearAllMocks();
});

describe('<MultiplesHooks/>', () => {

    //* This mock config run for each test
    const increment = jest.fn();
    useCounter.mockReturnValue({
        count: 1,
        increment
    })

    test('should render the componente sussesfuly', () => {
        //! consider that the endpoint to breaking bad quotes doesnt work
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasErrors: false
        })

        render(<MultiplesHooks />);

        expect(screen.getAllByText('Multiples Hooks').length).toBeDefined();
        expect(screen.getByText('Loading ...')).toBeDefined();

        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        expect(nextButton).toBeDefined();
    })

    test('should shw a quote', () => {
        useFetch.mockReturnValue({
            data: [{
                quote: 'hello world',
                author: 'johny'
            }],
            isLoading: false,
            hasErrors: false
        })

        render(<MultiplesHooks />);

        expect(screen.getByText('hello world')).toBeDefined();
        expect(screen.getByText('johny')).toBeDefined();
    })

    test('should to claa the increment function', () => {
        useFetch.mockReturnValue({
            data: [{
                quote: 'hello world',
                author: 'johny'
            }],
            isLoading: false,
            hasErrors: false
        })

        render(<MultiplesHooks />);

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        expect(increment).toHaveBeenCalled()
    })
})