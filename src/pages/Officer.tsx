import React, { useEffect } from 'react';
import Input from '../components/UI/common/Input';
import Select from '../components/UI/common/Select';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { officersAPI } from '../API/Query';
import { officerFields } from '../utils/fields';
import { useTypedDispatch, useTypedSelector } from '../hooks/useStore';
import { clearForm } from '../store/slices/privateFormSlice';
import { deleteOfficerSuccess, updateOfficer } from '../store/actionCreators';
import { useValidation } from '../hooks/useValidation';
import { setSuccess } from '../store/slices/loadingSlice';
import Loader from '../components/UI/common/Loader';
import Title from '../components/UI/common/Title';
import FormFooter from '../components/UI/common/FormFooter';
import { errorData } from '../types/error';

const Officer = () => {
    const params = useParams();
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const { data: officerInfo, refetch, error, isLoading } = officersAPI.useFetchOneOfficerQuery(params.id as string);
    const { privateForms: { officerData }, loading: { success, loading } } = useTypedSelector(state => state);

    // сотрудник
    const officer = officerInfo?.data;
    const [onChange] = useValidation('officer');

    // хендлер для кнопки редактирования
    const edit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await dispatch(updateOfficer(officerData, officer?._id));
        dispatch(clearForm())
        refetch();
    }

    // хендлер для кнопки удаления
    const remove = async () => {
        await dispatch(deleteOfficerSuccess(officer?._id));
    }

    // перенаправление к списку при успешном удалении
    useEffect(() => {
        dispatch(clearForm());
        if (success) {
            navigate('/officers');
            dispatch(setSuccess(false));
        };
    }, [success]);

    if (error) return <Title>{(error as errorData).data.message}</Title>
    return (
        isLoading ? <Loader />
            :
            <form
                onSubmit={edit}
                className={`${window.innerWidth > 1000 ? 'w-50' : 'w-75'} mx-auto`}>
                <Title>Сотрудник: {officer?.email}</Title>
                <Input value={officer?._id} field={officerFields.id} />
                <Input value={officer?.email} field={officerFields.email} />
                <Input
                    onChange={onChange}
                    value=''
                    field={officerFields.password} />
                <Input
                    onChange={onChange}
                    value={officer?.firstName}
                    field={officerFields.firstName} />
                <Input
                    onChange={onChange}
                    value={officer?.lastName}
                    field={officerFields.lastName} />
                <Select
                    onChange={onChange}
                    options={officer?.approved ? ['Нет'] : ['Да']}
                    value={officer?.approved ? 'Да' : 'Нет'}
                    field={officerFields.approved} />
                <FormFooter
                    name='Изменить данные'
                    disabled={Object.keys(officerData).length ? false : true}
                    onClick={remove} />
                {loading && <Loader />}
            </form>
    );
};

export default Officer;