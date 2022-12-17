import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../../src/SimpleForm/hooks/useForm';
describe('Hook useForm', () => {
    const initialForm = {
        username: 'juan.perez',
        email: '',
        password: ''
    }

    const newUser = {
        target: {
            name: 'username',
            value: 'pedro'
        }
    }

    test('should return default data', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const { form, onInputChange, onResetForm } = result.current;

        expect(form).toEqual(initialForm);
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onResetForm).toEqual(expect.any(Function));
    })

    test('should change the username field from form', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;

        act(()=> {
            onInputChange(newUser);
        })

        expect(result.current.username).toEqual('pedro');
        expect(result.current.form.username).toEqual('pedro');
    })

    test('should reset form and return default data', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(()=> {
            onInputChange(newUser);
            onResetForm();
        })

        expect(result.current.username).toEqual('juan.perez');
        expect(result.current.form.username).toEqual('juan.perez');
    })
});