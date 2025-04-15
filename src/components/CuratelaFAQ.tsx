import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Stack,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CuratelaFAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const faqItems = [
    {
      question: "O que é a curatela e quando é necessária?",
      answer:
        "A curatela é um instituto jurídico que protege maiores de idade que não possuem plena capacidade civil, como pessoas com deficiência mental, doenças degenerativas ou dependência química. É necessária quando o indivíduo não consegue praticar atos da vida civil sem comprometer seu patrimônio ou bem-estar.",
    },
    {
      question: "Qual a diferença entre curatela e tutela?",
      answer:
        "Enquanto a tutela protege menores de idade cujos pais faleceram ou foram destituídos do poder familiar, a curatela é destinada a maiores de idade incapazes. O tutor assume todas as responsabilidades pelo menor, enquanto o curador pode ter suas atribuições limitadas conforme a necessidade do curatelado.",
    },
    {
      question: "Como iniciar um processo de curatela?",
      answer:
        "O processo inicia com uma ação judicial acompanhada de laudos médicos que comprovem a incapacidade. É necessário contratar um advogado especializado, que irá protocolar a petição inicial e acompanhar todo o trâmite, incluindo a avaliação do juiz e as perícias médicas.",
    },
    {
      question: "Quanto tempo dura o processo?",
      answer:
        "O tempo médio varia entre 3 a 12 meses, dependendo da complexidade do caso, da necessidade de perícias médicas e da agenda do judiciário local. Processos urgentes podem ser acelerados mediante comprovação de risco ao curatelado.",
    },
  ];

  return (
    <Stack
      sx={{
        backgroundImage: `
          linear-gradient(${theme.palette.primary.main}a6, ${theme.palette.primary.main}ba),
          url(/images/hero-bg6.jpg)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: isMobile ? 6 : 10,
        pb: isMobile ? 8 : 12,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            textAlign: "center",
            fontSize: isSmallMobile ? "1.8rem" : isMobile ? "2rem" : "2.5rem",
            mb: 2,
            px: isMobile ? 2 : 0,
          }}
        >
          Perguntas Frequentes sobre Curatela
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.primary",
            textAlign: "center",
            fontSize: isMobile ? "1rem" : "1.2rem",
            mb: isMobile ? 4 : 6,
            px: isMobile ? 2 : 0,
          }}
        >
          Veja as respostas para as dúvidas mais comuns sobre nossos serviços.
        </Typography>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 3 : 6}
          justifyContent="center"
          alignItems={isMobile ? "center" : "flex-start"}
          flexWrap="wrap"
        >
          {/* First Column */}
          <Stack
            direction="column"
            spacing={isMobile ? 3 : 4}
            sx={{ width: { xs: "100%", md: "45%" }, px: isMobile ? 2 : 0 }}
          >
            {faqItems.slice(0, 2).map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  width: "100%",
                  boxShadow: theme.shadows[3],
                  borderRadius: "12px !important",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:before": { display: "none" },
                  "&:hover": {
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        fontSize: "1.8rem",
                        color: "secondary.main",
                      }}
                    />
                  }
                  sx={{
                    py: isMobile ? 2 : 3,
                    px: isMobile ? 3 : 4,
                    minHeight: "72px",
                    backgroundColor: theme.palette.grey[100],
                    "&.Mui-expanded": {
                      backgroundColor: theme.palette.grey[200],
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: isMobile ? "1.1rem" : "1.2rem",
                      flex: 1,
                      color: "primary.main",
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    py: isMobile ? 2 : 3,
                    px: isMobile ? 3 : 4,
                    backgroundColor: theme.palette.background.paper,
                    height: isMobile ? "auto" : "200px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: isMobile ? "1rem" : "1.1rem",
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>

          {/* Second Column */}
          <Stack
            direction="column"
            spacing={isMobile ? 3 : 4}
            sx={{ width: { xs: "100%", md: "45%" }, px: isMobile ? 2 : 0 }}
          >
            {faqItems.slice(2, 4).map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  width: "100%",
                  boxShadow: theme.shadows[3],
                  borderRadius: "12px !important",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:before": { display: "none" },
                  "&:hover": {
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        fontSize: "1.8rem",
                        color: "secondary.main",
                      }}
                    />
                  }
                  sx={{
                    py: isMobile ? 2 : 3,
                    px: isMobile ? 3 : 4,
                    minHeight: "72px",
                    backgroundColor: theme.palette.grey[100],
                    "&.Mui-expanded": {
                      backgroundColor: theme.palette.grey[200],
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: isMobile ? "1.1rem" : "1.2rem",
                      flex: 1,
                      color: "primary.main",
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    py: isMobile ? 2 : 3,
                    px: isMobile ? 3 : 4,
                    backgroundColor: theme.palette.background.paper,
                    height: isMobile ? "auto" : "200px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: isMobile ? "1rem" : "1.1rem",
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
