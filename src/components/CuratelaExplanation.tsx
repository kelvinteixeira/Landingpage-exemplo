import { Box, Typography, Button, useMediaQuery, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useWhatsApp } from "../hooks/useWhatsapp";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const CuratelaExplanation = () => {
  const { onClick } = useWhatsApp();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
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
      y: 20 
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

  const imageVariants = {
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

  const contentVariants = {
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
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: 6,
        py: 8,
        px: isMobile ? 4 : 8,
        bgcolor: "background.paper",
        overflow: "hidden"
      }}
    >
      {/* Left Side - Image */}
      <Box
        component={motion.div}
        variants={imageVariants}
        sx={{
          flex: 1,
          minWidth: isMobile ? "100%" : "50%",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 3,
          height: isMobile ? "300px" : "500px",
        }}
      >
        <motion.img
          src="/images/curatela-explanation-image.jpg"
          alt="Advogado especializado em curatela"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
        />
      </Box>

      {/* Right Side - Content */}
      <Box
        component={motion.div}
        variants={contentVariants}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Typography
          component={motion.div}
          variants={itemVariants}
          variant="h2"
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
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: "120px",
            height: "8px",
            borderRadius: "4px",
            backgroundColor: theme.palette.secondary.light,
            my: 2,
          }}
        />

        <Typography
          component={motion.div}
          variants={itemVariants}
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
          component={motion.div}
          variants={itemVariants}
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
          component={motion.div}
          variants={itemVariants}
          onClick={() => onClick()}
          variant="contained"
          size="large"
          whileHover={{ 
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
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