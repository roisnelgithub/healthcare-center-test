import { Stack } from "@mui/material";
import { CardMenu } from "../header/card-menu";

const CardList = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      spacing={3}
      sx={{ width: "100%" }}
    >
      <CardMenu
        title="Atención de lesiones"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, magnam?"
      />
      <CardMenu
        title="Pruebas de droga y alcohol"
        desc="Assumenda cumque, vel aspernatur corporis quo fugiat. Sed odit tempore assumenda maxime accusantium magni voluptates eaque voluptatibus aperiam quibusdam veniam, pariatur in."
      />
      <CardMenu
        title="Exámenes físicos"
        desc="Assumenda cumque, vel aspernatur corporis quo fugiat. Sed odit tempore assumenda maxime accusantium magni voluptates eaque."
      />
      <CardMenu
        title="Medicina preventiva"
        desc="Consectetur adipisicing elit. Assumenda cumque, vel aspernatur corporis quo fugiat. Sed odit tempore assumenda maxime accusantium magni voluptates eaque voluptatibus aperiam quibusdam veniam."
      />
    </Stack>
  );
};

export default CardList;
