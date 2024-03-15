import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../logo";
import { Language } from "../language";
import { useContext } from "react";
import { MQContext, MenuContext } from "../../context";
import { Menu } from "@mui/icons-material";
import { NavBarMenu } from "../nav-bar-menu";
import { navBarLeft, navBarRight } from "../../const";

const NavBar = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { openMenu } = useContext(MenuContext);

  return (
    <Box
      sx={{
        width: "100vw",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <Stack
        direction="row"
        justifyContent={!xs ? "center" : "space-between"}
        alignItems="center"
        sx={{ color: "white", p: "1.5rem 0.5rem" }}
        spacing={xs ? 1 : sm ? 3 : md ? 4 : 6}
      >
        <Logo />
        {xs ? (
          <Box sx={{ pr: "0.5rem" }}>
            <Menu onClick={openMenu} />
          </Box>
        ) : (
          <>
            <NavBarMenu links={navBarLeft} directionColumn={false} />
            <Language arrowColor="white" />
            <NavBarMenu links={navBarRight} directionColumn={false} />
            {lg && <Typography>Portal de usuarios</Typography>}
          </>
        )}
      </Stack>
    </Box>
  );
};

export default NavBar;
