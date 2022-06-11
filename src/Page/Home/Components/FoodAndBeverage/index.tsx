import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import CardList from '../../../../Components/CardList';
import Petrol from '../../../../Types/Petrol';

type Props = {};

const foodAndBeverageData: Petrol[] = [
  {
    id: '1',
    title: '25 Coins',
    description: 'NTUC Fairprice $50 Voucher',
    featureImage: {
      link: `https://picsum.photos/200/300`,
      alt: 'random image',
    },
  },

  {
    id: '2',
    title: '5 Coins',
    description: 'Free Cold Stone Sundae at any flavour!',
    featureImage: {
      link: `https://picsum.photos/200/300`,
      alt: 'random image',
    },
  },
];

const FoodAndBeverage = (props: Props) => {
  const cardList = useMemo(() => {
    return foodAndBeverageData;
  }, []);

  return (
    <>
      <Box
        as="h2"
        fontSize="18px"
        lineHeight="24px"
        fontWeight="600"
        color="#171725"
        mb="26px"
      >
        Food And Beverage
      </Box>
      <CardList cardList={cardList} />
    </>
  );
};

export default FoodAndBeverage;
