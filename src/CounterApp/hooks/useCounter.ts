import { useState } from 'react';
 
const useCounter = (initialCoins:  number) => {
    const [coins, setCoins] = useState<number>(initialCoins);

    const increment = () => {
        setCoins((coins) => coins+1)
    }

    const deincrement = () => {
        setCoins((coins) => coins-1)
    }

    return {
        coins,
        increment,
        deincrement
    }
}
export default useCounter;