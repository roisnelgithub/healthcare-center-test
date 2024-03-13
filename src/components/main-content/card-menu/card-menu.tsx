import { Paper, Stack, Typography } from "@mui/material";
import { CustomIcon } from "../../custom-icon";
import { colorText } from "../../../styles";
import { useContext } from "react";
import { MQContext } from "../../context";

interface CardMenuProps {
  id: number;
  title: string;
  desc: string;
  icon: string;
}
const CardMenu = ({ title, desc, icon }: CardMenuProps) => {
  const { xs, md } = useContext(MQContext);
  return (
    <Paper
      sx={{
        bgcolor: "white",
        borderRadius: 0,
        minWidth: "120px",
        maxWidth: "296px",
        maxHeight: "397px",
        borderBottomRightRadius: "2rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        padding: xs ? "0.5rem" : "1rem",
      }}
    >
      <Stack alignItems="center" spacing={xs ? 1 : md ? 2 : 3}>
        <CustomIcon size={xs ? 24 : md ? 48 : 55} icon={icon} />

        <Typography
          variant={xs ? "subtitle1" : "h5"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={colorText}
          sx={{ maxWidth: "11rem" }}
        >
          {title}
        </Typography>
        <Typography variant="caption" textAlign={"center"} color={colorText}>
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CardMenu;
