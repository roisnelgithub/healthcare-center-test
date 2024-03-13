import { Grid } from "@mui/material";
import {
  medicalBag,
  medicalPlaster,
  physicalExam,
  testTube,
} from "../../../assets";
import { CardMenu } from "../card-menu";

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
  },
  {
    id: 4,
    title: "Medicina preventiva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed diam",
    icon: medicalBag,
  },
];

const CardGrid = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 2, md: 3 }}
      justifyContent={"center"}
      columns={{ xs: 4, sm: 12, md: 12 }}
      sx={{ ml: "-8px" }}
    >
      {cards.map((card) => (
        <Grid key={card.id} item xs={2} sm={6} md={3}>
          <CardMenu key={card.id} {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
