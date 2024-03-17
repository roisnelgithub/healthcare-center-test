import { Box, Paper } from "@mui/material";
import { Slogan } from "./slogan";

interface ItemProps {
  slogan: string;
  image: string;
  link: string;
  textBtn: string;
}
export const CarouselItem = ({ slogan, image, link, textBtn }: ItemProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 0,
        pb: "2rem",
        zIndex: "50",
        position: "relative",
        width: "100%",
      }}
    >
      <Slogan slogan={slogan} link={link} textBtn={textBtn}></Slogan>
      <Box
        sx={{
          background: `linear-gradient( rgb(0, 22, 57,0.8) , transparent), url(${image}) center/cover no-repeat`,
          height: "100vh",
        }}
      ></Box>
    </Paper>
  );
};
