import { memo } from "react";

type Props = {
    increment(value: number): void
}

export const ShowIncrement = memo(({increment}: Props) => {
    console.log('ShowIncrement executed');
    
    return (
        <>
            <button 
                className='btn btn-danger m-3' 
                onClick={ () => increment(5) }
            >
                Add
            </button>
        </>
    )
})
