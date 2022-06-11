import { Box } from '@chakra-ui/react';
import Container from 'Components/Container';
import '../../Styles/index.css';
import FoodAndBeverage from './Components/FoodAndBeverage';
import Hero from './Components/Hero';
import Petrol from './Components/Petrol';
import RentalRebate from './Components/RentalRebate';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Box pb="240px">
        <Hero />
      </Box>

      <Container>
        <Box mt="24px">
          <Petrol />
        </Box>

        <Box my="48px">
          <RentalRebate />
        </Box>

        <Box mb="40px">
          <FoodAndBeverage />
        </Box>
      </Container>
    </>
  );
};

export default Home;
