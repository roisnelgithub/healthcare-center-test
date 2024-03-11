import { Box, Typography } from "@mui/material";

const CustomButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        bgcolor: "#4287f5",
        px: "32px",
        borderRadius: "24px",
        ":hover": {
          bgcolor: "#3b77d8",
          cursor: "pointer",
        },
      }}
    >
      <Typography color="white">Contáctanos</Typography>
    </Box>
  );
};

export default CustomButton;
