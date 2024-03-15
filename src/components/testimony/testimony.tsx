import { Rating, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { MQContext } from "..";
import { colorText } from "../../styles";

export interface Testimony {
  id: number;
  name: string;
  comment: string;
  rate: number;
  image: string;
}

interface TestimonyProps {
  isInvert: boolean;
  testimony: Testimony;
}
const Testimony = ({ isInvert, testimony }: TestimonyProps) => {
  const { name, comment, rate, image } = testimony;
  const { sm, md } = useContext(MQContext);

  let rowReverse = false;

  if (isInvert) {
    rowReverse = true;
  }
  return (
    <Stack sx={{ width: "100%" }}>
      <Stack
        direction={sm ? "column" : rowReverse ? "row-reverse" : "row"}
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          sx={{ width: sm ? "100%" : "55%", maxWidth: "500px" }}
          justifyContent={md ? "center" : ""}
        >
          <img src={image} />
        </Stack>

        <Stack spacing={2} alignItems={"center"}>
          <Typography
            variant={"h5"}
            fontWeight="bold"
            color={colorText}
            textAlign={"center"}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            color={colorText}
          >
            {comment}
          </Typography>
          <Rating name="read-only" value={rate} readOnly />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testimony;
