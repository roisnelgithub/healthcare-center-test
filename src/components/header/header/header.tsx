import { Box, Stack } from "@mui/material";
import { Slogan } from "../slogan";
import NavBar from "../nav-bar/nav-bar";
import doctor from "../../../assets/doctor-1.png";

const Header = () => {
  return (
    <Box
      sx={{ position: "relative", display: "flex", justifyContent: "center" }}
    >
      <Stack sx={{ position: "absolute", top: 0, left: 0 }}>
        <NavBar />
      </Stack>
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
          borderBottomLeftRadius: "300px",
          borderBottomRightRadius: "300px",
        }}
      ></Box>
    </Box>
  );
};

export default Header;
