import { Grid } from "@mui/material";
import { CardMenu } from "../card-menu";
import { type CardService as CardMenuType } from "../card-menu/card-menu";

interface CardGridProps {
  cards: CardMenuType[];
}
const CardGrid = ({ cards }: CardGridProps) => {
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
          <CardMenu key={card.id} card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
