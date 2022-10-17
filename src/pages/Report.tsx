import React from 'react';
import { reportPublicFields, reportPrivateFields } from '../utils/fields';
import FormComp from '../components/Form';
import Title from '../components/UI/common/Title';
import { reportPublic, reportPrivate } from '../store/actionCreators';
import { useTypedSelector } from '../hooks/useStore';
import { useValidation } from '../hooks/useValidation';
import { bikeTypes } from '../utils/fields';

const Report = () => {

    const { auth } = useTypedSelector(state => state.auth);
    const { report } = useTypedSelector(state => state.publicForms);
    const [ onChange, onBlur, invalid] = useValidation('report');

    return (
        <>
            <Title>Сообщение о краже</Title>
            <FormComp
                url='/cases'
                options={bikeTypes}
                data={report}
                invalid={invalid}
                onSubmit={auth ? reportPrivate : reportPublic}
                onChange={onChange}
                onBlur={onBlur}
                fields={auth? reportPrivateFields : reportPublicFields}
                button='Сообщить о краже'/>
        </>
    );
};

export default Report;