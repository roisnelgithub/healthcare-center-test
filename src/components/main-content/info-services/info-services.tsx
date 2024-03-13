import { Stack, Typography } from "@mui/material";
import { CustomButton } from "../../custom-button";
import { doctors } from "../../../assets/index";
import { colorText } from "../../../styles";

import "./info-services.css";
import { useContext } from "react";
import { MQContext } from "../../context";

const InfoServices = () => {
  const { xs, sm, md } = useContext(MQContext);

  return (
    <Stack alignItems={"center"} spacing={6}>
      <Stack
        direction={sm ? "column" : "row"}
        sx={{ maxWidth: "80%" }}
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          sx={{ width: sm ? "100%" : "55%", maxWidth: "500px" }}
          justifyContent={md ? "center" : ""}
        >
          <img src={doctors} />
        </Stack>

        <Stack spacing={2}>
          <Typography
            variant={xs ? "h4" : sm ? "h3" : "h2"}
            fontWeight="bold"
            color={colorText}
            textAlign={"center"}
          >
            Servicios DOT
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
      <CustomButton text="Ver más" />
    </Stack>
  );
};

export default InfoServices;
