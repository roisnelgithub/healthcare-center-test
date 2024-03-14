import { Box } from "@mui/material";
import logo from "../../assets/moya-medical-logo-1.png";
import { useContext } from "react";
import { MQContext } from "../../context";
import { Link } from "react-router-dom";

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
      <Link to={"/"}>
        <img src={logo} alt="Moya Medical Logo" style={{ width: "100%" }} />
      </Link>
    </Box>
  );
};

export default Logo;
