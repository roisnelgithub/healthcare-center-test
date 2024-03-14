import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const RightMenu = () => {
  return (
    <div>
      <Stack direction="row" spacing={4} alignItems={"center"}>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "normal")}
        >
          <Typography>Contáctenos</Typography>
        </NavLink>
        <Typography>Portal de pacientes</Typography>
      </Stack>
    </div>
  );
};

export default RightMenu;
