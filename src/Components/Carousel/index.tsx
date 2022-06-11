import { Swiper } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

type CarouselProps = {
  children: any;
};

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  return (
    <Swiper modules={[Scrollbar, A11y]} spaceBetween={12} slidesPerView={1.5}>
      {children}
    </Swiper>
  );
};

export default Carousel;
