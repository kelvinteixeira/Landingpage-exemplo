import { Box, Typography, Divider, Link, useMediaQuery } from "@mui/material";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box
      component="footer"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{
        textAlign: "center",
        py: 4,
        px: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box>
        <img
          style={{ width: isMobile ? 150 : 200, }}
          src="/images/jv-logo-black.png"
          alt="Logo de João Vitor Advogado"
        />
      </Box>

      <Divider
        sx={{
          maxWidth: 150,
          mx: "auto",
          borderColor: "secoondary.light",
          mb: 1.5,
          width: "250px",
          height: "8px",
          borderRadius: "4px",
        }}
      />

      <Typography
        variant="subtitle1"
        sx={{
          color: "primary.main",
          fontWeight: 500,
          mb: 0.5,
        }}
      >
        João Vitor Barbosa de Sousa – OAB/PB 24016
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
        }}
      >
        Copyright © Todos os direitos reservados
      </Typography>

      <Typography
        variant="caption"
        sx={{
          color: "text.disabled",
          mt: 1,
          display: "block",
        }}
      >
        Desenvolvido por{" "}
        <Link target="_blank" href="https://codevibesolutions.netlify.app">
          CodeVibe Solutions
        </Link>
      </Typography>
    </Box>
  );
};
