import { Form, Button } from 'react-bootstrap';
import { logInFields } from '../utils/fields';
import FormField from '../components/UI/FormField';

const LogIn = () => {
    return (
        <>
            <h3 className='text-center text-light'>Авторизация</h3>
            <Form className='w-50 mx-auto'>
                {logInFields.map(field =>
                    <FormField
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        key={field.label} />
                )}
                <Button>Войти</Button>
            </Form>
        </>

    );
};

export default LogIn;