import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import Home from './Page/Home/';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
    <Box position="sticky" bottom="0" zIndex="1">
      <Header />
    </Box>
  </ChakraProvider>
);
