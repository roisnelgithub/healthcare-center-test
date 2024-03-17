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
          transform: `translateY(${xs ? "-3rem" : sm ? "-4rem" : "-6rem"})`,
          position: "relative",
          zIndex: "20",
        }}
      >
        <Box
          sx={{
            width: xs ? "95%" : sm ? "90%" : md ? "85%" : "80%",
            maxWidth: "1400px",
          }}
        >
          <CardGrid cards={cards} />
        </Box>
      </Box>
      <Stack
        spacing={10}
        sx={{
          transform: "translateY(-3rem)",
          mt: "2rem",
        }}
      >
        <HeaderServices />
        <InfoServices />
      </Stack>
    </>
  );
};

export default MainContent;
