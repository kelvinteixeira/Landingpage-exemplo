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
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const CuratelaFAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const faqItems = [
    {
      question: "Quando é necessária a curatela?",
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
      question: "Quanto tempo dura o processo de curatela?",
      answer:
        "O tempo médio varia entre 3 a 12 meses, dependendo da complexidade do caso, da necessidade de perícias médicas e da agenda do judiciário local. Processos urgentes podem ser acelerados mediante comprovação de risco ao curatelado.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
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
            component={motion.div}
            variants={itemVariants}
            variant="h2"
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
            component={motion.div}
            variants={itemVariants}
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
            <motion.div
              custom={0}
              variants={{
                hidden: { opacity: 0, x: isMobile ? 0 : -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <Stack
                direction="column"
                justifyContent={"center"}
                alignItems={"center"}
                spacing={isMobile ? 3 : 4}
                sx={{ width: { xs: "100%",  }, px: isMobile ? 2 : 0 }}
              >
                {faqItems.map((item, index) => (
                  <Accordion
                    key={index}
                    component={motion.div}
                    variants={itemVariants}
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
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExpandMoreIcon
                            sx={{
                              fontSize: "1.8rem",
                              color: "secondary.main",
                            }}
                          />
                        </motion.div>
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
            </motion.div>
          </Stack>
        </Container>
      </Stack>
    </motion.div>
  );
};
