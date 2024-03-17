import { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MQContext } from "..";
import { useTranslation } from "react-i18next";

export interface NavBarLink {
  id: number;
  url: string;
  name: string;
  shortName: string;
  translationKey: string;
  shortTranslationKey: string;
}

interface NavBarMenuProps {
  links: NavBarLink[];
  directionColumn: boolean;
}

const NavBarMenu = ({ links, directionColumn }: NavBarMenuProps) => {
  const { xs, sm, md } = useContext(MQContext);
  const { t } = useTranslation();
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
              ? t(`${link.translationKey}`)
              : sm && !directionColumn
              ? t(`${link.shortTranslationKey}`)
              : t(`${link.translationKey}`)}
          </Typography>
        </NavLink>
      ))}
    </Stack>
  );
};

export default NavBarMenu;
