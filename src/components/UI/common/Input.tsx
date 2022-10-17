import React, { FC, memo } from 'react';
import { Form } from 'react-bootstrap';
import { useTypedDispatch } from '../../../hooks/useStore';
import { formfield, labels } from '../../../utils/fields';
import { typedDispatch } from '../../../store/store';

interface InputProps {
    onBlur?: (value: string, label: string) => void;
    onChange?: (value: string, label: string) => (dispatch: typedDispatch) => void;
    field: formfield;
    value?: string | null;
    disabled?: boolean;
    dark?: boolean;
}

const Input: FC<InputProps> = memo(({ onBlur, onChange, field, value, disabled, dark }) => {
    
    const dispatch = useTypedDispatch();

    return (
        <>
            <Form.Group
                key={field.label}
                className="mb-3">
                <Form.Label className={`${dark? 'text-dark' : 'text-light'}`}>
                    {field.label} {field.required ? '*' : null}
                </Form.Label>
                <Form.Control
                    autoComplete={field.autocomplete? '' : 'new-password'}
                    defaultValue={value? value : undefined}
                    as={field.as}
                    className={`${field.label === labels.info && 'info-input'}`}
                    onBlur={
                        onBlur?
                        (e) => field.required && onBlur(e.currentTarget.value, field.label) :
                        () => {}
                    }
                    onChange={
                        onChange?
                        (e) => dispatch(onChange(e.currentTarget.value, field.label)) :
                        () => {}
                    }
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={disabled || field.disabled} />
            </Form.Group>
        </>
    );
});

export default Input;