import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../layout";
import { useContext } from "react";
import { MQContext } from "../../context";
import {
  medicalBag,
  medicalPlaster,
  physicalExam,
  testTube,
  airplane,
  services,
  fastAttention,
  servicesMRO,
  people,
  law,
  medicalTest,
  recollection as recollection,
  trunk,
} from "../../assets";
import { CardGrid } from "../../components";

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
  {
    id: 5,
    title: "Examen médico de inmigración",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: airplane,
  },
  {
    id: 6,
    title: "Atención rápida",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: fastAttention,
  },
  {
    id: 7,
    title: "Servicios MRO",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: servicesMRO,
  },
  {
    id: 8,
    title: "Programa de asistencia a empleados",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: people,
  },
  {
    id: 9,
    title: "Cumplimiento normativo",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: law,
  },
  {
    id: 10,
    title: "Recolección de muestras 24h",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: medicalTest,
  },
  {
    id: 11,
    title: "Red de sitios de recolección",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: recollection,
  },
  {
    id: 12,
    title: "Servicios DOT",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: trunk,
    link: "/services/dot",
  },
];

const ServicesPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  return (
    <Box>
      <HeaderPageLayout image={services}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            Nuestros Servicios
          </Typography>
        </Box>
      </HeaderPageLayout>
      <br />
      <hr />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          m: "3rem auto",
        }}
      >
        <Stack
          sx={{
            width: xs ? "95%" : sm ? "90%" : md ? "85%" : "80%",
          }}
          alignItems={"center"}
          spacing={6}
        >
          <CardGrid cards={cards} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ServicesPage;
