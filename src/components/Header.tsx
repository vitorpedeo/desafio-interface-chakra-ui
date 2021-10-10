import {
  Box,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath, push } = useRouter();

  const isHomePath = asPath === '/';

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  function navigateToHome() {
    push('/');
  }

  return (
    <Flex
      as="header"
      width="100%"
      height={{
        base: '50px',
        md: '100px',
      }}
    >
      <Flex
        maxWidth={1160}
        width="100%"
        marginX="auto"
        paddingX="4"
        align="center"
        justify="center"
        position="relative"
      >
        {!isHomePath && (
          <IconButton
            aria-label="Voltar para a Home"
            icon={<Icon as={RiArrowLeftSLine} />}
            fontSize={{
              base: '16px',
              md: '32px',
            }}
            onClick={navigateToHome}
            size={isMobile ? 'sm' : 'lg'}
            variant="unstyled"
            position="absolute"
            left="0"
          />
        )}

        <Box
          width={{
            base: '81px',
            md: '184px',
          }}
          height={{
            base: '20px',
            md: '81px',
          }}
          position="relative"
        >
          <Image src="/logo.svg" alt="worldtrip" layout="fill" />
        </Box>
      </Flex>
    </Flex>
  );
}
