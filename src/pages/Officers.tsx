import React, { memo, useState, useEffect } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { officersAPI } from '../API/Query';
import { useTypedSelector, useTypedDispatch } from '../hooks/useStore';
import { useValidation } from '../hooks/useValidation';
import { createOfficer, deleteOfficer } from '../store/actionCreators';
import { setError, setSuccess } from '../store/slices/loadingSlice';
import { clearForm } from '../store/slices/privateFormSlice';
import { approvedTypes, newOfficerFields } from '../utils/fields';
import Loader from '../components/UI/common/Loader';
import Title from '../components/UI/common/Title';
import FormComp from '../components/Form';
import { errorData } from '../types/error';

const Officers = memo(() => {
    const dispatch = useTypedDispatch();

    const { privateForms: { officerData },
        loading: { success, loadingError } } = useTypedSelector(state => state);

    const { data: data, isLoading, error, refetch } = officersAPI.useFetchAllOfficersQuery('');

    const approvedOfficers = data?.officers.
        filter(officer => officer.approved === true);

    // стейт модального окна
    const [show, setShow] = useState(false);

    // хендлер для кнопки модалки
    const handleShow = () => {
        show ? setShow(false) : setShow(true);
        dispatch(setError(''));
    }

    // хендлер для кнопки удаления сотрудника
    const remove = async (id: string) => {
        await dispatch(deleteOfficer(id));
        refetch();
    }

    // закрытие модалки при успешном запросе на добавление
    useEffect(() => {
        dispatch(setError(''));
        if (success && !loadingError) {
            handleShow();
            dispatch(clearForm());
            dispatch(setSuccess(false));
            refetch();
        }
    }, [success]);

    useEffect(() => {
        refetch()
    }, []);

    const [onChange, onBlur, invalid] = useValidation('officer');

    if(error) return <Title>{(error as errorData).data.message}</Title>
    return (
        <Container className='flex-row flex-wrap w-75'>
            {isLoading ?
                <Loader />
                :
                <>
                    <Title>Список сотрудников</Title>
                    <Button onClick={handleShow}>
                        Добавить сотрудника
                    </Button>
                    <Table striped bordered hover className='bg-light mt-3'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>email</th>
                                <th></th>
                            </tr>
                        </thead>
                        {data?.officers.map((officer, index) =>
                            <tbody key={officer._id}>
                                <tr style={{ cursor: 'pointer' }}>
                                    <td>{index + 1}</td>
                                    <LinkContainer to={`/officers/${officer._id}`}>
                                        <td className='pe-auto'>{officer.email}</td>
                                    </LinkContainer>
                                    {window.innerWidth > 1000 &&
                                        <td>
                                            <Button
                                                onClick={() => remove(officer._id)}
                                                variant='danger'>
                                                Удалить
                                            </Button>
                                        </td>
                                    }
                                </tr>
                            </tbody>
                        )}
                    </Table>
                    {loadingError && <p className='text-danger'>{loadingError}</p>}
                    <Modal
                        variant='primary'
                        show={show}
                        onHide={handleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>Добавить сотрудника</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormComp
                                url='/officers'
                                data={officerData}
                                onSubmit={createOfficer}
                                onChange={onChange}
                                fields={newOfficerFields}
                                button={'Создать сотрудника'}
                                options={approvedTypes}
                                officers={approvedOfficers}
                                dark />
                        </Modal.Body>
                    </Modal>
                </>
            }
            {error &&
                <Title>
                    Произошла ошибка, попробуйте обновить страницу
                </Title>}
        </Container>
    );
});

export default Officers;