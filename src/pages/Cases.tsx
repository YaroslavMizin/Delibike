import React, { memo } from 'react';
import { casesAPI } from '../API/Query';
import { Container, Card, Spinner, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Cases = memo(() => {

    const { data: cases, isLoading, error } = casesAPI.useFetchAllCasesQuery('');
    return (

        <Container className='d-flex gap-3 flex-wrap'>
            {isLoading ?
                <Spinner
                    className='mx-auto my-auto'
                    animation='border'
                    variant='primary'></Spinner>
                :
                cases?.data.map(card =>
                    <Card style={{ width: '18rem', padding: '5px' }}>
                        <Card.Header className='bg-secondary'>
                            <Card.Text className='text-light'>ID: {card._id}</Card.Text>
                            <Card.Text className='text-light'>Статус: {card.status}</Card.Text>
                        </Card.Header>
                        <Card.Text>Дата сообщения: {card.createdAt}</Card.Text>
                        <Card.Text>Номер лицензии: {card.licenseNumber}</Card.Text>
                        <Card.Text>Владелец: {card.ownerFullName}</Card.Text>
                        <Nav className='d-flex'>
                            <LinkContainer to={`/cases/${card._id}`}>
                                <Button className='me-3'>Перейти</Button>
                            </LinkContainer>
                            <Button variant='danger'>Удалить</Button>
                        </Nav>
                    </Card>)}
            {error &&
                <h3 className='mx-auto text-light'>
                    Произошла ошибка, попробуйте обновить страницу
                </h3>}
        </Container>
    );
});

export default Cases;