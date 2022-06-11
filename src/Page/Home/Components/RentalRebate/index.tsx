import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import CardList from '../../../../Components/CardList';
import Petrol from '../../../../Types/Petrol';

type Props = {};

const rentalData: Petrol[] = [
  {
    id: '1',
    title: '20 Coins',
    description: 'Get $20 Rental rebate',
    featureImage: {
      link: `https://picsum.photos/200/300`,
      alt: 'random image',
    },
  },

  {
    id: '2',
    title: '15 Coins',
    description: 'Get $500 Rental rebate',
    featureImage: {
      link: `https://picsum.photos/200/300`,
      alt: 'random image',
    },
  },
];

const RentalRebate = (props: Props) => {
  const cardList = useMemo(() => {
    return rentalData;
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
        Rental Rebate
      </Box>
      <CardList cardList={cardList} />
    </>
  );
};

export default RentalRebate;
