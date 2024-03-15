import { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MQContext } from "..";

export interface NavBarLink {
  id: number;
  url: string;
  name: string;
  shortName: string;
}

interface NavBarMenuProps {
  links: NavBarLink[];
  directionColumn: boolean;
}

const NavBarMenu = ({ links, directionColumn }: NavBarMenuProps) => {
  const { xs, sm, md } = useContext(MQContext);
  return (
    <Stack
      direction={directionColumn ? "column" : "row"}
      spacing={xs ? 1 : sm ? 3 : md ? 4 : 6}
    >
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.url}
          className={({ isActive }) => (isActive ? "active" : "normal")}
        >
          <Typography textAlign="center">
            {xs && directionColumn
              ? link.name
              : sm && !directionColumn
              ? link.shortName
              : link.name}
          </Typography>
        </NavLink>
      ))}
    </Stack>
  );
};

export default NavBarMenu;
