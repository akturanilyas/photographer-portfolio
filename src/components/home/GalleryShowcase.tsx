'use client';

import { Box, Container, Typography, ImageList, ImageListItem, Modal } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

export default function GalleryShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
          }}
        >
          Gallery Showcase
        </Typography>

        {/* 1. 3D Coverflow Carousel */}
        <Typography variant="h4" sx={{ mb: 4, mt: 8 }}>1. 3D Coverflow Carousel</Typography>
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
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <img src={photo.url} alt={photo.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* 2. Full Screen Grid with Modal */}
        <Typography variant="h4" sx={{ mb: 4, mt: 8 }}>2. Grid with Modal View</Typography>
        <ImageList
          sx={{
            width: '100%',
            height: 'auto',
            gap: '16px!important',
          }}
          cols={3}
          rowHeight={300}
        >
          {photos.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
              }}
              onClick={() => setSelectedImage(item.url)}
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* 3. Masonry Layout */}
        <Typography variant="h4" sx={{ mb: 4, mt: 8 }}>3. Masonry Layout</Typography>
        <ImageList
          sx={{
            width: '100%',
            height: 'auto',
            gap: '16px!important',
          }}
          variant="masonry"
          cols={3}
          gap={8}
        >
          {photos.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                style={{
                  transition: 'transform 0.3s ease',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* 4. Vertical Timeline */}
        <Typography variant="h4" sx={{ mb: 4, mt: 8 }}>4. Vertical Timeline Gallery</Typography>
        <Box sx={{ position: 'relative', pl: { xs: 3, md: 5 } }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: 'primary.main',
            }}
          />
          
          {photos.map((photo, index) => (
            <Box
              key={photo.id}
              sx={{
                position: 'relative',
                mb: 6,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: -24, md: -40 },
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                {photo.title}
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover img': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Modal for full-screen view */}
        <Modal
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
            }}
            onClick={() => setSelectedImage(null)}
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full size"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
