import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { colorText } from "../../../../styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderService = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", zIndex: 10 }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h4" color={colorText} textAlign={"center"}>
          {t("exploreServices")}
        </Typography>
        <Link to="/services">
          <CustomButton text={t("btnSeeMore")} />
        </Link>
      </Stack>
    </Box>
  );
};

export default HeaderService;
