import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";

import { MQContext } from "../../../../context";

import { HeaderPageLayout } from "../../../../layout";
import { CardDescription, Testimony } from "../../../../components";

import { testimonials } from "../../../../const/testimonials-const";
import { whyUsImg } from "../../../../assets";
import { colorBlue } from "../../../../styles";

const WhyUsPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();

  return (
    <Box>
      <HeaderPageLayout image={whyUsImg}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            {t("aboutWhyUsTitle")}
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
          my: "3rem",
        }}
      >
        <Stack
          sx={{
            maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "60%" },
            p: "1rem",
          }}
          alignItems={"center"}
          spacing={6}
        >
          <CardDescription
            title={" Por qué nosotros"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus voluptatum! Neque vitae iste repellendus, praesentium ullam deleniti dolor asperiores aut aliquid accusamus consequuntur doloremque ipsum, optio, in adipisci. Aperiam sunt totam culpa molestias iste incidunt, ducimus quas debitis impedit. Doloremque, voluptatibus voluptatum! Neque vitae iste repellendus, praesentium ullam deleniti dolor asperiores aut aliquid accusamus consequuntur doloremque ipsum, optio, in adipisci. Aperiam sunt totam culpa molestias iste incidunt, ducimus quas debitis impedit."
            }
            translateKey="whyUs"
          />
          <Typography variant="h4" fontWeight={"bold"} color={colorBlue}>
            {t("testimonies")}
          </Typography>

          {testimonials.map((testimony, index) => {
            let isInvert = false;
            if (index % 2 === 0) {
              isInvert = true;
            }
            return (
              <Testimony
                key={testimony.id}
                isInvert={isInvert}
                testimony={testimony}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default WhyUsPage;
