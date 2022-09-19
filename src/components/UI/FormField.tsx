import { FC } from 'react';
import { Form } from 'react-bootstrap';
import { bikeTypes } from '../../utils/fields'

interface FormFieldProps {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    select?: boolean;
}

const FormField: FC<FormFieldProps> = ({ label, type, placeholder, required, select }) => {
    return (
        <Form.Group
            key={label}
            className="mb-3">
            <Form.Label className='text-light'>{label}</Form.Label>
            {select ?
                <Form.Select
                required={required}>
                    {bikeTypes.map(type =>
                        <option
                        key={type}
                        value={type}>
                            {type}
                        </option>)}
                </Form.Select>
                :
                <Form.Control
                type={type}
                placeholder={placeholder}
                required={required} />}
            {required &&
                <Form.Text className="text-muted">
                    Обязательное поле
                </Form.Text>}
        </Form.Group>
    );
};

export default FormField;