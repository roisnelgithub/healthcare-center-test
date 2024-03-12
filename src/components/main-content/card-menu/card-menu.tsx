import { Paper, Stack, Typography } from "@mui/material";
import { CustomIcon } from "../../custom-icon";
import { colorText } from "../../../styles";

interface CardMenuProps {
  id: number;
  title: string;
  desc: string;
  icon: string;
  iconSize?: number;
}
const CardMenu = ({ title, desc, icon, iconSize }: CardMenuProps) => {
  return (
    <Paper
      sx={{
        width: "100%",
        bgcolor: "white",
        borderRadius: 0,
        borderBottomRightRadius: "2rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        padding: "1rem 1rem",
      }}
    >
      <Stack
        alignItems="center"
        spacing={2}
        sx={{ maxWidth: "16rem", maxHeight: "18rem" }}
      >
        <CustomIcon size={55} icon={icon} iconSize={iconSize} />

        <Typography
          variant="h5"
          textAlign={"center"}
          fontWeight={"bold"}
          color={colorText}
          sx={{ maxWidth: "11rem" }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign={"center"}
          color={colorText}
          // sx={{
          //   textOverflow: "hidden",
          //   whiteSpace: "break-spaces",
          //   margin: "auto",
          // }}
        >
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CardMenu;
