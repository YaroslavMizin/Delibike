import React, { FC, memo } from 'react';
import { Form } from 'react-bootstrap';
import { useTypedDispatch } from '../../../hooks/useStore';
import { formfield } from '../../../utils/fields';
import { typedDispatch } from '../../../store/store';
import { officer } from '../../../types/officer';

interface SelectProps {
    onChange: (value: string, label: string) => (dispatch: typedDispatch) => void;
    field: formfield;
    options?: string[] | officer[] | any[];
    value?: string;
    dark?: boolean;
}

const Select: FC<SelectProps> = memo(({ onChange, field, options, value, dark }) => {
    const dispatch = useTypedDispatch();

    return (
        <Form.Group
            className="mb-3">
            <Form.Label className={`${dark ? 'text-dark' : 'text-light'}`}>
                {field.label} {field.required ? '*' : null}
            </Form.Label>
            <Form.Select
                defaultValue={value}
                onChange={(e) => dispatch(onChange(e.currentTarget.value, field.label))}
                required={field.required}>
                <option
                    value={value}>
                    {value}
                </option>
                { options && options.map(option =>
                        typeof options[0] === 'object' ?
                            <option
                                key={option._id}
                                value={option._id}>
                                {option.firstName && option.lastName ?
                                    option.firstName + ' ' + option.lastName :
                                    option.email}
                            </option>
                            :
                            <option
                                key={option}
                                value={option}>
                                {option}
                            </option>)}
            </Form.Select>
        </Form.Group>
    );
});

export default Select;