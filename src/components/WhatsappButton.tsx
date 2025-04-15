import { styled, keyframes } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Tooltip from "@mui/material/Tooltip";
import { useWhatsApp } from "../hooks/useWhatsapp";
import { useTheme, useMediaQuery } from "@mui/material";

// Animação de pulso
const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const FloatingButton = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  zIndex: 1000,
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
}));

const PulseButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#25D366",
  color: "white",
  width: theme.spacing(7.5),
  height: theme.spacing(7.5),
  animation: `${pulse} 2s infinite`,
  "&:hover": {
    backgroundColor: "#128C7E",
  },
  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export const WhatsAppButton = () => {
  const { onClick } = useWhatsApp();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FloatingButton>
      <Tooltip title="Fale conosco" placement={isMobile ? "top" : "left"} arrow>
        <PulseButton
          onClick={() => onClick()}
          aria-label="WhatsApp"
          size={isMobile ? "medium" : "large"}
        >
          <WhatsAppIcon
            sx={{
              fontSize: isMobile ? 28 : 32,
            }}
          />
        </PulseButton>
      </Tooltip>
    </FloatingButton>
  );
};
