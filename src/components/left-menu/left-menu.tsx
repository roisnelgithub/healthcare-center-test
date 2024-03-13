import { Stack, Typography } from "@mui/material";

interface LeftMenuProps {
  directionColum: boolean;
}
const LeftMenu = ({ directionColum }: LeftMenuProps) => {
  return (
    <Stack
      direction={directionColum ? "column" : "row"}
      spacing={4}
      alignItems={"center"}
    >
      <Typography>Nuestra Compañía</Typography>
      <Typography>Nuestros Servicios</Typography>
    </Stack>
  );
};

export default LeftMenu;
