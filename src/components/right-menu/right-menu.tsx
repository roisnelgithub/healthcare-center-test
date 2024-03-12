import { Stack, Typography } from "@mui/material";

const RightMenu = () => {
  return (
    <div>
      <Stack direction="row" spacing={4} alignItems={"center"}>
        <Typography>Contáctenos</Typography>
        <Typography>Portal de pacientes</Typography>
      </Stack>
    </div>
  );
};

export default RightMenu;
