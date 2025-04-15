import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { theme } from "../theme/Theme";

export const ContactForm = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "5%",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: { xs: 3, md: 4 },
          width: "100%",
          maxWidth: 450,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: "16px",
          boxShadow: `0 8px 32px ${theme.palette.grey[700]}20`,
          "&:hover": {
            boxShadow: `0 12px 40px ${theme.palette.grey[700]}30`,
          },
        }}
      >
        <Typography
          align="justify"
          variant="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Box
            component="span"
            sx={{
              width: "24px",
              height: "24px",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          Entre em contato
        </Typography>

        <Typography
          align="justify"
          sx={{
            mb: 2,
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
          }}
        >
          Fale conosco hoje mesmo para agendar uma consulta e descobrir como
          podemos te ajudar a garantir a proteção e os cuidados adequados para
          quem você ama, com o serviço de curatela feito com responsabilidade e
          empatia.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <TextField
            label="Nome Completo"
            variant="filled"
            fullWidth
            required
            color="secondary"
          />

          <TextField
            label="Email"
            variant="filled"
            type="email"
            fullWidth
            required
            color="secondary"
          />

          <TextField
            label="Telefone"
            variant="filled"
            fullWidth
            color="secondary"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontWeight: 600,
              borderRadius: "8px",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "translateY(-2px)",
                boxShadow: `0 4px 12px ${theme.palette.primary.main}80`,
              },
            }}
          >
            Enviar Mensagem
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
