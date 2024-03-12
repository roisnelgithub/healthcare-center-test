import { Box } from "@mui/material";
import logo from "../../assets/moya-medical-logo-1.png";

const Logo = () => {
  return (
    <Box sx={{ width: "280px", display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Moya Medical Logo" style={{ width: "100%" }} />
    </Box>
  );
};

export default Logo;
