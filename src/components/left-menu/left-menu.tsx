import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

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
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active" : "normal")}
      >
        <Typography>Nuestra Compañía</Typography>
      </NavLink>
      <NavLink
        to={"/services"}
        className={({ isActive }) => (isActive ? "active" : "normal")}
      >
        <Typography>Nuestros Servicios</Typography>
      </NavLink>
    </Stack>
  );
};

export default LeftMenu;
