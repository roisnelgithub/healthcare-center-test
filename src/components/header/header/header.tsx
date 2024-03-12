import { Box, Stack } from "@mui/material";
import { Slogan } from "../slogan";
import { CardList } from "../../card-list";
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
        sx={{
          position: "absolute",
          top: "8rem",
          width: "100%",
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
      <Stack
        sx={{
          position: "absolute",
          bottom: "-160px",
          width: "100%",
          zIndex: 10,
        }}
      >
        <CardList />
      </Stack>
    </Box>
  );
};

export default Header;
