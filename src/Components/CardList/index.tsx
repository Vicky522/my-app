import { Box } from '@chakra-ui/react';
import Carousel from 'Components/Carousel';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Petrol from '../../Types/Petrol';
import Card from '../Card';

type CardListProps = {
  cardList: Petrol[] | [];
};

const CardList = (props: CardListProps) => {
  const { cardList } = props;
  return (
    <Carousel>
      {cardList?.map((card) => (
        <Box as="li" key={card.id}>
          <SwiperSlide>
            <Card card={card} />
          </SwiperSlide>
        </Box>
      ))}
    </Carousel>
  );
};

export default CardList;
