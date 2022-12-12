import React, { memo } from 'react'

type SmallProps = {
    value: number
}

//* We using the memo function to memorize the component, only when one o more properties changed, the component is executed again
//* this methos is not neccessary always, onle we saw some reason to memorize the component

export const Small = memo(({ value }: SmallProps ) => {
    console.log('Render <Small />');
    
    return (
        <span>{value}</span>
    )
})

