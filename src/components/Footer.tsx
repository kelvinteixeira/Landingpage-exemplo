import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        py: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Serviços de Curatela. Desenvolvido por {" "}
        <Link sx={{cursor:  "pointer"}} href="https://codevibesolutions.netlify.app" target="_blank">
          CodeVibe Solutions.
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
