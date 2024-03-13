import { Typography } from "@mui/material";
import { useContext } from "react";
import { MQContext } from "../../context";

const CopyRight = () => {
  const { xs } = useContext(MQContext);

  return (
    <Typography textAlign={"center"} variant={xs ? "body2" : "body1"}>
      2024 Moya Medical. Todos los derechos reservados
    </Typography>
  );
};

export default CopyRight;
