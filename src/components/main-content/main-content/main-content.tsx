import { Box, Stack } from "@mui/material";
import { HeaderServices } from "../header-services";
import { InfoServices } from "../info-services";
import CardGrid from "../card-grid/card-grid";
import { useContext } from "react";
import { MQContext } from "../../context";

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
          <CardGrid />
        </Box>
      </Box>
      <Stack spacing={10} sx={{ transform: "translateY(-6rem)" }}>
        <HeaderServices />
        <InfoServices />
      </Stack>
    </>
  );
};

export default MainContent;
