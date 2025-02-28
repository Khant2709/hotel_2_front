import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {EffectCoverflow, Pagination} from 'swiper/modules';

import {getFullPathImage} from "../../../../utils/getFullPathImage";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './contentMobile.module.css';
import stylesFontsT from '../../../../styles/fonts/timesNewRoman.module.css'


const ContentMobile = ({textFirst, textSecond, images}) => {
  return (
      <div className={`${stylesFontsT.newRoman400} ${styles.wrapperContent}`}>
        <div className={styles.containerText}>
          <p>{textFirst}</p>
          <p>{textSecond}</p>
        </div>
        <ContainerSwiper images={images}/>
      </div>
  );
};

export default ContentMobile;

const ContainerSwiper = ({images}) => {
  return (
      <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.swiper}
      >
        {images.map((image, i) => {
          const pathToImage = getFullPathImage(image.image_path, image.image_name);
          return <SwiperSlide key={i} className={styles.swiperSlide}>
            <div style={{backgroundImage: `url(${pathToImage})`}} className={styles.image}/>
          </SwiperSlide>
        })}
      </Swiper>
  );
};