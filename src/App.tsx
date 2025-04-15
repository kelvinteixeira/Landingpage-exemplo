import { CssBaseline, Box } from "@mui/material";
import { HeroSection } from "./components/HeroSection";
import { CuratelaServices } from "./components/CuratelaServices";
import { CuratelaExplanation } from "./components/CuratelaExplanation";
import { CuratelaFAQ } from "./components/CuratelaFAQ";
import {Footer} from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsappButton";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <HeroSection />
        <CuratelaServices />
        <CuratelaExplanation/>
        <CuratelaFAQ/>
      </Box>
      <Footer/>
      <WhatsAppButton />
    </>
  );
}

export default App;
