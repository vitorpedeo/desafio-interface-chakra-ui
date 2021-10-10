import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '400': '#ffba08',
    },
    gray: {
      '50': '#f5f8fa',
      '100': '#dadada',
      '400': '#999999',
      '600': '#47585b',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
});
