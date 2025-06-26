import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

interface CardsProps {
  images: string[];
}

const Cards = ({ images }: CardsProps) => {
  return (
    <Swiper
      effect={"cards"}
      modules={[EffectCards]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex w-9/12"
    >
      {images.map((img) => (
        <SwiperSlide className="rounded-3xl overflow-hidden border border-gray-900/20 cursor-grab">
          <div>
            <img src={img} alt="" className="w-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Cards;
