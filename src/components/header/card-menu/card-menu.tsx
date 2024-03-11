import { Paper, Stack, Typography } from "@mui/material";

interface CardMenuProps {
  title: string;
  desc: string;
}
const CardMenu = ({ title, desc }: CardMenuProps) => {
  return (
    <Paper
      sx={{
        width: "200px",
        height: "250px",
        bgcolor: "white",
        borderBottomRightRadius: "16px",
        overflow: "hidden",
        p: "16px",
      }}
    >
      <Stack alignItems="center" spacing={2}>
        {/* TODO: Cambiar por el ícono */}
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "#4287f5",
            borderRadius: "50%",
          }}
        ></div>
        <Typography variant="h6" textAlign={"center"}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign={"center"}
          sx={{ textOverflow: "hidden", p: "8px" }}
        >
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CardMenu;
