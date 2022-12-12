import useCounter from '../CounterApp/hooks/useCounter';
import { Small } from './Small'
import { useState } from 'react';

export const Memorize = () => {

    const {count, increment} = useCounter(0);
    const [show, setShow] = useState(false)

    return (
        <>
            <h4>Memorize</h4>
            <div>Counter <Small value={count} /> </div>
            <button className='btn btn-secondary m-3' onClick={increment}>
                Add
            </button>
            <button className='btn btn-secondary m-3' onClick={ () => setShow( !show )}>
                Show/Hide { JSON.stringify(show) }
            </button>

        </>
    )
}
