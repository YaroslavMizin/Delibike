import React from 'react';
import FormComp from '../components/Form';
import { signUpFields } from '../utils/fields';
import { signUp } from '../store/actionCreators';
import { useTypedSelector } from '../hooks/useStore';
import { useValidation } from '../hooks/useValidation';
import Title from '../components/UI/common/Title';

const SignUp = () => {

    const {singup} = useTypedSelector(state => state.publicForms);
    const [ onChange, onBlur, invalid] = useValidation('signup');

    return (
        <>
            <Title>Создание учетной записи</Title>
            <FormComp
                url='/officers'
                data={singup}
                invalid={invalid}
                onSubmit={signUp}
                onChange={onChange}
                onBlur={onBlur}
                fields={signUpFields}
                button='Зарегистрироваться'/>
        </>
    );
};

export default SignUp;