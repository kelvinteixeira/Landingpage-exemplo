import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const ServiceItem = ({ title, description }: { title: string, description: string }) => (
  <Box sx={{ display: "flex", gap: 3 }}>
    <CheckCircleOutline sx={{
      fontSize: 40,
      color: "secondary.main",
    }} />
    <Box>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontWeight: 600,
          color: "primary.light",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </Box>
  </Box>
);