import { Box, Stack } from "@mui/material";
import { Logo } from "../../logo";
import { LeftMenu } from "../../left-menu";
import { RightMenu } from "../../right-menu";
import { Language } from "../../language";
import { useContext } from "react";
import { MQContext, MenuContext } from "../../../context";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  const { lg } = useContext(MQContext);
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
        justifyContent={lg ? "center" : "space-between"}
        alignItems="center"
        sx={{ color: "white", p: "1.5rem 0.5rem" }}
        spacing={6}
      >
        <Logo />
        {!lg ? (
          <Box sx={{ pr: "0.5rem" }}>
            <Menu onClick={openMenu} />
          </Box>
        ) : (
          <>
            <LeftMenu directionColum={false} />
            <Language arrowColor="white" />
            <RightMenu />
          </>
        )}
      </Stack>
    </Box>
  );
};

export default NavBar;
