import { ReactNode, FC } from 'react';
import { Container} from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
           <Header/>
            <main
                className='h-25'
                style={{ flex: '1 1 auto' }}>
                <Container className='pt-5'>
                    {children}
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;