import { useEffect, useState } from 'react';
import { Message } from './Message';

type User = {
    username: string,
    email: string
}

export const SimpleForm = () => {
    const [form, setForm] = useState<User>({
        username: 'johny.prieto',
        email: 'johny.prieto@mail.com'
    });

    const {username, email} = form;

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    //* The useEffect is executed when the DOM is re printed, so when change the state also is executed
    //* The second param allow dont execute the useEffect, if its empty only execute once, the first print
    useEffect(() => {
      if(!email.includes('@')){
        console.log('The email need an @');
      }
    }, [email])
    

    return (
        <>
            <h4>SimpleForm</h4>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='UserName'
                    name='username'
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                />
            </form>
            { username === 'johny' && <Message />}
            <hr />
        </>
    )
}
