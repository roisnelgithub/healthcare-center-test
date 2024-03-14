import { Close } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { MenuContext } from "../..";
import { useContext } from "react";
import { Language } from "../../language";

const Header = () => {
  const { closeMenu } = useContext(MenuContext);
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      sx={{ width: "100%" }}
      alignItems={"center"}
    >
      <Language arrowColor="error" acronym />
      <Close color="info" fontSize="medium" onClick={closeMenu} />
    </Stack>
  );
};

export default Header;
