import { Box, Stack } from "@mui/material";
import { HeaderServices } from "../header-services";
import { InfoServices } from "../info-services";
import { CardList } from "../card-list";

const MainContent = () => {
  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "100%",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "absolute", height: "100vh", top: "-4rem" }}>
          <CardList />
        </Box>
      </Box>
      <Box sx={{ marginTop: "18rem" }}>
        <Stack spacing={10}>
          <HeaderServices />
          <InfoServices />
        </Stack>
      </Box>
    </Stack>
  );
};

export default MainContent;
