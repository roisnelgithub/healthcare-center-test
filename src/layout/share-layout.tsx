import { Outlet } from "react-router-dom";
import {
  Footer,
  MQContext,
  MenuContext,
  NavBar,
  SideMenu,
} from "../components";
import { Box, Stack } from "@mui/material";
import { useContext } from "react";

const ShareLayout = () => {
  const { lg } = useContext(MQContext);
  const { isOpen, closeMenu } = useContext(MenuContext);
  return (
    <>
      {!lg && isOpen ? <SideMenu /> : null}
      {isOpen && (
        <Box
          onClick={closeMenu}
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "grey",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 15,
            opacity: 0.7,
          }}
        ></Box>
      )}
      <Stack sx={{ position: "absolute", top: 0, left: 0 }}>
        <NavBar />
      </Stack>
      <Outlet />
      <Footer />
    </>
  );
};

export default ShareLayout;
