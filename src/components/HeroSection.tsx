import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import { ContactForm } from "./ContactForm";
import { useWhatsApp } from "../hooks/useWhatsapp";

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const HeroSection = () => {
  const { onClick } = useWhatsApp();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/images/hero-bg7.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        color: theme.palette.text.primary,
        overflow: "hidden",
        pb: isMobile ? 10 : 20,
      }}
    >
      {/* Header */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        sx={{
          padding: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "",
          ml: isMobile ? 0 : 50,
        }}
      >
        <img 
          style={{ width: 200, zIndex: 10 }} 
          src="/images/jv-logo-white.png" 
          alt="Foto do João Vitor Advogado" 
        />
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 4 : 2,
            width: "100%",
          }}
        >
          {/* Left Side - Text */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
              paddingTop: isMobile ? 2 : 0,
              paddingLeft: isMobile ? 0 : "5%",
              maxWidth: isMobile ? "100%" : "50%",
            }}
          >
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
              component={motion.h1}
              variants={itemVariants}
              variant="h1"
              sx={{
                background: `${theme.palette.primary.contrastText}`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              Curatela Especializada
            </Typography>

            <Typography
              component={motion.h2}
              variants={itemVariants}
              variant={isMobile ? "body1" : "h6"}
              sx={{
                color: theme.palette.text.primary,
                maxWidth: "90%",
                lineHeight: 1.6,
                fontSize: isMobile ? "1.1rem" : "1.2rem",
                "& span": {
                  fontWeight: 700,
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Oferecemos processos de <span>curatela</span> com abordagem{" "}
              <span>humanizada</span>, garantindo os <span>direitos</span> de
              pessoas que necessitam de <span> proteção legal</span>, com
              agilidade e sensibilidade jurídica.
            </Typography>

            <Stack
              component={motion.div}
              variants={itemVariants}
              direction={isMobile ? "column" : "row"}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button
                component={motion.button}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 4px 12px ${theme.palette.secondary.main}80`,
                }}
                whileTap={{ scale: 0.98 }}
                variant="contained"
                onClick={() => onClick()}
                size="large"
                sx={{
                  padding: "14px 32px",
                  fontSize: "1rem",
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.text.secondary,
                  fontWeight: 600,
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: "translateY(-2px)",
                    boxShadow: `0 4px 12px ${theme.palette.secondary.main}80`,
                  },
                }}
              >
                Fale com um especialista
              </Button>
            </Stack>
          </Box>

          {/* Right Side - Form */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          )}
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        component={motion.div}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "300px",
          backgroundColor: theme.palette.primary.main,
          opacity: 0.05,
          borderRadius: "50%",
          transform: "translate(30%, 30%)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          backgroundColor: theme.palette.secondary.main,
          opacity: 0.08,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
    </Box>
  );
};