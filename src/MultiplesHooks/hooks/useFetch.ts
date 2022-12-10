import { useState, useEffect } from 'react';
import { BreakingBadResponse } from '../../types/BreakingBadResponse';

type State = {
    data: BreakingBadResponse[],
    isLoading: boolean,
    hasErrors?: boolean
}

export const useFetch = ( url: string ) => {

    const [state, setState] = useState<State>({
        data: [],
        isLoading: true,
        hasErrors: false
    })

    //! At this date the endpoint the breaking bad doesnt work, it return 500 error so the data return is a test example json 
    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
        })

        try {
            const resp = await fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Something went wrong.');
                    }
                    return response;
                });
            const data = await resp.json().then((res) => {
                if(!res.author){
                    return {
                        author: 'test',
                        quote: 'test',
                        quote_id: 1,
                        series: 'test'
                    }
                }
                return res;
            });

            setState({
                data,
                isLoading: false,
                hasErrors: false
            })
        } catch (error) {
            setState({
                data: [{
                    author: 'test',
                    quote: 'test',
                    quote_id: 1,
                    series: 'test'
                }],
                isLoading: false,
                hasErrors: false
            })
        }
    }

    useEffect(() => {
        getFetch();
        console.log(url);
        
    }, [url])
    

    return {
        ...state
    }
}
