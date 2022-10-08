import { Carousel, Image } from 'react-bootstrap';
import { images } from '../utils/images';

const Home = () => {

    return (
        <>
            <h3 className='text-center text-light mb-5'>
                Delibike - сервис по прокату велосипедов
            </h3>
            <Carousel>
                {images.map(image =>
                    <Carousel.Item
                        key={image.author}>
                        <Image className='d-block mx-auto'
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