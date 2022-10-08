import { signUpFields } from '../utils/fields';
import FormComp from '../components/Form';
import { signUp } from '../store/slices/actionCreators';
import { useTypedSelector } from '../hooks/useStore';

const SignUp = () => {

    const {singup} = useTypedSelector(state => state.form)

    return (
        <>
            <h3 className='text-center text-light'>Создание учетной записи</h3>
            <FormComp
                data={singup}
                onSubmit={signUp}
                fields={signUpFields}
                button='Зарегистрироваться'
                variant='signup' />
        </>
    );
};

export default SignUp;