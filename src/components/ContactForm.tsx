import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ContactForm = () => {
  return (
    <Box id="contact" sx={{ mb: { xs: 6, md: 10 } }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 600,
          mb: { xs: 4, md: 6 },
          textAlign: "center",
          color: "text.primary",
        }}
      >
        Mande uma mensagem
      </Typography>
      
      <Grid container justifyContent="center">
        <Grid >
          <Paper elevation={3} sx={{ 
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2 
          }}>
            <form>
              <TextField
                fullWidth
                label="Seu Nome"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Seu Email"
                variant="outlined"
                margin="normal"
                type="email"
                required
              />
              <TextField
                fullWidth
                label="Telefone"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Como podemos ajudar?"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    borderRadius: '8px',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'secondary.main'
                    }
                  }}
                >
                  Enviar Mensagem
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;