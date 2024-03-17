import { HomeOutlined } from "@mui/icons-material";
import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getNamePathEN, getNamePathES } from "../../helpers";
import { useContext } from "react";
import { LanguageContext } from "..";

interface CustomBreadcrumbsProps {
  pathnames: string[];
}
const pathsConstructor = (pathnames: string[], language: string) => {
  const paths = [
    <Link to="/" color="white">
      <Stack direction={"row"} justifyContent={"center"}>
        <HomeOutlined sx={{ mr: 0.5, color: "white" }} />
        <Typography color={"white"}>
          {language === "es" ? "Inicio" : "Home"}
        </Typography>
      </Stack>
    </Link>,
  ];

  for (let i = 0; i < pathnames.length; i++) {
    let name = "";
    if (language === "es") {
      name = getNamePathES(pathnames[i]);
    } else {
      name = getNamePathEN(pathnames[i]);
    }
    const to = `/${pathnames.slice(0, i + 1).join("/")}`;
    const path = (
      <Link to={to} color="white">
        <Typography color={"white"}>{name}</Typography>
      </Link>
    );
    paths.push(path);
  }
  return paths;
};

const CustomBreadcrumbs = ({ pathnames }: CustomBreadcrumbsProps) => {
  const { language } = useContext(LanguageContext);
  const paths = pathsConstructor(pathnames, language);
  return (
    <Stack direction="row" spacing={2}>
      <Breadcrumbs
        separator={<Box sx={{ color: "white" }}>›</Box>}
        aria-label="breadcrumb"
      >
        {paths.map((path, index) => (
          <Box key={index}>{path}</Box>
        ))}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadcrumbs;
