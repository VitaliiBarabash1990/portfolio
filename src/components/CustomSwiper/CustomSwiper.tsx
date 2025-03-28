"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./CustomSwiper.module.css";
import reviews from "./reviews.json";
import Image from "next/image";

const CustomSwiper = () => {
	return (
		<div className={s.sliderContainer}>
			<Swiper
				className={s.swiper}
				// spaceBetween={20}
				// slidesPerView={1}
				pagination={{ clickable: true }}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
				modules={[Pagination, Navigation]}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 10 },
					768: { slidesPerView: 2, spaceBetween: 10 },
					1280: { slidesPerView: 3, spaceBetween: 50 },
				}}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.id} className={s.slide}>
						<div className={s.reviewCard}>
							<div>
								<ul className={s.rating}>
									<li className={s.stars}>
										{[...Array(review.rating)].map((_, i) => (
											<span key={i}>
												<svg className={s.reviews_list_star_icon}>
													<use href="/symbol-defs.svg#icon-star"></use>
												</svg>
											</span>
										))}
									</li>
									<li>
										{review.google && (
											<svg className={s.reviews_item_head_G}>
												<use href="/symbol-defs.svg#icon-google_logo"></use>
											</svg>
										)}
									</li>
								</ul>
								<svg className={s.reviews_bloquote}>
									<use href="/symbol-defs.svg#icon-quote"></use>
								</svg>
								<p className={s.text}>{review.text}</p>
							</div>
							<div className={s.client}>
								<div className={s.reviews_client_overflov}>
									<Image
										src={review.image}
										alt={review.name}
										width={100}
										height={100}
										className={s.avatar}
									/>
								</div>
								<span className={s.name}>{review.name}</span>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<button className={`custom-prev ${s.navButton} ${s.prevButton}`}>
				<svg className={`${s.navButton_icon}`}>
					<use href="/symbol-defs.svg#icon-left_errow"></use>
				</svg>
			</button>
			<button className={`custom-next ${s.navButton} ${s.nextButton}`}>
				<svg className={`${s.navButton_icon} ${s.right}`}>
					<use href="/symbol-defs.svg#icon-left_errow"></use>
				</svg>
			</button>
		</div>
	);
};

export default CustomSwiper;
