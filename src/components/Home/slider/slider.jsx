import React, { useState, useEffect } from 'react';
import SwiperButton from './SwiperButton';
import styles from './styles/slider.module.css';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/slider1')
            .then(
                res => setData(res.data)
            ).catch(error => console.log(error));
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.map((pro, id) => (
                        <SwiperSlide key={id}>
                            <div className={styles.slider}>
                                <div className={styles.slid}>

                                    <div className={styles.div_slider}>
                                        <div className={styles.img_slider}>
                                            <img src={pro.imageUrl2} alt="error in img" />
                                            <img src={pro.imageUrl3} alt="error in img" />
                                            <img src={pro.imageUrl1} alt="error in img" />
                                        </div>


                                        <div className={styles.desc_slider}>
                                            <div className={styles.div_desc}>
                                                <p>{pro.text1}</p>
                                                <h3>{pro.text2}</h3>
                                                <p>{pro.text3}</p>
                                                <Link to={'/Products'}>أكتشف الأن</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <SwiperButton />
            </Swiper>


        </>
    )
}

export default Slider