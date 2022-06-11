import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import CardList from '../../../../Components/CardList';
import Petrol from '../../../../Types/Petrol';

type Props = {};

const petrolData: Petrol[] = [
  {
    id: '1',
    title: '15 Coins',
    description: '50% discount for every $100 top-up on your Shell Petrol Card',
    featureImage: {
      link: `https://picsum.photos/200/300`,
      alt: 'random image',
    },
  },

  {
    id: '2',
    title: '1,000 Coins',
    description: '70% discount top-up on your Shell Petrol Card',
    featureImage: {
      link: `https://picsum.photos/200/300`,
      alt: 'random image',
    },
    note: 'Insufficient coins',
    icon: {
      link: `https://picsum.photos/200/300`,
      alt: 'random icon',
    },
  },
];

const PetrolSection = (props: Props) => {
  const cardList = useMemo(() => {
    return petrolData;
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
        Petrol
      </Box>
      <CardList cardList={cardList} />
    </>
  );
};

export default PetrolSection;
