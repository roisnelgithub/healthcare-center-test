import { Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { doctorsImg } from "../../../../assets/index";
import { colorText } from "../../../../styles";

import { useContext } from "react";
import { MQContext } from "../../../../context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InfoServices = () => {
  const { xs, sm, md } = useContext(MQContext);
  const { t } = useTranslation();

  return (
    <Stack alignItems={"center"} spacing={6}>
      <Stack
        direction={sm ? "column" : "row"}
        sx={{ maxWidth: "1400px" }}
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          sx={{ width: sm ? "100%" : "55%", maxWidth: "500px" }}
          justifyContent={md ? "center" : ""}
        >
          <img src={doctorsImg} />
        </Stack>

        <Stack spacing={2}>
          <Typography
            variant={xs ? "h4" : sm ? "h3" : "h2"}
            fontWeight="bold"
            color={colorText}
            textAlign={"center"}
          >
            {t("servicesDOT")}
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            color={colorText}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam optio
            voluptates consectetur ratione repellat minima. Molestias architecto
            repellendus dolor libero asperiores magnam officia corrupti.
            Perspiciatis natus beatae neque quisquam quo. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Odit, vel architecto. Non,
            itaque? Labore, nisi quidem recusandae et.
          </Typography>
        </Stack>
      </Stack>
      <Link to="/services/12">
        <CustomButton text={t("btnSeeMore")} />
      </Link>
    </Stack>
  );
};

export default InfoServices;
