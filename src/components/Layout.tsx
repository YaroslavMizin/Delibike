import { ReactNode, FC } from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Authorization from './UI/Authorization';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <Navbar bg='dark' variant='dark' expand='lg'>
                    <Container className='justify-content-around'>
                        <Nav className='flex-column'>
                            <Image height='30px'
                                src='https://svgsilh.com/svg/1828549-ffffff.svg' />
                            <Nav.Item className='text-light'>Delibike</Nav.Item>
                        </Nav>
                        <LinkContainer to='/'>
                            <Button variant='secondary'>Главная</Button>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Button variant='secondary'>Связаться</Button>
                        </LinkContainer>
                        <Authorization/>
                    </Container>
                </Navbar>
            </header>
            <main
                className='h-25'
                style={{ flex: '1 1 auto' }}>
                <Container className='pt-5'>
                    {children}
                </Container>
            </main>
            <footer className='bg-dark'>
                <Container>
                    <Nav className='justify-content-end'>
                        <Nav.Link className='link-light' href='https://github.com/YaroslavMizin/'>
                            Made by @github.com/YaroslavMizin
                        </Nav.Link>
                    </Nav>
                </Container>
            </footer>
        </>
    );
};

export default Layout;