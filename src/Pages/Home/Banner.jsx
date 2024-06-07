import banner1 from '../../assets/images/banner/banner1.jpg'
import banner2 from '../../assets/images/banner/banner2.jpg'
import banner3 from '../../assets/images/banner/banner3.jpg'
import banner4 from '../../assets/images/banner/banner4.jpg'


import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Slide from './Slide';

const Banner = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
      <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
        >
          <SwiperSlide>
         <Slide img={banner1} text='We specialise in providing resources for science, technology, engineering, and math-related subjects.' />
          </SwiperSlide>
          <SwiperSlide>
          <Slide img={banner2} text='Unlocking the Power of Education' />
          </SwiperSlide>
          <SwiperSlide>
          <Slide img={banner3} text='EduLibrary is dedicated to empowering teachers and inspiring students' />
          </SwiperSlide>
          <SwiperSlide>
          <Slide img={banner4} text=' Our collection includes worksheets, lesson plans, interactive games, and more' />
          </SwiperSlide>
        </Swiper>

      </div>
    );
};

export default Banner;