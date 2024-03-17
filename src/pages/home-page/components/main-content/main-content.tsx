import { Box, Stack } from "@mui/material";
import { HeaderServices } from "../header-services";
import { InfoServices } from "../info-services";
import { useContext } from "react";
import { MQContext } from "../../../../context";

import { CardGrid } from "../../../../components";
import { services } from "../../../../const";
const cards = services.slice(0, 4);

const MainContent = () => {
  const { xs, sm, md } = useContext(MQContext);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: "0 auto",
          justifyContent: "center",
          transform: "translateY(-6rem)",
        }}
      >
        <Box
          sx={{
            width: xs ? "95%" : sm ? "90%" : md ? "85%" : "80%",
          }}
        >
          <CardGrid cards={cards} />
        </Box>
      </Box>
      <Stack spacing={10} sx={{ transform: "translateY(-6rem)", mt: "2rem" }}>
        <HeaderServices />
        <InfoServices />
      </Stack>
    </>
  );
};

export default MainContent;
