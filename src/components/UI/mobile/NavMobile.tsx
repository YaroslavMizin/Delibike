import React, { FC, memo } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useTypedDispatch } from '../../../hooks/useStore';
import { logOut } from '../../../store/slices/authSlice';

interface NavMobileProps {
    to: string;
    name: string;
}

const NavMobile: FC<NavMobileProps> = memo(({ to, name }) => {

    const dispatch = useTypedDispatch();
    const location = useLocation();

    return (
        <Navbar.Collapse>
            <LinkContainer
                onClick={name === 'Выйти'? () => dispatch(logOut()) : () => {}}
                className={location.pathname == to && name !== 'Выйти'?
                    'text-light my-3'
                    :
                    'text-secondary my-3 link'}
                to={to}>
                <Nav.Link className='link'>{name}</Nav.Link>
            </LinkContainer>
        </Navbar.Collapse>

    );
});

export default NavMobile;