import { logInFields } from '../utils/fields';
import FormComp from '../components/Form';
import { signIn } from '../store/slices/actionCreators';
import { useTypedSelector } from '../hooks/useStore';

const LogIn = () => {

    const {auth} = useTypedSelector(state => state.form);

    return (
        <>
            <h3 className='text-center text-light'>Авторизация</h3>
            <FormComp
                data={auth}
                onSubmit={signIn}
                fields={logInFields}
                button='Войти'
                variant='login' />
        </>
    );
};

export default LogIn;