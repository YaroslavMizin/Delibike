import React, { memo } from 'react';
import { Offcanvas, Navbar } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useStore';
import { publicLinks, privateLinks, publicButtons } from '../../../utils/link';
import NavMobile from './NavMobile';

const NavBarMobile = memo(() => {

    const { auth } = useTypedSelector(state => state.auth);

    return (
        <>
            <Navbar.Toggle aria-controls={'canvas-navbar'}>
            </Navbar.Toggle>
            <Navbar.Offcanvas
                className={'w-50 bg-dark'}
                variant={'light'}
                id={'canvas-navbar'}
                aria-labelledby={'canvas-navbar'}
                placement={'end'}>
                <Offcanvas.Header
                    closeVariant='white'
                    closeButton>
                    <Offcanvas.Title className={'text-light'}>User</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {publicLinks.map(link =>
                        <NavMobile
                            key={link.to}
                            to={link.to}
                            name={link.name} />
                    )}
                    {auth && privateLinks.map(link =>
                        <NavMobile
                            key={link.to}
                            to={link.to}
                            name={link.name} />
                    )}
                    {auth ?
                        <>
                            <NavMobile
                                to={'/profile'}
                                name={'Профиль'} />
                             <NavMobile
                                to={'/'}
                                name={'Выйти'} />
                        </>
                        :
                        <>
                            {publicButtons.map(link =>
                                <NavMobile
                                    key={link.to}
                                    to={link.to}
                                    name={link.name} />
                            )}
                        </>
                    }
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    );
});

export default NavBarMobile;