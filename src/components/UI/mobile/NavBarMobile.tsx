import React, { memo } from 'react';
import { Offcanvas, Navbar } from 'react-bootstrap';
import { useTypedDispatch, useTypedSelector } from '../../../hooks/useStore';
import { publicLinks, privateLinks, publicButtons } from '../../../utils/link';
import NavsMobile from './NavsMobile';

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
                        <NavsMobile
                            key={link.to}
                            to={link.to}
                            name={link.name} />
                    )}
                    {auth && privateLinks.map(link =>
                        <NavsMobile
                            key={link.to}
                            to={link.to}
                            name={link.name} />
                    )}
                    {auth ?
                        <>
                            <NavsMobile
                                to={'/profile'}
                                name={'Профиль'} />
                             <NavsMobile
                                to={'/'}
                                name={'Выйти'} />
                        </>
                        :
                        <>
                            {publicButtons.map(link =>
                                <NavsMobile
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