import React, { FC } from 'react';
import { Container, Card } from 'react-bootstrap';
import { casesAPI } from '../API/Query';
import { useParams } from 'react-router';


const Case: FC = () => {

    const params = useParams();
    const { data: robberyCase, isLoading, error } = casesAPI.useFetchOneCaseQuery(params.id as string);
    const info = robberyCase?.data;

    return (
        <Container>
            <Card className='w-50 mx-auto'>
                <Card.Header>
                    <Card.Title>{}</Card.Title>
                </Card.Header>
            </Card>
        </Container>
    );
};

export default Case;