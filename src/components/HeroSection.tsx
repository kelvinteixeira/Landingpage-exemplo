import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'text.primary',
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant={isMobile ? 'h3' : isTablet ? 'h2' : 'h1'}
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: { xs: 2, md: 3 },
            animation: `${fadeIn} 1s ease-out`,
            lineHeight: 1.2,
            px: { xs: 1, sm: 0 },
          }}
        >
          Proteção Jurídica para Pessoas com Necessidades Especiais
        </Typography>
        
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="p"
          sx={{
            mb: { xs: 3, md: 4 },
            animation: `${fadeIn} 1s ease-out 0.2s forwards`,
            opacity: 0,
            maxWidth: 800,
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          Curatela especializada com abordagem humanizada e técnica
        </Typography>
        
        <Button
          variant="contained"
          color="secondary"
          size={isMobile ? 'medium' : 'large'}
          href="#contato"
          sx={{
            px: { xs: 3, md: 4 },
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 600,
            color: 'primary.main',
            animation: `${fadeIn} 1s ease-out 0.4s forwards`,
            opacity: 0,
            borderRadius: '8px',
            transition: theme.transitions.create(['transform', 'box-shadow']),
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: theme.shadows[4],
            },
          }}
        >
          Fale com um Especialista
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;