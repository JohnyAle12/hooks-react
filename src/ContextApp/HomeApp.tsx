import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomeApp = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <div>HomeApp</div>
            <span>Current User: { user?.name } - { user?.email }</span>
        </>
    )
}
