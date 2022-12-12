import useCounter from '../CounterApp/hooks/useCounter';
import { useMemo, useState } from 'react';

export const MemoHook = () => {

    const {count, increment} = useCounter(1000);
    const [show, setShow] = useState(false);

    const heavyStuff = (iteratorNumber: number): string => {
        for (let index = 0; index < iteratorNumber; index++) {
            console.log('new iteration');
        }

        return iteratorNumber + 'interaciones done'
    }

    const memorizedValue = useMemo(() => heavyStuff(count), [count]);

    return (
        <>
            <h4>Memo Hook</h4>
            <div>Counter <span>{count}</span> </div>
            <h5>HeavyStuff { memorizedValue }</h5>
            <button className='btn btn-secondary m-3' onClick={increment}>
                Add
            </button>
            <button className='btn btn-secondary m-3' onClick={ () => setShow( !show )}>
                Show/Hide { JSON.stringify(show) }
            </button>

        </>
    )
}
