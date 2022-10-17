import React, { memo, useEffect } from 'react';
import { casesAPI } from '../API/Query';
import { Card, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { deleteCase } from '../store/actionCreators';
import { useTypedDispatch } from '../hooks/useStore';
import Loader from '../components/UI/common/Loader';
import Title from '../components/UI/common/Title';
import { errorData } from '../types/error';

const Cases = memo(() => {
    const dispatch = useTypedDispatch();

    const { data: cases, isLoading, error, refetch } = casesAPI.useFetchAllCasesQuery('');

    // хендлер кнопки удаления
    const remove = async (id: string) => {
        await dispatch(deleteCase(id));
        refetch();
    }

    useEffect(() => {
        refetch();
    }, [])


    if (error) return <Title>{(error as errorData).data.message}</Title>
    return (
        isLoading ?
            <Loader />
            :
            <>
                <Title>Известные случаи кражи велосипедов</Title>
                {cases?.data.map(card =>
                    <Card
                        key={card._id}
                        style={{ width: '18rem', padding: '5px' }}>
                        <Card.Header className='bg-secondary'>
                            <Card.Text className='text-light'>
                                От: {card.ownerFullName}
                            </Card.Text>
                            <Card.Text className='text-light'>
                                Статус: {card.status}
                            </Card.Text>
                        </Card.Header>
                        <Card.Text />
                        <Nav className='d-flex'>
                            <LinkContainer to={`/cases/${card._id}`}>
                                <Button className='me-3'>
                                    Перейти
                                </Button>
                            </LinkContainer>
                            <Button
                                onClick={() => remove(card._id)}
                                variant='danger'>
                                Удалить
                            </Button>
                        </Nav>
                    </Card>)}
            </>
    );
});

export default Cases;