'use client';

import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

// Örnek fotoğraf verileri
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Wedding Photography',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Portrait',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Fashion',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Landscape',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Event',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Street',
    rows: 2,
    cols: 2,
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GallerySection() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
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
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          Discover the moments I've captured through my lens
        </Typography>
        
        <ImageList
          sx={{ 
            width: '100%',
            height: 'auto',
            overflow: 'hidden',
            // Masonry layout için responsive ayarlar
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)!important',
              sm: 'repeat(2, 1fr)!important',
              md: 'repeat(3, 1fr)!important'
            },
            gap: '16px!important',
          }}
          variant="quilted"
          cols={4}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem 
              key={item.img} 
              cols={item.cols || 1} 
              rows={item.rows || 1}
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& .MuiImageListItem-img': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                },
              }}
            >
              <img
                {...srcset(item.img, 200, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '10px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '.MuiImageListItem-root:hover &': {
                    transform: 'translateY(0)',
                  },
                }}
              >
                <Typography variant="subtitle1">{item.title}</Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}
