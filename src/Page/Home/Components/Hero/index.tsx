import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Progress } from '@chakra-ui/react';

type HeroProps = {};

const Hero = (props: HeroProps) => {
  return (
    <Box bgColor="#171725" p="24px" h="428px" position="relative">
      <Box
        p="14px 17px"
        bgColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="40px"
        h="40px"
        borderRadius="50%"
      >
        <ChevronLeftIcon color="#171725" />
      </Box>

      <Box
        as="h1"
        fontSize="32px"
        fontWeight="600"
        lineHeight="40px"
        color="#fff"
        mt="16px"
      >
        Silver Tier
      </Box>
      <Box as="h4" textStyle="description" color="#fff" mt="8px">
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </Box>

      <Box
        position="absolute"
        top="192px"
        left="0"
        bgColor="#fff"
        border="1px solid #FAFAFB"
        boxShadow="0px 12px 18px rgba(23, 23, 37, 0.04)"
        borderRadius="8px"
        p="24px"
        mx="16px"
      >
        <Coupon />
      </Box>
    </Box>
  );
};

export const Coupon = () => {
  return (
    <>
      <Box
        as="h3"
        fontSize="14px"
        lineHeight="24px"
        fontWeight="600"
        color="#B5B5BE"
      >
        Available Coin balance
      </Box>
      <Box
        as="p"
        fontSize="48px"
        lineHeight="56px"
        fontWeight="400"
        color="#171725"
        mt="8px"
      >
        340
      </Box>

      <Progress value={70} borderRadius="10px" mt="33px" />

      <Box as="p" textStyle="description" color="#92929D" mt="34px">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </Box>
      <Box
        as="a"
        href="/"
        color="#0062FF"
        textStyle="description"
        display="inline-block"
        mt="16px"
      >
        View tier benefits <ChevronRightIcon />
      </Box>

      <Button
        bgColor="#171725"
        p="18px 96px"
        textStyle="titleSection"
        color="#fff"
        mt="24px"
        borderRadius="4px"
        w="100%"
      >
        My Coupons
      </Button>

      <Box
        as="p"
        fontSize="14px"
        lineHeight="20px"
        fontWeight="400"
        letterSpacing="-0.5px"
        color="#B5B5BE"
        textAlign="center"
        mt="16px"
      >
        Updated : 02/11/2021
      </Box>
    </>
  );
};

export default Hero;
