'use client';

import { Box, Container, Typography, IconButton, Modal, Fade } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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

export default function ModernCarousel() {
  const [selectedImage, setSelectedImage] = useState<null | {
    url: string;
    title: string;
    category: string;
  }>(null);

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 12 },
        backgroundColor: '#000',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Typography
            component="span"
            sx={{
              fontSize: '1.2rem',
              color: 'primary.main',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              display: 'block',
              mb: 2,
            }}
          >
            Our Work
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Gallery
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Explore our collection of captivating moments frozen in time
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            '.swiper': {
              width: '100%',
              padding: { xs: '50px 0', md: '80px 0' },
            },
            '.swiper-slide': {
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: { xs: '280px', md: '400px' },
              height: { xs: '380px', md: '500px' },
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease-in-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            },
            '.swiper-slide img': {
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            },
            '.swiper-slide:hover img': {
              transform: 'scale(1.05)',
            },
            '.swiper-pagination': {
              bottom: '20px',
            },
            '.swiper-pagination-bullet': {
              width: '12px',
              height: '12px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              opacity: 1,
              '&-active': {
                backgroundColor: 'primary.main',
                transform: 'scale(1.2)',
              },
            },
            // Custom navigation buttons
            '.custom-swiper-button': {
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '50px',
              height: '50px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
              '&.swiper-button-disabled': {
                opacity: 0.5,
                cursor: 'not-allowed',
              },
            },
          }}
        >
          <IconButton
            className="custom-swiper-button prev"
            sx={{ 
              left: { xs: '10px', md: '40px' },
              color: 'white',
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          
          <IconButton
            className="custom-swiper-button next"
            sx={{ 
              right: { xs: '10px', md: '40px' },
              color: 'white',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.custom-swiper-button.prev',
              nextEl: '.custom-swiper-button.next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            {photos.map((photo) => (
              <SwiperSlide 
                key={photo.id}
                onClick={() => setSelectedImage(photo)}
              >
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <img src={photo.url} alt={photo.title} />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      color: 'white',
                      p: 3,
                      transform: 'translateY(100%)',
                      transition: 'transform 0.3s ease',
                      '.swiper-slide:hover &': {
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        fontWeight: 600,
                      }}
                    >
                      {photo.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {photo.category}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>

      {/* Modal for full-screen view */}
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        closeAfterTransition
      >
        <Fade in={!!selectedImage}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90vw',
              height: '90vh',
              bgcolor: 'rgba(0, 0, 0, 0.9)',
              border: 'none',
              borderRadius: 2,
              boxShadow: 24,
              p: 0,
              outline: 'none',
              overflow: 'hidden',
            }}
          >
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedImage && (
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {selectedImage.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {selectedImage.category}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
