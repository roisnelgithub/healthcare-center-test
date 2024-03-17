import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../layout";
import { locationImg, mapImg } from "../../assets";
import { useContext } from "react";
import { MQContext } from "../../context";
import { colorBlue } from "../../styles";
import { Email, LocalPhone, LocationOn, Public } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  return (
    <Stack spacing={4}>
      <HeaderPageLayout image={mapImg}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            {t("contactHeaderTitle")}
          </Typography>
        </Box>
      </HeaderPageLayout>
      <br />
      <hr />
      <Stack alignItems={"center"} spacing={6} sx={{ py: "3rem" }}>
        <Stack
          direction={sm ? "column" : "row"}
          sx={{ maxWidth: "80%" }}
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            sx={{ width: sm ? "100%" : "55%", maxWidth: "500px" }}
            justifyContent={md ? "center" : ""}
          >
            <img src={locationImg} />
          </Stack>

          <Stack spacing={2}>
            <Typography
              variant={"h4"}
              fontWeight="bold"
              textAlign={"center"}
              color={colorBlue}
            >
              {t("contact")}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <LocationOn color="info" />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                assumenda.
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <LocalPhone color="info" />
              <Typography>(305) 888-6959</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Email color="info" />
              <Typography
                color={colorBlue}
                sx={{ textDecoration: "underline" }}
              >
                moyamedical@gmail.com
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Public color="info" />
              <Typography
                color={colorBlue}
                sx={{ textDecoration: "underline" }}
              >
                www.moyamedical.com
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactPage;
