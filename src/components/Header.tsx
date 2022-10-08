import { memo } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import NavBarDesk from './UI/desktop/NavBarDesk';
import AuthorizationAndNavs from './UI/mobile/NavBarMobile';

const Header = memo(() => {

    const w = window.innerWidth;

    return (
        <header>
            <>
                <Navbar
                    collapseOnSelect
                    bg='dark'
                    variant='dark'
                    expand={w > 1000 ? true : ''}>
                    <Container
                        className={'justify-content-between'}>
                        <Nav className='flex-column me-5'>
                            <Image height='30px'
                                src='https://svgsilh.com/svg/1828549-ffffff.svg' />
                            <Nav.Item className='text-light'>Delibike</Nav.Item>
                        </Nav>
                        {w > 1000 ?
                            <NavBarDesk />
                            :
                            <AuthorizationAndNavs />
                        }
                    </Container>
                </Navbar>
            </>
        </header>
    );
});

export default Header;