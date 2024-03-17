import { Box } from "@mui/material";
import { useContext } from "react";
import { MQContext } from "../../context";
import { Link } from "react-router-dom";
import { moyaMedicalLogo } from "../../assets";

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
        <img
          src={moyaMedicalLogo}
          alt="Moya Medical Logo"
          style={{ width: "100%" }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
