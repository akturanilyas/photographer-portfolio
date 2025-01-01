'use client';

import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// Örnek fotoğraf verileri
const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Wedding Photography',
    category: 'Wedding',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Portrait Session',
    category: 'Portrait',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Fashion Photography',
    category: 'Fashion',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Landscape View',
    category: 'Landscape',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Event Coverage',
    category: 'Event',
  },
];

export default function GalleryCarousel() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h2'
          component='h2'
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
          }}
        >
          Portfolio
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          Discover the moments I've captured through my lens
        </Typography>

        <Box
          sx={{
            '.swiper': {
              width: '100%',
              padding: '50px 0',
            },
            '.swiper-slide': {
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '300px',
              height: '400px',
              borderRadius: '15px',
              overflow: 'hidden',
            },
            '.swiper-slide img': {
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
            '.swiper-pagination-bullet': {
              backgroundColor: 'primary.main',
            },
            '.swiper-button-next, .swiper-button-prev': {
              color: 'primary.main',
            },
          }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            {photos.map(photo => (
              <SwiperSlide key={photo.id}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <Image src={photo.url} alt={photo.title} />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      p: 2,
                    }}
                  >
                    <Typography variant='h6' sx={{ mb: 0.5 }}>
                      {photo.title}
                    </Typography>
                    <Typography variant='body2'>{photo.category}</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
