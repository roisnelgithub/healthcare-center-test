import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../logo";
import { LeftMenu } from "../../left-menu";
import { CopyRight } from "../copy-right";
import { colorFooter } from "../../../styles";
import { Language } from "../../language";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          height: "200px",
          bgcolor: colorFooter,
          borderTopRightRadius: "60%",
          borderTopLeftRadius: "60%",
          color: "white",
          width: "100%",
          maxWidth: "1920px",
        }}
      >
        <Stack alignItems={"center"} sx={{}}>
          <Stack direction="row" spacing={4}>
            <Logo />
            <LeftMenu />
            <Language />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Contáctenos</Typography>
            </Box>
          </Stack>
        </Stack>

        <CopyRight />
      </Box>
    </Box>
  );
};

export default Footer;
