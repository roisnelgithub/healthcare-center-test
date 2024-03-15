import { Paper, Stack, Typography } from "@mui/material";
import { CustomIcon } from "../custom-icon";
import { colorText } from "../../styles";
import { useContext } from "react";
import { MQContext } from "../../context";
import { Link } from "react-router-dom";

export interface CardMenu {
  id: number;
  title: string;
  desc: string;
  icon: string;
  link?: string;
}

interface CardMenuProps {
  card: CardMenu;
}
const CardMenu = ({ card }: CardMenuProps) => {
  const { title, desc, icon, link } = card;
  const { xs, md } = useContext(MQContext);

  return (
    <Link to={link ? link : ""}>
      <Paper
        sx={{
          bgcolor: "white",
          borderRadius: 0,
          minWidth: "120px",
          maxWidth: "296px",
          borderBottomRightRadius: "2rem",
          textOverflow: "ellipsis",
          overflow: "hidden",
          padding: xs ? "0.5rem" : "1rem",
        }}
      >
        <Stack alignItems="center" spacing={xs ? 1 : 2}>
          <CustomIcon size={xs ? 24 : md ? 48 : 55} icon={icon} />
          <Stack sx={{ height: "64px" }} justifyContent={"center"}>
            <Typography
              variant={xs ? "subtitle1" : "h6"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={colorText}
            >
              {title}
            </Typography>
          </Stack>

          <Stack sx={{ height: "80px", overflow: "hidden" }}>
            <Typography
              variant="caption"
              textAlign={"center"}
              color={colorText}
            >
              {desc}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
};

export default CardMenu;
