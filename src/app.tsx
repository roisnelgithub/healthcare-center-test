import { Stack } from "@mui/material";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { Footer } from "./components/footer";

import "./app.css";

function App() {
  return (
    <Stack>
      <Header />
      <Stack spacing={4}>
        <MainContent />
        <Footer />
      </Stack>
    </Stack>
  );
}

export default App;
