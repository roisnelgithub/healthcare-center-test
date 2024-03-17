import { Box, Stack, Typography } from "@mui/material";
import { colorBlue } from "../../styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CardDescriptionProps {
  title: string;
  description: string;
  link?: string;
  translateKey: string;
}
const CardDescription = ({
  description,
  link,
  translateKey,
}: CardDescriptionProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={colorBlue}
          textAlign={"center"}
          className="title-link "
        >
          {link ? (
            <Link to={link}>{t(`${translateKey}`)}</Link>
          ) : (
            t(`${translateKey}`)
          )}
        </Typography>

        <Typography
          textAlign={"center"}
          sx={{
            lineHeight: 2,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardDescription;
