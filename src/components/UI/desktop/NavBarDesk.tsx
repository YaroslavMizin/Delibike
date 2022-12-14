import React, { memo } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav, Spinner } from 'react-bootstrap';
import { publicLinks, privateLinks, publicButtons } from '../../../utils/link';
import NavDesk from './NavDesk';
import { useTypedSelector, useTypedDispatch } from '../../../hooks/useStore';
import { logOut } from '../../../store/slices/authSlice';

const NavBarDesk = memo(() => {

    const { auth: { auth, user }, loading: { loading } } = useTypedSelector(state => state);
    const dispatch = useTypedDispatch();

    return (
        <>
            <Nav className='flex-grow-1'>
                {publicLinks.map(link =>
                    <NavDesk
                        key={link.to}
                        to={link.to}
                        name={link.name} />)}
                {auth && privateLinks.map(link =>
                    <NavDesk
                        key={link.to}
                        to={link.to}
                        name={link.name} />)}
            </Nav>
            <Nav>
                {auth ?
                    <>
                        {loading ?
                            <Spinner animation='border' variant='primary' className='me-3'/>
                            :
                            <LinkContainer to='/profile'>
                                <Button className='mx-2'>{user.firstName || user.email}</Button>
                            </LinkContainer>}
                        <Button
                            onClick={() => dispatch(logOut())}
                            className='mx-2'>Выйти</Button>
                    </>
                    :
                    <>
                        {publicButtons.map(button =>
                            <LinkContainer
                                key={button.to}
                                to={button.to}>
                                <Button className='mx-2'>{button.name}</Button>
                            </LinkContainer>
                        )}
                    </>}
            </Nav >
        </>
    );
});

export default NavBarDesk;