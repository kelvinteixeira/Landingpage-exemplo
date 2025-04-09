import { Box, Typography, Button, useTheme, useMediaQuery, keyframes } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: 'white',
      py: 10,
      px: 2,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80) center/cover',
        opacity: 0.2,
      }
    }}>
      <Box sx={{ 
        position: 'relative',
        animation: `${fadeIn} 1s ease-out`
      }}>
        <Typography 
          variant={isMobile ? 'h3' : 'h2'} 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Curadoria Especializada
        </Typography>
        <Typography 
          variant={isMobile ? 'h6' : 'h5'} 
          component="h2" 
          sx={{ 
            mb: 4, 
            maxWidth: 800, 
            mx: 'auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          Proteção e cuidado personalizado para quem você ama
        </Typography>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Button 
            variant="contained" 
            size="large" 
            sx={{
              backgroundColor: 'white',
              color: theme.palette.primary.main,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 50,
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              '&:hover': {
                backgroundColor: '#f0f0f0',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
              }
            }}
          >
            Fale Conosco
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
};
export default Header;