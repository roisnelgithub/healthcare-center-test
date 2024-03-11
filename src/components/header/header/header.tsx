import { Box, Stack } from "@mui/material";
import doctor from "../../../assets/doctor.jpg";
import NavBar from "../nav-bar/nav-bar";
import { Slogan } from "../slogan";

const Header = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack sx={{ position: "absolute", top: 0, left: 0 }}>
        <NavBar />
      </Stack>
      <Stack
        alignItems="center"
        sx={{
          position: "absolute",
          top: "200px",
          width: "100%",
        }}
      >
        <Slogan />
      </Stack>
      <Box
        sx={{
          background: `url(${doctor})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "100%",
          opacity: 0.8,
          height: "calc(100vh - 20px)",
          borderBottomLeftRadius: "300px",
          borderBottomRightRadius: "300px",
        }}
      ></Box>
    </Box>
  );
};

export default Header;
