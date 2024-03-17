import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MQContext } from "..";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom-button";

interface SloganProps {
  slogan: string;
  link: string;
  textBtn: string;
}

export const Slogan = ({ slogan, link, textBtn }: SloganProps) => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  return (
    <Stack
      alignItems="center"
      sx={{
        position: "absolute",
        top: "30%",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ zIndex: 10, maxWidth: "500px", px: "1rem" }}>
        <Stack spacing={6} alignItems="center">
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            {t(slogan)}
          </Typography>
          <Link to={link}>
            <CustomButton text={t(textBtn)} />
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};
