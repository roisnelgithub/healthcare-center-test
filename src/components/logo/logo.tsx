import { Box } from "@mui/material";
import logo from "../../assets/moya-medical-logo-1.png";
import { useContext } from "react";
import { MQContext } from "../context";

const Logo = () => {
  const { sm } = useContext(MQContext);
  return (
    <Box
      sx={{
        width: sm ? "240px" : "280px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="Moya Medical Logo" style={{ width: "100%" }} />
    </Box>
  );
};

export default Logo;
