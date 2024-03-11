import { Stack } from "@mui/material";
import { HeaderServices } from "../header-services";
import { InfoServices } from "../info-services";

const MainContent = () => {
  return (
    <Stack spacing={14}>
      <HeaderServices />
      <InfoServices />
    </Stack>
  );
};

export default MainContent;
