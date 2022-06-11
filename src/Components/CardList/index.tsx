import { Box } from '@chakra-ui/react';
import React from 'react';
import Petrol from '../../Types/Petrol';
import Card from '../Card';

type CardListProps = {
  cardList: Petrol[] | [];
};

const CardList = (props: CardListProps) => {
  const { cardList } = props;
  return (
    <Box as="ul" listStyleType="none" display="flex">
      {cardList?.map((card) => (
        <Box as="li" key={card.id} mr="24px">
          <Card card={card} />
        </Box>
      ))}
    </Box>
  );
};

export default CardList;
