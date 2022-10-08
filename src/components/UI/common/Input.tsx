import React, { FC, memo } from 'react';
import { Form } from 'react-bootstrap';
import { useTypedDispatch } from '../../../hooks/useStore';
import { formfield, labels } from '../../../utils/fields';
import { typedDispatch } from '../../../store/store';


interface InputProps {
    onBlur: (value: string, label: string) => void;
    onChange: (value: string, label: string) => (dispatch: typedDispatch) => void;
    field: formfield;
}

const Input: FC<InputProps> = memo(({ onBlur, onChange, field }) => {
    const dispatch = useTypedDispatch();

    return (
        <Form.Control
            as={field.as}
            className={`${field.label === labels.info && 'info-input'}`}
            onBlur={(e) => field.required && onBlur(e.currentTarget.value, field.label)}
            onChange={(e) => dispatch(onChange(e.currentTarget.value, field.label))}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required} />
    );
});

export default Input;