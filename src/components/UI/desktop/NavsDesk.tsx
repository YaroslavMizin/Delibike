import { FC, memo } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap'

interface NavDeskProps {
    to: string;
    name: string;
}

const NavsDesk: FC<NavDeskProps> = memo(({ to, name }) => {
    return (
        <>
            <LinkContainer
                className='mx-5'
                to={to}>
                <Button variant='dark'>{name}</Button>
            </LinkContainer>
        </>
    );
});

export default NavsDesk;