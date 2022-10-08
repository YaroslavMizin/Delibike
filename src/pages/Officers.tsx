import React, { memo } from 'react';
import { Container, Spinner, Card } from 'react-bootstrap';
import { officersAPI } from '../API/Query';

const Officers = memo(() => {

    const { data: data, isLoading, error } = officersAPI.useFetchAllOfficersQuery('');

    return (
        <Container className='flex-row flex-wrap'>
            {isLoading ?
                <Spinner
                    className='mx-auto my-auto'
                    animation='border'
                    variant='primary'></Spinner>
                :
                data?.officers.map(officer =>
                    <Card
                    key={officer._id}
                    style={{ width: '18rem', padding: '5px' }}>
                        <Card.Header>
                            <Card.Text>ID: {officer._id}</Card.Text>
                        </Card.Header>
                        <Card.Text>Имя: {officer.firstName}</Card.Text>
                        <Card.Text>Фамилия: {officer.lastName}</Card.Text>
                        <Card.Text>Email: {officer.email}</Card.Text>
                        <Card.Text>ID клиента: {officer.clientId}</Card.Text>
                        <Card.Text>Одобрен: {officer.approved? 'да' : 'нет'}</Card.Text>
                    </Card>)}
            {error &&
                <h3 className='mx-auto text-light'>
                    Произошла ошибка, попробуйте обновить страницу
                </h3>}
        </Container>
    );
});

export default Officers;