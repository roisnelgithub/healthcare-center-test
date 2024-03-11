import { Box, Typography } from "@mui/material";

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
        bgcolor: "#4287f5",
        px: "32px",
        minWidth: "150px",
        borderRadius: "24px",
        ":hover": {
          bgcolor: "#3b77d8",
          cursor: "pointer",
        },
      }}
    >
      <Typography color="white">{text}</Typography>
    </Box>
  );
};

export default CustomButton;
