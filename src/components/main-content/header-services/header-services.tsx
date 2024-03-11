import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../custom-button";

const HeaderService = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h4">Explora todos nuestros servicios</Typography>
        <CustomButton text="Ver más" />
      </Stack>
    </Box>
  );
};

export default HeaderService;
