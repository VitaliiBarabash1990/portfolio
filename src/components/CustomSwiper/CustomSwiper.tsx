'use client';

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './CustomSwiper.module.css';
import {Project} from '@/types/types';

type Props = {
  setActiveProject: (project: Project) => void;
  projects: Project[];
};

const CustomSwiper = ({setActiveProject, projects}: Props) => {
  return (
    <div className={s.sliderContainer}>
      <Swiper
        className={s.swiper}
        // spaceBetween={20}
        // slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        modules={[Navigation]}
        loop={true}
        onSlideChange={(swiper) => {
          setActiveProject(projects[swiper.realIndex]); // Передаємо активний проект
        }}
        breakpoints={{
          320: {slidesPerView: 1, spaceBetween: 0},
          768: {slidesPerView: 1, spaceBetween: 0},
          1280: {slidesPerView: 1, spaceBetween: 0}
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.id} className={s.slide}>
              <div className={s.reviewCard}>
                <div className={s.reviews_client_overflov}>
                  <picture className={s.aboutMePhotoPicture}>
                    <source srcSet={project.image} type="image/webp" />
                    <img src={project.image_x2} alt="Мій проект" />
                  </picture>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className={`custom-prev ${s.navButton} ${s.prevButton}`}>
        <svg className={`${s.navButton_icon}`}>
          <use href="/symbol-defs.svg#icon-left-swiper"></use>
        </svg>
      </button>
      <button className={`custom-next ${s.navButton} ${s.nextButton}`}>
        <svg className={`${s.navButton_icon} ${s.right}`}>
          <use href="/symbol-defs.svg#icon-left-swiper"></use>
        </svg>
      </button>
    </div>
  );
};

export default CustomSwiper;
