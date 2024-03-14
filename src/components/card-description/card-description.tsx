import { Box, Stack, Typography } from "@mui/material";
import { colorBlue } from "../../styles";

interface CardDescriptionProps {
  title: string;
  description: string;
}
const CardDescription = ({ title, description }: CardDescriptionProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={colorBlue}
          textAlign={"center"}
        >
          {title}
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
