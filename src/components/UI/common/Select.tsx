import React, { FC, memo } from 'react';
import { Form } from 'react-bootstrap';
import { useTypedDispatch } from '../../../hooks/useStore';
import {formfield, bikeTypes} from '../../../utils/fields';
import { typedDispatch } from '../../../store/store';

interface SelectProps {
    onChange: (value: string, label: string) => (dispatch: typedDispatch) => void;
    field: formfield;
}

const Select: FC<SelectProps> = memo(({onChange, field}) => {
    const dispatch = useTypedDispatch();

    return (
        <Form.Select
            defaultValue={''}
            onChange={(e) => dispatch(onChange(e.currentTarget.value, field.label))}
            required={field.required}>
            <option></option>
            {bikeTypes.map(type =>
                <option
                    key={type}
                    value={type}>
                    {type}
                </option>)}
        </Form.Select>
    );
});

export default Select;