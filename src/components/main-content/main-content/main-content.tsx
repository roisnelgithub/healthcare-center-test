import { Box, Stack } from "@mui/material";
import { HeaderServices } from "../header-services";
import { InfoServices } from "../info-services";
import CardGrid from "../card-grid/card-grid";
import { useContext } from "react";
import { MQContext, MenuContext } from "../../../context";

const MainContent = () => {
  const { xs, sm, md } = useContext(MQContext);
  const { isOpen, closeMenu } = useContext(MenuContext);
  return (
    <>
      {isOpen && (
        <Box
          onClick={closeMenu}
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "grey",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 15,
            opacity: 0.7,
          }}
        ></Box>
      )}
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
