import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { reportFields } from '../utils/fields';
import FormField from '../components/UI/FormField';

const Report = () => {
    return (
        <>
            <h3 className='text-center text-light'>Сообщение о краже</h3>
            <Form className='w-50 mx-auto'>
                {reportFields.map(field =>
                    <FormField
                        select={field.select}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        key={field.label} />
                )}
                <Button>Сообщить о краже</Button>
            </Form>
        </>

    );
};

export default Report;