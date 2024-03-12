import { Box, Stack } from "@mui/material";
import { Logo } from "../../logo";
import { LeftMenu } from "../../left-menu";
import { RightMenu } from "../../right-menu";
import { Language } from "../../language";

const NavBar = () => {
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
        justifyContent="center"
        alignItems="center"
        sx={{ color: "white", py: "1rem" }}
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
