import { CssBaseline, Box, Container } from "@mui/material";
import Header from "./components/Header";
import VideoStories from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Header />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <VideoStories />
          <ContactForm />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;