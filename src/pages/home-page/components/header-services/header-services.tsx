import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { colorText } from "../../../../styles";
import { Link } from "react-router-dom";

const HeaderService = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", zIndex: 10 }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h4" color={colorText} textAlign={"center"}>
          Explora todos nuestros servicios
        </Typography>
        <Link to="/services">
          <CustomButton text="Ver más" />
        </Link>
      </Stack>
    </Box>
  );
};

export default HeaderService;
