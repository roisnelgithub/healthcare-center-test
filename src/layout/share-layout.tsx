import { Outlet, useLocation } from "react-router-dom";
import {
  CustomBreadcrumbs,
  Footer,
  MQContext,
  MenuContext,
  NavBar,
  SideMenu,
} from "../components";
import { Box, Stack } from "@mui/material";
import { useContext } from "react";

const ShareLayout = () => {
  const { xs, lg } = useContext(MQContext);
  const { isOpen, closeMenu } = useContext(MenuContext);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
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
      <Stack sx={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}>
        <NavBar />
        {!xs && pathnames.length !== 0 && (
          <Stack alignItems={"center"}>
            <Box sx={{ width: "75%", maxWidth: "1400px" }}>
              <CustomBreadcrumbs pathnames={pathnames} />
            </Box>
          </Stack>
        )}
      </Stack>
      <Outlet />
      <Footer />
    </>
  );
};

export default ShareLayout;
