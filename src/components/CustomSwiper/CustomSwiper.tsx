'use client';

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './CustomSwiper.module.css';
import {Project} from '@/types/types';

type Props = {
  activeProject: Project;
  setActiveProject: (project: Project) => void;
  projects: Project[];
  isShort: boolean;
};

const CustomSwiper = ({
  activeProject,
  setActiveProject,
  projects,
  isShort
}: Props) => {
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
          if (isShort && projects[swiper.realIndex]) {
            setActiveProject(projects[swiper.realIndex]);
          }
        }}
        breakpoints={{
          320: {slidesPerView: 1, spaceBetween: 0},
          768: {slidesPerView: 1, spaceBetween: 0},
          1280: {slidesPerView: 1, spaceBetween: 0}
        }}
      >
        {isShort
          ? projects.map((project) => {
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
            })
          : activeProject.image_project_x1.map((img, index) => {
              return (
                <SwiperSlide key={index} className={s.slide}>
                  <div className={s.reviewCard}>
                    <div className={s.reviews_client_overflov}>
                      <picture className={s.aboutMePhotoPicture}>
                        <source srcSet={img} type="image/webp" />
                        <img
                          src={activeProject.image_project_x2[index]}
                          alt="Мій проект"
                        />
                      </picture>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
      </Swiper>

      <div className={isShort ? s.swiperArowWraper : s.swiperArowWraperShort}>
        <button
          className={
            isShort
              ? `custom-prev ${s.navButton} ${s.prevButton}`
              : `custom-prev ${s.navButton} ${s.prevButtonProject}`
          }
        >
          <svg className={`${s.navButton_icon}`}>
            <use href="/symbol-defs.svg#icon-left-swiper"></use>
          </svg>
        </button>
        <button
          className={
            isShort
              ? `custom-next ${s.navButton} ${s.nextButton}`
              : `custom-next ${s.navButton} ${s.nextButtonProject}`
          }
        >
          <svg className={`${s.navButton_icon} ${s.right}`}>
            <use href="/symbol-defs.svg#icon-left-swiper"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;
