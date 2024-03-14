import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { useContext } from "react";
import { MQContext } from "../../../../context";

const Slogan = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  return (
    <Box sx={{ zIndex: 10, maxWidth: "500px", px: "1rem" }}>
      <Stack spacing={6} alignItems="center">
        <Typography
          variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
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
