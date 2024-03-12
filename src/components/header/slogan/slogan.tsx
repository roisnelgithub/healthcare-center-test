import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../custom-button";

const Slogan = () => {
  return (
    <Box sx={{ zIndex: 10, maxWidth: "500px" }}>
      <Stack spacing={6} alignItems="center">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ color: "white", textAlign: "center" }}
        >
          Tu bienestar es nuestra prioridad
        </Typography>
        <CustomButton text="Contáctenos" />
      </Stack>
    </Box>
  );
};

export default Slogan;
