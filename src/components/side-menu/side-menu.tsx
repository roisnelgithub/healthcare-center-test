import { Box } from "@mui/material";
import { Header } from "./header";
import { Menu } from "./menu";

const SideMenu = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          right: 0,
          width: "300px",
          height: "100vh",
          bgcolor: "white",
          p: "2rem 1rem",
        }}
      >
        <Header />
        <Menu />
      </Box>
    </Box>
  );
};

export default SideMenu;
