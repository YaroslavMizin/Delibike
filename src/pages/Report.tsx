import { reportPublicFields, reportPrivateFields } from '../utils/fields';
import FormComp from '../components/Form';
import { reportPublic, reportPrivate } from '../store/slices/actionCreators';
import { useTypedSelector } from '../hooks/useStore';

const Report = () => {

    const { auth } = useTypedSelector(state => state.auth);
    const { report } = useTypedSelector(state => state.form)

    return (
        <>
            <h3 className='text-center text-light'>Сообщение о краже</h3>
            <FormComp
                data={report}
                onSubmit={auth ? reportPrivate : reportPublic}
                fields={auth? reportPrivateFields : reportPublicFields}
                button='Сообщить о краже'
                variant='report' />
        </>
    );
};

export default Report;