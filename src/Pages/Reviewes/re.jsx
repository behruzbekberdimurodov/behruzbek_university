import React from 'react'
import './re.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function re() {
    return (
        <>
            <div className="re_con">
                <h2 className='first_txt'>STUDENT INTERVIEWS
                </h2>
                <h1 className='txt_2'>EMPOWERING 200K+ STUDENTS</h1>
                <h1 className='txt_3'>TOWARD REAL SUCCESS</h1>
                <h3 className='txt_4'>In University.com you don’t just learn invaluable life lessons; you're joining a network of 200k+ like-minded individuals all generating real income.</h3>
                <div className="slider_video_slider">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}


                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <video src='https://youtu.be/l8KdfxxffIo?si=I4DbBz55-YZRs37I'></video>

                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
              
            </div>

        </>
    )
}

export default re
