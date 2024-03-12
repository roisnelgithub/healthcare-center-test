import { Stack, Typography } from "@mui/material";
import { CustomButton } from "../../custom-button";
import { doctors } from "../../../assets/index";
import { colorText } from "../../../styles";

import "./info-services.css";

const InfoServices = () => {
  return (
    <Stack alignItems={"center"} spacing={6}>
      <Stack direction="row" sx={{ maxWidth: "1000px" }} spacing={4}>
        <Stack sx={{ width: "55%" }}>
          <img src={doctors} />
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h2" fontWeight="bold" color={colorText}>
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
