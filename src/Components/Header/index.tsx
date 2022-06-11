import { Box } from '@chakra-ui/react';
import Avatar from 'icons/Avatar';
import House from 'icons/House';
import { useMemo } from 'react';
import Bell from '../../icons/Bell';
import Wallet from '../../icons/Wallet';

type Props = {};

const listIcon = [
  { name: 'home', icon: <House />, link: '/' },
  { name: 'bell', icon: <Bell />, link: '/' },
  { name: 'wallet', icon: <Wallet />, link: '/' },
  { name: 'Avatar', icon: <Avatar />, link: '/' },
];

const Header = (props: Props) => {
  const headerData = useMemo(() => {
    return listIcon;
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      p="24px 29px 26px 29px"
      bgColor="#fff"
    >
      {headerData.map((item, index) => (
        <Box key={index}>
          <Box as="a" href={item.link}>
            {item.icon}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Header;
