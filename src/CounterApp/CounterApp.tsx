import { useState } from 'react';
import useCounter from './hooks/useCounter';

export const CounterApp = () => {
    const [count, setCount] = useState<number>(0);
    const {count: coins, increment, deincrement} = useCounter(100);

    return (
        <>
            <h4>Counter with useState</h4>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <h4>Counter with Custom Hook</h4>
            <h6 className='text-danger'>Cantidad de monedas: {coins}</h6>
            <button onClick={ increment }>
                Agregar monedas
            </button>
            <button onClick={ deincrement }>
                Reducir monedas
            </button>
            <hr />
        </>
    );
}
