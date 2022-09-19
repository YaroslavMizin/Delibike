import { FC } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav } from 'react-bootstrap';

const Authorization: FC = () => {
    let authorized = false;

    return (
        <Nav>
            {authorized ?
                <>
                    <LinkContainer to='/profile'>
                        <Button className='mx-2'>Профиль</Button>
                    </LinkContainer>
                    <Button className='mx-2'>Выйти</Button>
                </>
                :
                <>
                    <LinkContainer to='/login'>
                        <Button className='mx-2'>Войти</Button>
                    </LinkContainer>
                    <LinkContainer to='/signup'>
                        <Button>Регистрация</Button>
                    </LinkContainer>
                </>
            }
        </Nav>
    );
};

export default Authorization;