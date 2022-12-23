import { useContext } from 'react'
import { UserContext } from './context/UserContext';
import { ContextApp } from './types';

const newUser = {
    id: 123,
    name: 'Johny Prieto',
    email: 'johny.prieto@mail.com'
}

export const Login = () => {

    const { user, setUser } = useContext<ContextApp>(UserContext);

    return (
        <>
            <div>Login Page</div>
            <p aria-label="user">Current User: { user?.name } - { user?.email }</p>
            <button
                onClick={ () => setUser && setUser(newUser) }
                className='btn btn-primary btn-sm'
            >
                New User
            </button>
        </>
    )
}
