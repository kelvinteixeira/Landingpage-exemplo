import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const videos = [
  {
    id: 1,
    title: "Como Funciona a Curatela",
    thumbnail:
      "https://images.unsplash.com/photo-1694069475318-e47ccb21a898?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Depoimentos de Famílias",
    thumbnail:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Quem sou eu",
    thumbnail:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const VideoStories = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 600,
          mb: 6,
          textAlign: "center",
          color: "#333",
        }}
      >
        Você sabe o que é Curatela?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {videos.map((video) => (
          <Grid key={video.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={video.thumbnail}
                  alt={video.title}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  size="large"
                >
                  <PlayCircleOutlineIcon fontSize="large" />
                </IconButton>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 500 }}
                >
                  {video.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoStories;
