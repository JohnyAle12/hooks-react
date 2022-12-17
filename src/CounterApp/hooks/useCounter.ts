import { useState } from 'react';
 
const useCounter = (initialCount: number) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        setCount((count) => count+1)
    }

    const deincrement = () => {
        setCount((count) => count-1)
    }

    const reset = () => {
        setCount(initialCount);
    }

    return {
        count,
        increment,
        deincrement,
        reset
    }
}
export default useCounter;