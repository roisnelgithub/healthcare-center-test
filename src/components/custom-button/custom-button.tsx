import { Box, Typography } from "@mui/material";
import { colorBlueBtn, colorBlueBtnHover } from "../../styles";

interface CustomButtonProps {
  text: string;
}
const CustomButton = ({ text }: CustomButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        bgcolor: colorBlueBtn,
        px: "32px",
        minWidth: "150px",
        borderRadius: "24px",
        boxShadow: 6,
        ":hover": {
          bgcolor: colorBlueBtnHover,
          cursor: "pointer",
        },
      }}
    >
      <Typography color="white">{text}</Typography>
    </Box>
  );
};

export default CustomButton;
