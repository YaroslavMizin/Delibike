import React, { FC, memo } from 'react';
import { Container, Nav } from 'react-bootstrap';

const Footer: FC = memo(() => {
    return (
        <footer className='bg-dark'>
            <Container>
                <Nav className='justify-content-end'>
                    <Nav.Link
                        className='link-light'
                        href='https://github.com/YaroslavMizin/SF-final'
                        target={'_blank'}>
                        Made by @github.com/YaroslavMizin
                    </Nav.Link>
                </Nav>
            </Container>
        </footer>
    );
});

export default Footer;