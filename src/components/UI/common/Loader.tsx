import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation='border' className='d-block mx-auto my-auto mt-3' variant='primary'/>
    );
};

export default Loader;