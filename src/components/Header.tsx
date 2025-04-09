import { Box, Typography, Button, useTheme, useMediaQuery, keyframes } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: 'text.secondary',
      py: { xs: 8, md: 12 },
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
        animation: `${fadeIn} 1s ease-out`,
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        <Typography 
          variant={isSmallMobile ? 'h3' : isMobile ? 'h2' : 'h1'} 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: { xs: 2, md: 3 },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: 1.2
          }}
        >
          Curadoria Especializada
        </Typography>
        
        <Typography 
          variant={isSmallMobile ? 'subtitle1' : 'h5'} 
          component="h2" 
          sx={{ 
            mb: { xs: 3, md: 4 }, 
            maxWidth: 800, 
            mx: 'auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
          }}
        >
          Proteção e cuidado personalizado para quem você ama
        </Typography>
        
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Button 
            variant="contained" 
            size={isSmallMobile ? 'medium' : 'large'}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.5 },
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: theme.shadows[4],
              transition: theme.transitions.create(['transform', 'box-shadow']),
              '&:hover': {
                backgroundColor: '#f0f0f0',
                transform: 'translateY(-3px)',
                boxShadow: theme.shadows[6]
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