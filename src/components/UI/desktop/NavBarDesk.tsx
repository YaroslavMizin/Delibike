import { memo } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav } from 'react-bootstrap';
import { publicLinks, privateLinks, publicButtons } from '../../../utils/link';
import NavsDesk from './NavsDesk';
import { useTypedSelector, useTypedDispatch } from '../../../hooks/useStore';
import { logOut } from '../../../store/slices/authSlice';

const NavBarDesk = memo(() => {

    const { auth, user } = useTypedSelector(state => state.auth);
    const dispatch = useTypedDispatch();

    return (
        <>
            <Nav className='flex-grow-1'>
                {publicLinks.map(link =>
                    <NavsDesk
                        key={link.to}
                        to={link.to}
                        name={link.name} />)}
                {auth && privateLinks.map(link =>
                    <NavsDesk
                        key={link.to}
                        to={link.to}
                        name={link.name} />)}
            </Nav>
            <Nav>
                {auth?
                    <>
                        <LinkContainer to='/profile'>
                            <Button className='mx-2'>{user.firstName}</Button>
                        </LinkContainer>
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