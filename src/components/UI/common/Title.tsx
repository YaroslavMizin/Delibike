import React, {FC} from 'react';

interface TitleProps {
    children: React.ReactNode;
}

const Title: FC<TitleProps> = ({children}) => {
    return (
        <h3 className='text-light text-center mb-5'>
            {children}
        </h3>
    );
};

export default Title;