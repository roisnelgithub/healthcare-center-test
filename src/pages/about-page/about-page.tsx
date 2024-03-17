import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../layout";
import { useContext } from "react";
import { MQContext } from "../../context";
import { CardDescription } from "../../components";
import { useTranslation } from "react-i18next";
import { aboutImg } from "../../assets";
import { descriptions } from "../../const";

const AboutPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  return (
    <Box>
      <HeaderPageLayout image={aboutImg}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            {t("aboutHeaderTitle")}
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
        <Stack sx={{ maxWidth: "80%" }} alignItems={"center"} spacing={6}>
          {descriptions.map((des) => (
            <CardDescription
              key={des.id}
              title={des.title}
              description={des.description}
              link={des.link}
              translateKey={des.translateKey}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutPage;
