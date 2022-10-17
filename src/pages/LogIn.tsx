import React from 'react';
import FormComp from '../components/Form';
import { logInFields } from '../utils/fields';
import { signIn } from '../store/actionCreators';
import { useTypedSelector } from '../hooks/useStore';
import { useValidation } from '../hooks/useValidation';
import Title from '../components/UI/common/Title';

const LogIn = () => {

    const [ onChange, onBlur, invalid] = useValidation('login');
    const {auth} = useTypedSelector(state => state.publicForms);

    return (
        <>
            <Title>Авторизация</Title>
            <FormComp
                data={auth}
                url='/'
                invalid={invalid}
                onSubmit={signIn}
                onChange={onChange}
                onBlur={onBlur}
                fields={logInFields}
                button='Войти'
                />
        </>
    );
};

export default LogIn;