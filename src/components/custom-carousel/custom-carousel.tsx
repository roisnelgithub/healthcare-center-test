import { Box, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { doctorImg, servicesImg, whyUsImg } from "../../assets";
import { MQContext } from "..";
import { useContext } from "react";
import { colorBlue } from "../../styles";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../custom-button";
import { Link } from "react-router-dom";
const CustomCarousel = () => {
  const { xs, sm, md } = useContext(MQContext);

  const items = [
    {
      slogan: "homeHeaderTitle",
      image: doctorImg,
      link: "/contact",
      textBtn: "btnContact",
    },
    {
      slogan: "servicesHeaderTitle",
      image: servicesImg,
      link: "/services",
      textBtn: "btnSeeMore",
    },
    {
      slogan: "aboutWhyUsTitle",
      image: whyUsImg,
      link: "/why-us",
      textBtn: "btnSeeMore",
    },
  ];
  return (
    <Stack alignItems={"center"}>
      <Carousel
        duration={1}
        indicatorIconButtonProps={{
          style: {
            zIndex: 50,
            transform: `translateY(${xs ? "-8rem" : sm ? "-10rem" : "-14rem"})`,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: colorBlue,
          },
        }}
        sx={{
          width: "100%",
          maxWidth: "1920px",
          height: "100vh",
          maxHeight: "1000px",
          overflow: "hidden",
          borderBottomLeftRadius: xs
            ? "3rem"
            : sm
            ? "6rem"
            : md
            ? "12rem"
            : "18rem",
          borderBottomRightRadius: xs
            ? "3rem"
            : sm
            ? "6rem"
            : md
            ? "12rem"
            : "18rem",
        }}
      >
        {items.map((item, i) => (
          <Item
            key={i}
            slogan={item.slogan}
            image={item.image}
            link={item.link}
            textBtn={item.textBtn}
          />
        ))}
      </Carousel>
    </Stack>
  );
};

export default CustomCarousel;

interface ItemProps {
  slogan: string;
  image: string;
  link: string;
  textBtn: string;
}
export const Item = ({ slogan, image, link, textBtn }: ItemProps) => {
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
interface SloganProps {
  slogan: string;
  link: string;
  textBtn: string;
}

const Slogan = ({ slogan, link, textBtn }: SloganProps) => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  return (
    <Stack
      alignItems="center"
      sx={{
        position: "absolute",
        top: "30%",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ zIndex: 10, maxWidth: "500px", px: "1rem" }}>
        <Stack spacing={6} alignItems="center">
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            {t(slogan)}
          </Typography>
          <Link to={link}>
            <CustomButton text={t(textBtn)} />
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};
