import React, { FC, useEffect } from 'react';
import Input from '../components/UI/common/Input';
import Select from '../components/UI/common/Select';
import Loader from '../components/UI/common/Loader';
import { Container } from 'react-bootstrap';
import { casesAPI, officersAPI } from '../API/Query';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { caseFields } from '../utils/fields';
import { statusTypes } from '../utils/fields';
import { useValidation } from '../hooks/useValidation';
import { useTypedDispatch, useTypedSelector } from '../hooks/useStore';
import { deleteCase, editCase } from '../store/actionCreators';
import { clearForm } from '../store/slices/privateFormSlice';
import { setSuccess } from '../store/slices/loadingSlice';
import Title from '../components/UI/common/Title';
import FormFooter from '../components/UI/common/FormFooter';
import { errorData } from '../types/error';

const Case: FC = () => {

    const params = useParams();
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const { data: robberyCaseData, isLoading, error, refetch } = casesAPI.useFetchOneCaseQuery(params.id as string);
    const { data: officersData } = officersAPI.useFetchAllOfficersQuery('');

    // информация сообщения
    const robberyCase = robberyCaseData?.data;

    // опции статуса без текущего статуса
    const status = statusTypes.filter(status => status !== robberyCase?.status);

    // список сотрудников без текущего сотрудника
    const officers = officersData?.officers.
        filter(officer => officer.approved === true &&
            officer._id !== robberyCase?.officer);

    //текущий ответственный сотрудник
    const currentOfficer = officersData?.officers.
        find(officer => officer._id === robberyCase?.officer);

    const { privateForms: { robberyData },
        loading: { loadingError, loading, success } } = useTypedSelector(state => state);

    // хендлер для кнопки редактирования данных
    const edit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await dispatch(editCase(robberyData, robberyCase?._id));
        dispatch(clearForm());
        dispatch(setSuccess(false));
        refetch();
    }

    // хендлер для кнопки удаления
    const remove = async () => {
        await dispatch(deleteCase(robberyCase?._id));
    }

    useEffect(() => {
        dispatch(clearForm());
        if (success) {
            navigate('/cases');
            dispatch(setSuccess(false));
        };
    }, [success]);

    useEffect(() => {
        refetch();
    }, []);

    const [onChange, onBlur, invalid] = useValidation('case');

    if (error) {
        return <Title>{(error as errorData).data.message}</Title>
    }
    return (
        isLoading ? <Loader />
            :
            <form
                onSubmit={edit}
                className={`${window.innerWidth > 1000 ? 'w-50' : 'w-100'} mx-auto overflow-auto`}>
                <Title>От: {robberyCase?.ownerFullName}</Title>
                <Container className='overflow-auto  my-3' style={{ maxHeight: '65vh' }}>
                    <Input value={robberyCase?._id} field={caseFields.id}></Input>
                    <Input value={robberyCase?.clientId} field={caseFields.clientId} />
                    <Input value={robberyCase?.createdAt} field={caseFields.createdAt} />
                    <Input value={robberyCase?.updatedAt} field={caseFields.updatedAt} />
                    <Input
                        onChange={onChange}
                        value={robberyCase?.licenseNumber}
                        field={caseFields.licenseNumber} />
                    <Input
                        onChange={onChange}
                        value={robberyCase?.date}
                        field={caseFields.date} />
                    <Input
                        onChange={onChange}
                        value={robberyCase?.ownerFullName}
                        field={caseFields.fullname} />
                    <Select
                        onChange={onChange}
                        value={robberyCase?.type}
                        options={robberyCase?.type === 'sport' ? ['general'] : ['sport']}
                        field={caseFields.type} />
                    <Input
                        onChange={onChange}
                        value={robberyCase?.color}
                        field={caseFields.color} />
                    <Select
                        onChange={onChange}
                        value={currentOfficer?.firstName && currentOfficer.lastName ?
                            currentOfficer.firstName + ' ' + currentOfficer.lastName
                            :
                            currentOfficer?.email}
                        options={officers}
                        field={caseFields.officer} />
                    <Input onChange={onChange}
                        value={robberyCase?.description}
                        field={caseFields.description} />
                    <Select
                        onChange={onChange}
                        value={robberyCase?.status}
                        options={status}
                        field={caseFields.status} />
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={robberyData.status !== 'done'}
                        value={robberyCase?.resolution}
                        field={caseFields.resolution} />
                </Container>
                {loadingError && <p className='text-danger text-center'>{loadingError}</p>}
                {invalid && <p className='text-danger text-center'>{invalid}</p>}
                <FormFooter
                    name='Редактировать'
                    disabled={Object.keys(robberyData).length ? false : true}
                    onClick={remove} />
                {loading && <Loader />}
            </form>
    );
};

export default Case;