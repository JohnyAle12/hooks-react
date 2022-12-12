import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [count, setCount] = useState<number>(100);

    const increment = useCallback(
      (value: number) => {
        setCount( (count) => count + value );
      },
      [],
    )
    
    return (
        <>
            <div>CallbackHook</div>
            <div>Counter {count}</div>
            <ShowIncrement increment={increment} />
        </>
    );
}
