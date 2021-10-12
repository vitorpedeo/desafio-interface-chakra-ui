import { Box, Center, Divider, Flex, List, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import useIsMobile from '../hooks/useIsMobile';
import { api } from '../services/api';

import { TravelTip } from '../components/Home/TravelTip';
import { Swiper } from '../components/Home/Swiper';

interface Continent {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Box
        as="main"
        paddingBottom={{
          base: '24px',
          md: '40px',
        }}
      >
        <Box
          as="section"
          width="100%"
          height={{
            base: '200px',
            md: '335px',
          }}
          backgroundImage="url(/home/banner.png)"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Flex
            maxWidth={1160}
            width="100%"
            height="100%"
            marginX="auto"
            paddingX="4"
            align="center"
            justify="flex-start"
          >
            <Box>
              <Text
                color="gray.50"
                fontSize={{
                  base: 'xl',
                  md: '4xl',
                }}
                fontWeight="500"
              >
                5 Continentes, <br /> infinitas possibilidades.
              </Text>
              <Text
                marginTop="20px"
                maxWidth={520}
                color="gray.100"
                fontSize={{
                  base: 'sm',
                  md: 'xl',
                }}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            {!isMobile && (
              <Box
                marginLeft="auto"
                width="417px"
                height="270px"
                position="relative"
                top="50px"
              >
                <Image src="/home/airplane.svg" alt="Airplane" layout="fill" />
              </Box>
            )}
          </Flex>
        </Box>

        <List
          maxWidth={1160}
          width="100%"
          marginTop={{
            base: '36px',
            md: '100px',
          }}
          marginX="auto"
          paddingX="4"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent={isMobile ? 'center' : 'space-between'}
        >
          <TravelTip icon="cocktail" tip="vida noturna" />
          <TravelTip icon="surf" tip="praia" />
          <TravelTip icon="building" tip="moderno" />
          <TravelTip icon="museum" tip="clássico" />
          <TravelTip icon="earth" tip="e mais..." />
        </List>

        <Center>
          <Divider
            marginTop={{
              base: '24px',
              md: '80px',
            }}
            marginBottom={{
              base: '24px',
              md: '50px',
            }}
            width={{
              base: '60px',
              md: '90px',
            }}
            borderColor="gray.600"
          />
        </Center>

        <Text
          color="gray.600"
          fontSize={{
            base: 'xl',
            md: '4xl',
          }}
          fontWeight="500"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Swiper continents={continents} />
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>('continents');

  return {
    props: {
      continents: response.data,
    },
  };
};
