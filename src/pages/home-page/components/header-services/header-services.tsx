import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { colorText } from "../../../../styles";

const HeaderService = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", zIndex: 10 }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h4" color={colorText} textAlign={"center"}>
          Explora todos nuestros servicios
        </Typography>
        <CustomButton text="Ver más" />
      </Stack>
    </Box>
  );
};

export default HeaderService;
