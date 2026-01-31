import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "",
    quote: `Design is not just what it looks like and feels like. Design is how it works.`,
    name: "Steve Jobs",
    designation: "Co-founder, Apple Inc.",
  },
  {
    message:
      "",
    quote: `The best way to predict the future is to invent it.`,
    name: "Alan Kay",
    designation: "Computer Scientist",
  },
  {
    message:
      "",
    quote: `Whatever you do, do it with all your heart, as for God and not for humans.`,
    name: "Colossians 3:23",
    designation: "",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Thoughts on Creativity & Work</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
