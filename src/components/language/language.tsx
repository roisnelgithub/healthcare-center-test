import { Stack } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const SwitchLanguage = () => {
  return (
    <Stack direction="row" alignItems={"center"}>
      {/* TODO: Hacer el seleccionar del idioma */}
      <span>🇪🇸</span>
      <ArrowDropDown />
    </Stack>
  );
};

export default SwitchLanguage;
