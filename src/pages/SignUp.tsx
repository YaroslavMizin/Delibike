import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { signUpFields } from '../utils/fields';
import FormField from '../components/UI/FormField';

const SignUp = () => {
    return (
        <>
            <h3 className='text-center text-light'>Создание учетной записи</h3>
            <Form className='w-50 mx-auto'>
                {signUpFields.map(field =>
                    <FormField
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        key={field.label} />
                )}
                <Button>Зарегистрироваться</Button>
            </Form>
        </>
    );
};

export default SignUp;