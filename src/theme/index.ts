import { extendTheme } from '@chakra-ui/react';

const breakpoints: any = ['30em', '48em', '62em', '80em'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const theme = extendTheme({
  breakpoints,
  textStyles: {
    titleSection: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '24px',
    },
    titleCard: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
    },
    description: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
  },

  styles: {
    global: {
      body: {
        fontFamily: 'Hellix',
        backgroundColor: 'bg',
        color: 'text',
      },
    },
  },

  colors: {
    grey01: '#171725',
    grey03: '#696974',
    grey04: '#92929D',
    grey05: '#B5B5BE',
    grey06: '#D5D5DC',
    blueDark: '#0062FF',
  },
});

export { theme };
