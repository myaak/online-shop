import * as React from 'react'
import {SlideItem} from './'
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import './Slider.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = () => {
  return(
    <div className="slider">
      <div className="slider__wrapper">
        <Swiper
          height={400}
          modules={[Navigation]}
          navigation
        >
          <SwiperSlide>
            <SlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
