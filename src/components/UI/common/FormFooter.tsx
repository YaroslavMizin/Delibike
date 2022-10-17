import React, {FC} from 'react';
import { Container, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

interface FormFooterProps {
    disabled: boolean;
    onClick: () => Promise<void>;
    name: string;
}

const FormFooter: FC<FormFooterProps> = ({name, disabled, onClick}) => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate(-1);
    }
    
    return (
        <Container className='d-flex justify-content-center gap-3'>
                <Button onClick={redirect}>
                    Назад
                </Button>
            <Button
                disabled={disabled}
                type='submit'>
                {name}
            </Button>
            <Button
                onClick={onClick}
                variant='danger'>
                Удалить
            </Button>
        </Container>
    );
};

export default FormFooter;