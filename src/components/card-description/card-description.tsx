import { Box, Stack, Typography } from "@mui/material";
import { colorBlue } from "../../styles";
import { Link } from "react-router-dom";

interface CardDescriptionProps {
  title: string;
  description: string;
  link?: string;
}
const CardDescription = ({
  title,
  description,
  link,
}: CardDescriptionProps) => {
  return (
    <Box>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={colorBlue}
          textAlign={"center"}
        >
          {link ? <Link to={link}>{title}</Link> : title}
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
