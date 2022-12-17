import { act, renderHook } from "@testing-library/react";
import useCounter from '../../../src/CounterApp/hooks/useCounter';

describe('Hook useCounter', () => {
    test('should return default values', () => {
        const { result } =  renderHook( () => useCounter(10) );
        const {count, increment, deincrement} = result.current;
        
        expect(count).toBe(10);
        expect(increment).toEqual( expect.any(Function) );
        expect(deincrement).toEqual( expect.any(Function) );
    })

    test('should return default value 100', () => {
        const { result } =  renderHook( () => useCounter(100) );
        expect(result.current.count).toBe(100);
    })

    test('should increment the counter', () => {
        const { result } =  renderHook( () => useCounter(10) );
        const {count, increment} = result.current;

        act(() => {
            increment();
        })

        // this doesnt work because count its a new objbect, doesnt have the reference
        // expect(count).toBe(11);
        expect(result.current.count).toBe(11);
    })

    test('should decrement the counter', () => {
        const { result } =  renderHook( () => useCounter(10) );
        const {deincrement} = result.current;

        act(() => {
            deincrement();
        })

        expect(result.current.count).toBe(9);
    })

    test('should reset the counter', () => {
        const { result } =  renderHook( () => useCounter(10) );
        const {deincrement, reset} = result.current;

        act(() => {
            deincrement();
            reset();
        })

        expect(result.current.count).toBe(10);
    })
});