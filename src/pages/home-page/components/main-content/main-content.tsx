import { Box, Stack } from "@mui/material";
import { HeaderServices } from "../header-services";
import { InfoServices } from "../info-services";
import { useContext } from "react";
import { MQContext } from "../../../../context";
import {
  medicalBag,
  medicalPlaster,
  physicalExam,
  testTube,
} from "../../../../assets";
import { CardGrid } from "../../../../components";

const MainContent = () => {
  const { xs, sm, md } = useContext(MQContext);
  const cards = [
    {
      id: 1,
      title: "Atención de lesiones",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
      icon: medicalPlaster,
      link: "/services/la",
    },
    {
      id: 2,
      title: "Pruebas de droga y alcohol",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
      icon: testTube,
    },
    {
      id: 3,
      title: "Exámenes físicos",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
      icon: physicalExam,
    },
    {
      id: 4,
      title: "Medicina preventiva",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
      icon: medicalBag,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: "0 auto",
          justifyContent: "center",
          transform: "translateY(-6rem)",
        }}
      >
        <Box
          sx={{
            width: xs ? "95%" : sm ? "90%" : md ? "85%" : "80%",
          }}
        >
          <CardGrid cards={cards} />
        </Box>
      </Box>
      <Stack spacing={10} sx={{ transform: "translateY(-6rem)", mt: "2rem" }}>
        <HeaderServices />
        <InfoServices />
      </Stack>
    </>
  );
};

export default MainContent;
