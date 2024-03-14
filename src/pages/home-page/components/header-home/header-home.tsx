import { Box, Stack } from "@mui/material";
import { Slogan } from "../slogan";
import doctor from "../../../../assets/doctor-1.png";
import { useContext } from "react";
import { MQContext } from "../../../../context";

const HeaderHome = () => {
  const { xs, sm, md } = useContext(MQContext);

  return (
    <Box
      sx={{ position: "relative", display: "flex", justifyContent: "center" }}
    >
      <Stack
        alignItems="center"
        justifyContent={"center"}
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Slogan />
      </Stack>
      <Box
        sx={{
          background: `linear-gradient( rgb(0, 22, 57,0.8) , transparent), url(${doctor}) center no-repeat`,
          width: "100%",
          maxWidth: "1920px",
          height: "100vh",
          maxHeight: "1000px",
          borderBottomLeftRadius: xs
            ? "3rem"
            : sm
            ? "6rem"
            : md
            ? "12rem"
            : "18rem",
          borderBottomRightRadius: xs
            ? "3rem"
            : sm
            ? "6rem"
            : md
            ? "12rem"
            : "18rem",
        }}
      ></Box>
    </Box>
  );
};

export default HeaderHome;
