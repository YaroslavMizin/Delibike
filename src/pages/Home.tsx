import React, {FC} from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Title from '../components/UI/common/Title';
import { images } from '../utils/images';

const Home: FC = () => {

    return (
        <>
            <Title>
                Delibike - сервис по прокату велосипедов
            </Title>
            <Carousel>
                {images.map(image =>
                    <Carousel.Item key={image.author}>
                        <Image
                            className='d-block mx-auto'
                            height='550vh'
                            width='auto'
                            src={image.url} />
                    </Carousel.Item>
                )}
            </Carousel>
            <p className='text-center text-light mt-5'>
                При возникновении проблем во время аренды, <br/>
                отправьте форму с описанием проблемы в разделе "связаться"
            </p>
        </>
    );
};

export default Home;