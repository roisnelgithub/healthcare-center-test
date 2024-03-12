import { Stack } from "@mui/material";
import { CardMenu } from "../card-menu";
import {
  medicalPlaster,
  medicalBag,
  physicalExam,
  testTube,
} from "../../../assets/index";
const cards = [
  {
    id: 1,
    title: "Atención de lesiones",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: medicalPlaster,
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
    iconSize: 50,
  },
  {
    id: 4,
    title: "Medicina preventiva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: medicalBag,
  },
];

const CardList = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      spacing={3}
      sx={{ width: "80%", margin: "0 auto" }}
    >
      {cards.map((card) => (
        <CardMenu key={card.id} {...card} />
      ))}
    </Stack>
  );
};

export default CardList;
