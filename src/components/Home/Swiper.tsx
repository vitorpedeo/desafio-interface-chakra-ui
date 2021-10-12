/* eslint-disable */
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper';
import { Swiper as DefaultSwiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Continent {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface SwiperProps {
  continents: Continent[];
}

export function Swiper({ continents }: SwiperProps) {
  return (
    <Box
      as="section"
      maxWidth={{
        base: '100%',
        md: '1240px',
      }}
      width="100%"
      marginTop={{
        base: '20px',
        md: '52px',
      }}
      marginX="auto"
      paddingX={{
        base: '0',
        md: '4',
      }}
      sx={{
        '.swiper-button-next': { color: 'yellow.400' },
        '.swiper-button-prev': { color: 'yellow.400' },
        '.swiper-pagination-bullet-active': { bg: 'yellow.400' },
      }}
    >
      <DefaultSwiper modules={[Navigation, Pagination]} navigation pagination>
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              width="100%"
              height={{
                base: '250px',
                md: '450px',
              }}
              backgroundImage={`linear-gradient(rgba(28, 20, 1, 0.65), rgba(28, 20, 1, 0.65)), url(${continent.image})`}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              direction="column"
              align="center"
              justify="center"
            >
              <Link href={`/continent/${continent.id}`}>
                <a>
                  <Text
                    color="gray.50"
                    fontSize={{
                      base: '2xl',
                      md: '5xl',
                    }}
                    fontWeight="700"
                    textAlign="center"
                  >
                    {continent.name}
                  </Text>
                  <Text
                    marginTop="4"
                    color="gray.100"
                    fontSize={{
                      base: 'sm',
                      md: '2xl',
                    }}
                    fontWeight="700"
                    textAlign="center"
                  >
                    {continent.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </DefaultSwiper>
    </Box>
  );
}
