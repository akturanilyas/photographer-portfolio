import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Photography Services | Portfolio',
  description: 'Capturing life\'s beautiful moments through professional photography. Specializing in portrait, landscape, and event photography in Istanbul, Turkey.',
  keywords: 'photography, professional photographer, portrait photography, landscape photography, event photography, Istanbul photographer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                // Prevent horizontal scrolling
                overflowX: 'hidden',
                // Ensure consistent spacing
                '& > *': {
                  width: '100%',
                },
              }}
            >
              <Header />
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
