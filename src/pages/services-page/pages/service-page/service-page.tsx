import { useParams } from "react-router-dom";
import { services } from "../../../../const";
import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../../../layout";
import { servicesImg } from "../../../../assets";
import { useContext } from "react";
import { MQContext } from "../../../../context";
import { useTranslation } from "react-i18next";
import { colorBlue, colorText } from "../../../../styles";
import { CustomIcon } from "../../../../components";

const ServicePage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  const { id } = useParams();
  let idService = 0;
  if (id) {
    idService = parseInt(id);
  }

  const service = services.find((item) => item.id === idService);

  if (!service) {
    console.log("no se encontró o parámentro no valido");
    return <Box sx={{ height: "100vh" }}>No se encontró</Box>;
  }
  return (
    <Stack spacing={4}>
      <HeaderPageLayout image={servicesImg}>
        <Box sx={{ mb: "10vh" }}>
          <Stack alignItems={"center"}>
            <CustomIcon icon={service.icon} size={50} />
            <Typography
              variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
              fontWeight="bold"
              sx={{ color: "white", textAlign: "center" }}
            >
              {t(`${service.translationKey}`)}
            </Typography>
          </Stack>
        </Box>
      </HeaderPageLayout>
      <br />
      <hr />
      <Stack alignItems={"center"} spacing={6} sx={{ pb: "3rem" }}>
        <Stack
          direction={"column"}
          sx={{ maxWidth: { xs: "90%", sm: "80%", md: "70%" } }}
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h4" fontWeight={"bold"} color={colorBlue}>
            {t("services")}
          </Typography>
          <ul className="service-list">
            {service.services.map((service) => (
              <li key={service.id}>
                <Typography color={colorText}> {service.service}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" fontWeight={"bold"} color={colorBlue}>
            {t("details")}
          </Typography>
          <Typography
            sx={{ lineHeight: 2 }}
            color={colorText}
            textAlign="center"
          >
            {service.desc}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicePage;
