import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../logo";
import { LeftMenu } from "../../left-menu";
import Language from "../../header/lenguaje/languaje";
import { CopyRight } from "../copy-right";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        height: "200px",
        bgcolor: "#101949",
        borderTopRightRadius: "60%",
        borderTopLeftRadius: "60%",
        color: "white",
      }}
    >
      <Stack alignItems={"center"} sx={{}}>
        <Stack direction="row" spacing={4}>
          <Logo />
          <LeftMenu />
          <Language />
          <Typography>Contáctanos</Typography>
        </Stack>
      </Stack>

      <CopyRight />
    </Box>
  );
};

export default Footer;
