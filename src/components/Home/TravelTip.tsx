import { Box, Circle, ListItem } from '@chakra-ui/react';
import Image from 'next/image';

import useIsMobile from '../../hooks/useIsMobile';

interface TravelTipProps {
  icon: string;
  tip: string;
}

export function TravelTip({ icon, tip }: TravelTipProps) {
  const isMobile = useIsMobile();

  return (
    <ListItem
      margin="2"
      color="gray.600"
      fontSize={{
        base: 'lg',
        md: '2xl',
      }}
      fontWeight="600"
      display="flex"
      flexDirection={isMobile ? 'row' : 'column'}
      alignItems="center"
    >
      {isMobile ? (
        <Circle size="8px" marginRight="8px" background="yellow.400" />
      ) : (
        <Box marginBottom="24px" width="85px" height="85px" position="relative">
          <Image src={`/home/${icon}.svg`} alt={tip} layout="fill" />
        </Box>
      )}
      {tip}
    </ListItem>
  );
}
