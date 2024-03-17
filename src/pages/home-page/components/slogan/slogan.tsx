import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { useContext } from "react";
import { MQContext } from "../../../../context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Slogan = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  const { t } = useTranslation();
  return (
    <Box sx={{ zIndex: 10, maxWidth: "500px", px: "1rem" }}>
      <Stack spacing={6} alignItems="center">
        <Typography
          variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
          fontWeight="bold"
          sx={{ color: "white", textAlign: "center" }}
        >
          {t("homeHeaderTitle")}
        </Typography>
        <Link to="/contact">
          <CustomButton text={t("btnContact")} />
        </Link>
      </Stack>
    </Box>
  );
};

export default Slogan;
