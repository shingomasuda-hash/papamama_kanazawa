import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { boothSlides } from "../constants";
import { CarouselArrow } from "./CarouselArrow";
import { useReducedMotion } from "./useReducedMotion";

export function BoothCarousel() {
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
      className="carousel booth-carousel"
      role="region"
      aria-roledescription="カルーセル"
      aria-label="展示ブース紹介スライダー(左右矢印キーで操作できます)"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        onSwiper={setSwiper}
        loop
        slidesPerView={1}
        spaceBetween={0}
        speed={500}
        autoplay={
          reducedMotion
            ? false
            : {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        navigation={{
          prevEl: ".booth-carousel .carousel-arrow--prev",
          nextEl: ".booth-carousel .carousel-arrow--next",
        }}
        pagination={{
          el: ".booth-carousel .swiper-pagination",
          clickable: true,
        }}
        a11y={{
          prevSlideMessage: "前のブース画像を表示",
          nextSlideMessage: "次のブース画像を表示",
          paginationBulletMessage: "{{index}}枚目のブース画像を表示",
        }}
      >
        {boothSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="booth-slide">
              <img src={slide.image} alt={slide.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselArrow direction="prev" label="前のブース画像を表示" className="" />
      <CarouselArrow direction="next" label="次のブース画像を表示" className="" />
      <div className="swiper-pagination" />
    </div>
  );
}
