import { Stack } from "@mui/material";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { Footer } from "./components/footer";
import { MQContextProvider } from "./components/context";

import "./app.css";

function App() {
  return (
    <MQContextProvider>
      <Stack>
        <Header />
        <Stack spacing={4}>
          <MainContent />
          <Footer />
        </Stack>
      </Stack>
    </MQContextProvider>
  );
}

export default App;
