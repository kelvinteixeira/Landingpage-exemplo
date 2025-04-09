import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #1A237E 100%)`,
        color: '#fff',
        py: 10,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          Proteção Jurídica para Pessoas com Necessidades Especiais
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            animation: `${fadeIn} 1s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          Curatela especializada com abordagem humanizada e técnica
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#contato"
          sx={{
            px: 4,
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
            color: theme.palette.primary.main,
            animation: `${fadeIn} 1s ease-out 0.4s forwards`,
            opacity: 0,
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: 3,
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