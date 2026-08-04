import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { staffMembers } from "../constants";
import { CarouselArrow } from "./CarouselArrow";
import { useReducedMotion } from "./useReducedMotion";

export function StaffCarousel() {
  const reducedMotion = useReducedMotion();
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!swiper) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      swiper.slideNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      swiper.slidePrev();
    }
  };

  return (
    <div
      className="carousel staff-carousel"
      role="region"
      aria-roledescription="カルーセル"
      aria-label="スタッフ紹介スライダー(左右矢印キーで操作できます)"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        onSwiper={setSwiper}
        centeredSlides
        loop
        slidesPerView={1.15}
        spaceBetween={16}
        speed={500}
        autoplay={
          reducedMotion
            ? false
            : {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        navigation={{
          prevEl: ".staff-carousel .carousel-arrow--prev",
          nextEl: ".staff-carousel .carousel-arrow--next",
        }}
        pagination={{
          el: ".staff-carousel .swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          768: { slidesPerView: 1.8, spaceBetween: 24 },
          1024: { slidesPerView: 2, spaceBetween: 28 },
          1440: { slidesPerView: 3, spaceBetween: 32 },
        }}
        a11y={{
          prevSlideMessage: "前の人物を表示",
          nextSlideMessage: "次の人物を表示",
          paginationBulletMessage: "{{index}}人目のスタッフを表示",
        }}
      >
        {staffMembers.map((member, index) => (
          <SwiperSlide key={member.id}>
            <figure className="staff-card">
              <img
                src={member.image}
                alt={`スタッフ紹介 ${index + 1}/${staffMembers.length}: ${member.name}(${member.kana})`}
                width={638}
                height={816}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselArrow direction="prev" label="前の人物を表示" className="" />
      <CarouselArrow direction="next" label="次の人物を表示" className="" />
      <div className="swiper-pagination" />
    </div>
  );
}
