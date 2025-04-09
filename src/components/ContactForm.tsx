import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ContactForm = () => {
  return (
    <Box id="contact" sx={{ mb: 10 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 600,
          mb: 6,
          textAlign: "center",
          color: "#333",
        }}
      >
        Mande uma mesangem
      </Typography>
      <Grid container spacing={4}>
        <Grid>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{ mt: 3, px: 4, py: 1.5, borderRadius: 50 }}
              >
                Enviar Mensagem
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContactForm;
