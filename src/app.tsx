import { Stack } from "@mui/material";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { Footer } from "./components/footer";

import "./app.css";

function App() {
  return (
    <Stack spacing={8}>
      <Stack spacing={25}>
        <Header />
        <MainContent />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default App;
