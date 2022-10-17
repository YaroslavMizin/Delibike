import React, { FC, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { typedDispatch } from '../store/store';
import { useTypedDispatch, useTypedSelector } from '../hooks/useStore';
import { formfield, labels } from '../utils/fields';
import { useLocation, useNavigate } from 'react-router-dom';
import { setError, setSuccess } from '../store/slices/loadingSlice';
import Input from './UI/common/Input';
import Select from './UI/common/Select';
import { clearForm } from '../store/slices/publicFormSlice';
import Loader from './UI/common/Loader';
import {officer} from '../types/officer';

interface FormProps {
    onSubmit: (data: {}) => (dispatch: typedDispatch) => Promise<void>;
    onChange: (value: string, label: string) => (dispatch: typedDispatch) => void;
    onBlur?: (value: string, label: string) => void;
    invalid?: string;
    options?: string[];
    officers?: officer[];
    fields: formfield[];
    button: string;
    data: {};
    url: string;
    dark?: boolean;
}

const FormComp: FC<FormProps> = ({ button, fields, data, invalid, dark, options, officers, url, onSubmit, onChange, onBlur }) => {

    const { loading: {loadingError, success, loading}, auth: {auth} } = useTypedSelector(state => state);

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
            auth ? navigate(url) : navigate('/');
            dispatch(clearForm());
            dispatch(setSuccess(false));
        }
    }, [success, location]);

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={`${window.innerWidth < 1000 ? 'w-75' : 'w-50'} mx-auto d-flex flex-column`}>
            {fields.map(field =>
                field.select ?
                    <Select
                        dark={dark}
                        value=''
                        options={field.label == labels.officer ? officers : options}
                        key={field.label}
                        onChange={onChange}
                        field={field} />
                    :
                    <Input
                        dark={dark}
                        key={field.label}
                        onBlur={onBlur}
                        onChange={onChange}
                        field={field} />
            )}
            {invalid &&
                <Form.Text className="text-danger">
                    {invalid}
                </Form.Text>}
            {loadingError && <Form.Text className="text-danger mx-auto">
                {loadingError}
            </Form.Text>}
            <Button
                className={`mt-3 ${window.innerWidth > 1000? 'w-50' : 'w-75'} mx-auto`}
                type='submit'>
                {button}
            </Button>
            {loading && <Loader/>}
        </form>
    );
};

export default FormComp;