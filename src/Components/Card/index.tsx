import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Petrol from '../../Types/Petrol';

export interface CardProps {
  card: Petrol;
}

const Card = (props: CardProps) => {
  const { card } = props;
  return (
    <Box
      w="200px"
      h="250px"
      border="1px solid #F1F1F5"
      borderRadius="4px"
      boxShadow="0px 12px 18px rgba(23, 23, 37, 0.04)"
    >
      <Image
        src={card.featureImage.link}
        alt={card.featureImage.alt}
        w="100%"
        h="98px"
        objectFit="cover"
      />

      <Box p="16px 16px 20px 16px">
        <Box
          as="h3"
          color="#0062FF"
          textStyle="titleCard"
          mt="16px"
          display="flex"
          alignItems="center"
        >
          {card?.icon && (
            <Box as="span" aria-label="image">
              <Image
                src={card.icon.link}
                alt={card.icon.alt}
                objectFit="cover"
                w="16px"
                h="16px"
                borderRadius="50%"
                mr="4px"
              />
            </Box>
          )}
          {card.title}
        </Box>

        <Box as="p" mt="8px" textStyle="description" color="#92929D">
          {card.description}
        </Box>

        {card?.note && (
          <Box
            as="p"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="400"
            color="#0062FF"
            mt="8px"
          >
            {card.note}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Card;
