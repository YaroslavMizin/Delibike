import { memo } from 'react';
import { Container, Nav } from 'react-bootstrap';

const Footer = memo(() => {
    return (
        <footer className='bg-dark'>
        <Container>
            <Nav className='justify-content-end'>
                <Nav.Link className='link-light' href='https://github.com/YaroslavMizin/'>
                    Made by @github.com/YaroslavMizin
                </Nav.Link>
            </Nav>
        </Container>
    </footer>
    );
});

export default Footer;