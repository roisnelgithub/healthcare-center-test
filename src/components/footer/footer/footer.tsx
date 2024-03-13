import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../logo";
import { LeftMenu } from "../../left-menu";
import { CopyRight } from "../copy-right";
import { colorFooter } from "../../../styles";
import { Language } from "../../language";
import { useContext } from "react";
import { MQContext } from "../../../context";

const Footer = () => {
  const { xs, sm } = useContext(MQContext);
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
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
            direction={xs || sm ? "column" : "row"}
            spacing={4}
            alignItems={"center"}
          >
            <Logo />
            <LeftMenu directionColum={xs} />
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
