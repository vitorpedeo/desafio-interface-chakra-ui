import {
  Box,
  Circle,
  Flex,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { HiInformationCircle } from 'react-icons/hi';

import useIsMobile from '../../hooks/useIsMobile';
import { api } from '../../services/api';

interface Continent {
  continent: string;
  title: string;
  description: string;
  banner: string;
  countries_count: number;
  languages_count: number;
  most_visited_cities_count: number;
  featured_cities: {
    id: number;
    name: string;
    image: string;
    country_name: string;
    country_flag: string;
  }[];
}

interface ContinentInfoProps {
  continent: Continent;
}

export default function ContinentInfo({ continent }: ContinentInfoProps) {
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>wordtrip | {continent.title}</title>
      </Head>

      <Box
        as="main"
        paddingBottom={{
          base: '16px',
          md: '35px',
        }}
      >
        <Box
          as="section"
          width="100%"
          height={{
            base: '150px',
            md: '500px',
          }}
          backgroundImage={`linear-gradient(rgba(28, 20, 1, 0.65), rgba(28, 20, 1, 0.65)), url(${continent.banner})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Flex
            marginX="auto"
            paddingX="4"
            paddingY={{
              base: '30px',
              md: '60px',
            }}
            maxWidth={1160}
            width="100%"
            height="100%"
            align={isMobile ? 'center' : 'flex-end'}
            justify={isMobile ? 'center' : 'flex-start'}
          >
            <Text
              color="gray.50"
              fontSize={{
                base: '3xl',
                md: '5xl',
              }}
              fontWeight="600"
            >
              {continent.title}
            </Text>
          </Flex>
        </Box>

        <Flex
          as="section"
          marginX="auto"
          marginY={{
            base: '24px',
            md: '80px',
          }}
          paddingX="4"
          maxWidth={1160}
          width="100%"
          direction={isMobile ? 'column' : 'row'}
          gridGap={{
            base: '16px',
            md: '64px',
          }}
          align="center"
        >
          <Text
            flex="1"
            color="grey.600"
            fontSize={{
              base: 'sm',
              md: '2xl',
            }}
            fontWeight="400"
            textAlign="justify"
          >
            {continent.description}
          </Text>

          <Flex width="100%" flex="1" align="center" justify="space-between">
            <Box textAlign="center">
              <Text
                color="yellow.400"
                fontSize={{
                  base: '2xl',
                  md: '5xl',
                }}
                fontWeight="600"
              >
                {continent.countries_count}
              </Text>
              <Text
                color="grey.600"
                fontSize={{
                  base: 'lg',
                  md: '2xl',
                }}
                fontWeight={{
                  base: '400',
                  md: '600',
                }}
              >
                países
              </Text>
            </Box>
            <Box textAlign="center">
              <Text
                color="yellow.400"
                fontSize={{
                  base: '2xl',
                  md: '5xl',
                }}
                fontWeight="600"
              >
                {continent.languages_count}
              </Text>
              <Text
                color="grey.600"
                fontSize={{
                  base: 'lg',
                  md: '2xl',
                }}
                fontWeight={{
                  base: '400',
                  md: '600',
                }}
              >
                línguas
              </Text>
            </Box>
            <Box textAlign="center">
              <Text
                color="yellow.400"
                fontSize={{
                  base: '2xl',
                  md: '5xl',
                }}
                fontWeight="600"
              >
                {continent.most_visited_cities_count}
              </Text>
              <Text
                color="grey.600"
                fontSize={{
                  base: 'lg',
                  md: '2xl',
                }}
                fontWeight={{
                  base: '400',
                  md: '600',
                }}
              >
                cidades + 100
                <Popover
                  placement="bottom-end"
                  trigger={isMobile ? 'click' : 'hover'}
                >
                  <PopoverTrigger>
                    <span>
                      <Icon
                        as={HiInformationCircle}
                        marginLeft="2"
                        w={5}
                        h={5}
                        color="gray.400"
                      />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow bg="gray.600" />
                    <PopoverBody
                      bg="gray.600"
                      color="gray.50"
                      fontSize={{
                        base: 'xs',
                        md: 'sm',
                      }}
                      fontWeight="400"
                    >
                      Quantidade de cidades entre as 100 mais visitadas do mundo
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Box
          as="section"
          marginX="auto"
          paddingX="4"
          maxWidth={1160}
          width="100%"
        >
          <Text
            marginBottom={{
              base: '20px',
              md: '40px',
            }}
            color="gray.600"
            fontSize="3xl"
            fontWeight="600"
          >
            Cidades +100
          </Text>

          <Flex
            gridRowGap="45px"
            wrap="wrap"
            direction={{
              base: 'column',
              md: 'row',
            }}
            align="center"
            justify={{
              base: 'center',
              md: 'space-between',
            }}
          >
            {continent.featured_cities.map(city => (
              <Box
                key={city.id}
                width="256px"
                borderRadius="4px"
                background="white"
                overflow="hidden"
              >
                <Box width="100%" height="170px" position="relative">
                  <Image
                    src={city.image}
                    alt={city.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>

                <Flex
                  padding="6"
                  border="1px"
                  borderStyle="solid"
                  borderColor="yellow.400"
                  borderTop="none"
                  borderBottomLeftRadius="4px"
                  borderBottomRightRadius="4px"
                  alignItems="center"
                  justify="space-between"
                >
                  <Box>
                    <Text
                      color="gray.600"
                      fontFamily="Barlow"
                      fontSize="xl"
                      fontWeight="600"
                    >
                      {city.name}
                    </Text>
                    <Text
                      marginTop="12px"
                      color="gray.400"
                      fontFamily="Barlow"
                      fontSize="md"
                      fontWeight="600"
                    >
                      {city.country_name}
                    </Text>
                  </Box>

                  <Circle
                    size="30px"
                    position="relative"
                    sx={{ img: { borderRadius: '50%' } }}
                  >
                    <Image
                      src={city.country_flag}
                      alt={city.country_name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Circle>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<Continent[]>('continent_details');

  const paths = response.data.map(item => ({
    params: {
      slug: item.continent,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get<Continent[]>(
    `continent_details?continent=${slug}`,
  );

  return {
    props: {
      continent: response.data[0],
    },
  };
};
