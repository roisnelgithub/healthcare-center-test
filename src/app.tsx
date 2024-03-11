import { Stack } from "@mui/material";
import { Header } from "./components/header";
import "./app.css";
import { MainContent } from "./components/main-content";

function App() {
  return (
    <>
      <Stack spacing={25}>
        <Header />
        <MainContent />
      </Stack>
    </>
  );
}

export default App;
