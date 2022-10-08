import { Card, Container } from 'react-bootstrap';
import { useTypedSelector } from '../hooks/useStore';

const Profile = () => {

    const { user } = useTypedSelector(state => state.auth);

    return (
        <Container>
            <Card className='mx-auto w-50'>
                <Card.Title>{`Имя: ${user.firstName} ${user.lastName}`}</Card.Title>
                <Card.Text>ID: {user.id}</Card.Text>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>Одобрен: {user.approved? 'да' : 'нет'}</Card.Text>
            </Card>
        </Container>
    );
};

export default Profile;