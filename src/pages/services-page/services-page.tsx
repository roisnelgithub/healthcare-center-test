import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../layout";
import { useContext } from "react";
import { MQContext } from "../../context";

import { CardGrid } from "../../components";
import { servicesImg as servicesImg } from "../../assets";
import { services } from "../../const";
import { useTranslation } from "react-i18next";

const cards = services;

const ServicesPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  return (
    <Box>
      <HeaderPageLayout image={servicesImg}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            {t("servicesHeaderTitle")}
          </Typography>
        </Box>
      </HeaderPageLayout>
      <br />
      <hr />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          m: "3rem auto",
        }}
      >
        <Stack
          sx={{
            width: xs ? "95%" : sm ? "90%" : md ? "85%" : "80%",
            maxWidth: "1400px",
          }}
          alignItems={"center"}
          spacing={6}
        >
          <CardGrid cards={cards} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ServicesPage;
