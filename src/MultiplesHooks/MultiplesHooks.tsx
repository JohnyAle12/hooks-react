import { useFetch } from './hooks/useFetch'
import { useState } from 'react';
import useCounter from '../CounterApp/hooks/useCounter';

export const MultiplesHooks = () => {
    const { count, increment} = useCounter(1);
    const { data, isLoading } = useFetch('https://www.breakingbadapi.com/api/quotes/'+count);

    const resp = !!data && data[0];

    const onNextQuote = () => {
        increment();
    }
    
    return (
        <>
            <div>Multiples Hooks</div>
            <hr/>

            {
                isLoading 
                    ? (
                        <div className='alert alert-info'>
                            Loading ...
                        </div>
                    )
                    : (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{ resp?.quote }</p>
                            <footer className='blockquote-footer'>{ resp?.author }</footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary mt-2' onClick={ onNextQuote }>
                Next quote
            </button>
            <hr/>
        </>
    )
}
