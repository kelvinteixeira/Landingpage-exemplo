import { Box, Typography, Button, useMediaQuery, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useWhatsApp } from "../hooks/useWhatsapp";

export const CuratelaExplanation = () => {
  const { onClick } = useWhatsApp();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: 6,
        py: 8,
        px: isMobile ? 4 : 8,
        bgcolor: "background.paper",
      }}
    >
      {/* Left Side - Image */}
      <Box
        sx={{
          flex: 1,
          minWidth: isMobile ? "100%" : "50%",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 3,
          height: isMobile ? "300px" : "500px",
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          },
        }}
      >
        <img
          src="/images/curatela-explanation-image.jpg"
          alt="Advogado especializado em curatela"
        />
      </Box>

      {/* Right Side - Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            fontSize: isMobile ? "2rem" : "3rem",
            lineHeight: 1.2,
          }}
        >
          O que é a Curatela?
        </Typography>
        <Divider
          sx={{
            width: "120px",
            height: "8px",
            borderRadius: "4px",
            backgroundColor: theme.palette.secondary.light,
            my: 2,
          }}
        />

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: 1.6,
            color: "text.secondary",
            mb: 2,
          }}
        >
          A curatela é um instituto jurídico que protege pessoas que não podem
          reger sua vida civil, como idosos com capacidade reduzida ou pessoas
          com deficiência mental. O curador, nomeado judicialmente, assume a
          responsabilidade pelos atos da vida civil do curatelado, sempre
          visando seu bem-estar e proteção.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: 1.6,
            color: "text.secondary",
            mb: 3,
          }}
        >
          Nosso escritório especializado oferece assessoria completa em
          processos de curatela, desde a avaliação inicial até a gestão diária,
          sempre com abordagem humanizada e respeito à dignidade do curatelado.
        </Typography>

        <Button
          onClick={() => onClick()}
          variant="contained"
          size="large"
          sx={{
            alignSelf: "flex-start",
            px: 4,
            py: 2,
            fontSize: "1.1rem",
            fontWeight: 600,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "translateY(-2px)",
              boxShadow: 2,
            },
          }}
        >
          Fale com um especialista
        </Button>
      </Box>
    </Box>
  );
};
