import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  useMediaQuery
} from "@mui/material";
import { ServiceItem } from "./ServiceItem";
import { theme } from "../theme/Theme";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const CuratelaServices = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const columnVariants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? 0 : -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightColumnVariants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? 0 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      sx={{
        position: "relative",
        overflow: "hidden",
        pb: isMobile ? 15 : 20,
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="xl" sx={{ 
        py: isMobile ? 6 : 8, 
        position: "relative", 
        zIndex: 2 
      }}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            component={motion.div}
            variants={itemVariants}
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "primary.main",
              fontSize: isSmallMobile ? '1.8rem' : '2.5rem',
              px: isMobile ? 2 : 0,
              lineHeight: 1.2
            }}
          >
            Com nosso serviço de curatela você terá:
          </Typography>
          <Divider
            component={motion.div}
            variants={itemVariants}
            sx={{
              width: isMobile ? "250px" : "350px",
              height: "6px",
              borderRadius: "4px",
              backgroundColor: "secondary.main",
              mt: 3,
              mb: isMobile ? 4 : 6,
            }}
          />
        </Grid>

        <Stack
          spacing={isMobile ? 4 : 6}
          direction={isMobile ? "column" : "row"}
          justifyContent={"center"}
          alignItems={isMobile ? "center" : "flex-start"}
          flexWrap="wrap"
        >
          {/* Left Column */}
          <Stack
            component={motion.div}
            variants={columnVariants}
            direction="column"
            spacing={isMobile ? 3 : 5}
            sx={{ 
              width: { xs: "100%", md: "45%" },
              px: isMobile ? 2 : 0
            }}
          >
            {[1, 2, 3].map((item) => (
              <ServiceItem
                key={item}
                title={
                  [
                    "Processo judicial ágil e humanizado",
                    "Advogados especializados em Direito de Família",
                    "Soluções personalizadas para cada caso",
                  ][item - 1]
                }
                description={
                  [
                    "Atuamos com celeridade nos processos de curatela, garantindo a proteção legal necessária sem burocracias desnecessárias, sempre com abordagem humanizada.",
                    "Nossa equipe é composta por especialistas em curatela e interdição, com ampla experiência em casos complexos e atualização constante nas mudanças legislativas.",
                    "Desenvolvemos estratégias jurídicas específicas para cada situação, considerando as particularidades do curatelado e da família.",
                  ][item - 1]
                }
              />
            ))}
          </Stack>

          {/* Right Column */}
          <Stack
            component={motion.div}
            variants={rightColumnVariants}
            direction="column"
            spacing={isMobile ? 3 : 5}
            sx={{ 
              width: { xs: "100%", md: "45%" },
              px: isMobile ? 2 : 0
            }}
          >
            {[4, 5, 6].map((item) => (
              <ServiceItem
                key={item}
                title={
                  [
                    "Consultoria completa em curatela",
                    "Atendimento digital e presencial",
                    "Ética e transparência absolutas",
                  ][item - 4]
                }
                description={
                  [
                    "Orientação em todas as etapas: desde a avaliação da necessidade de curatela até a gestão de bens e cuidados com o curatelado.",
                    "Oferecemos a comodidade do atendimento remoto sem abrir mão do cuidado pessoal quando necessário.",
                    "Atuamos com total compromisso ético, mantendo os familiares informados em todas as etapas do processo.",
                  ][item - 4]
                }
              />
            ))}
          </Stack>
        </Stack>
      </Container>

      {/* Wave Background */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? "100px" : "150px",
          backgroundImage: 'url("/images/hero-bg7.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "150% 100%",
          borderTopRightRadius: "50% 100%",
          transform: isMobile ? "scaleY(1.2)" : "scaleY(1.5)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};