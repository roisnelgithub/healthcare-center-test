import { Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { MQContext } from "..";
import { useContext } from "react";
import { colorBlue } from "../../styles";
import { carouselItems } from "../../const";
import { CarouselItem } from "./carouselItem";

const CustomCarousel = () => {
  const { xs, sm, md } = useContext(MQContext);

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
        {carouselItems.map((item, i) => (
          <CarouselItem
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
