import { Stack } from "@mui/material";
import {
  Footer,
  Header,
  MQContext,
  MainContent,
  MenuContext,
  SideMenu,
} from "./components";
import { useContext } from "react";

// Hasta que haga el router.
const Temporal = () => {
  const { lg } = useContext(MQContext);
  const { isOpen } = useContext(MenuContext);
  return (
    <Stack>
      {!lg && isOpen ? <SideMenu /> : null}
      <Header />
      <Stack spacing={4}>
        <MainContent />
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Temporal;
