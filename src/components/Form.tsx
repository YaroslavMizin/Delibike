import { FC, useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { typedDispatch } from '../store/store';
import { useTypedDispatch, useTypedSelector } from '../hooks/useStore';
import { useValidation } from '../hooks/useValidation';
import { formfield } from '../utils/fields';
import { useLocation, useNavigate } from 'react-router-dom';
import { setError, setSuccess } from '../store/slices/loadingSlice';
import Input from './UI/common/Input';
import Select from './UI/common/Select';
import { clearForm } from '../store/slices/formSlice';

interface FormProps {
    onSubmit: (data: {}) => (dispatch: typedDispatch) => Promise<void>;
    fields: formfield[];
    variant: string;
    button: string;
    data: {};
}

const FormComp: FC<FormProps> = ({ variant, button, fields, data, onSubmit }) => {

    const [invalid, onBlur, onChange] = useValidation(variant);
    const { error, success, loading } = useTypedSelector(state => state.loading);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await dispatch(onSubmit(data));
    }

    useEffect(() => {
        dispatch(setError(''));
        if (success) {
            navigate('/');
            dispatch(clearForm());
            dispatch(setSuccess(false));
        }
    }, [success, location]);

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={`${window.innerWidth < 1000 ? 'w-75'
                : 'w-50'} mx-auto d-flex flex-column`}>
            {fields.map(field =>
                <Form.Group
                    key={field.label}
                    className="mb-3">
                    <Form.Label className='text-light'>
                        {field.label} {field.required ? '*' : null}
                    </Form.Label>
                    {field.select ?
                        <Select onChange={onChange} field={field} />
                        :
                        <Input onBlur={onBlur} onChange={onChange} field={field} />}
                </Form.Group>)}
            {invalid &&
                <Form.Text className="text-danger">
                    {invalid}
                </Form.Text>}
            {error && <Form.Text className="text-danger mx-auto">
                {error}
            </Form.Text>}
            <Button
                className='mt-3 w-50 mx-auto'
                type='submit'>
                {button}
            </Button>
            {loading && <Spinner
                animation='border'
                variant='primary'
                className='mx-auto mt-3' />}
        </form>
    );
};

export default FormComp;