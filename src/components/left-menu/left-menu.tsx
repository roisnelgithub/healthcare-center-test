import { Stack, Typography } from "@mui/material";

const LeftMenu = () => {
  return (
    <Stack direction="row" spacing={4} alignItems={"center"}>
      <Typography>Nuestra Compañía</Typography>
      <Typography>Nuestros Servicios</Typography>
    </Stack>
  );
};

export default LeftMenu;
