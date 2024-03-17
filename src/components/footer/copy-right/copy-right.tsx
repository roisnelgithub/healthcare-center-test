import { Typography } from "@mui/material";
import { useContext } from "react";
import { MQContext } from "../../../context";
import { useTranslation } from "react-i18next";

const CopyRight = () => {
  const { xs } = useContext(MQContext);
  const { t } = useTranslation();

  return (
    <Typography textAlign={"center"} variant={xs ? "body2" : "body1"}>
      {t("copyRight")}
    </Typography>
  );
};

export default CopyRight;
