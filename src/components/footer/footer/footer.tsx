import { Box, Stack } from "@mui/material";
import { Logo } from "../../logo";
import { CopyRight } from "../copy-right";
import { colorFooter } from "../../../styles";
import { Language } from "../../language";
import { useContext } from "react";
import { MQContext } from "../../../context";
import { NavBarMenu } from "../../nav-bar-menu";
import { navBarLeft, navBarRight } from "../../../const";

const Footer = () => {
  const { xs, sm, md } = useContext(MQContext);
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 6,
          bgcolor: colorFooter,
          borderTopRightRadius: xs ? "7rem" : "60%",
          borderTopLeftRadius: xs ? "7rem" : "60%",
          color: "white",
          width: "100%",
          maxWidth: "1920px",
          p: xs ? "1.5rem 0 0.5rem 0" : "3rem",
        }}
      >
        <Stack alignItems={"center"}>
          <Stack
            direction={xs ? "column" : "row"}
            alignItems={"center"}
            spacing={xs || sm ? 1 : md ? 2 : 4}
          >
            <Logo />
            <NavBarMenu links={navBarLeft} directionColumn={xs} />
            <Language arrowColor="white" />
            <NavBarMenu links={navBarRight} directionColumn={xs} />
          </Stack>
        </Stack>
        <Stack sx={{ p: "1rem" }}>
          <CopyRight />
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
