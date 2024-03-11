import { Box, Stack } from "@mui/material";
import { Logo } from "../../logo";
import { LeftMenu } from "../../left-menu";
import { RightMenu } from "../../right-menu";
import Language from "../lenguaje/languaje";

const NavBar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "rgba(0, 149, 248, 0.2)",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "50px", color: "white" }}
        spacing={6}
      >
        <Logo />
        <LeftMenu />
        <Language />
        <RightMenu />
      </Stack>
    </Box>
  );
};

export default NavBar;
