import { useEffect, useState } from 'react';

type Coor = {
    x: number,
    y: number
}

export const Message = () => {
    const [coor, setCoor] = useState<Coor>({
        x:0,
        y:0
    });

    useEffect(() => {
        const onMouseMove = ({x, y}: MouseEvent) => {
            setCoor({x, y});
        };

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])
    
    return (
        <>
            <h6 className='text-success'>El usuasrio existe</h6>
            { JSON.stringify(coor) }
        </>
    );
}
