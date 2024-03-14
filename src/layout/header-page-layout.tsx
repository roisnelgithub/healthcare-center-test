import { Box, Stack } from "@mui/material";
import { ReactNode, useContext } from "react";
import { MQContext } from "../context";

interface HeaderPageLayoutProps {
  children: ReactNode;
  image: string;
}
const HeaderPageLayout = ({ children, image }: HeaderPageLayoutProps) => {
  const { xs, sm, md } = useContext(MQContext);
  return (
    <Box
      sx={{ position: "relative", display: "flex", justifyContent: "center" }}
    >
      <Stack
        alignItems="center"
        justifyContent={"end"}
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Stack>
      <Box
        sx={{
          background: `linear-gradient( rgb(0, 22, 57,0.8) , transparent), url(${image}) center/cover no-repeat`,
          width: "100%",
          maxWidth: "1920px",
          height: "65vh",
          maxHeight: "65vh",
          borderBottomLeftRadius: xs
            ? "5rem"
            : sm
            ? "8rem"
            : md
            ? "12rem"
            : "18rem",
          borderBottomRightRadius: xs
            ? "5rem"
            : sm
            ? "6rem"
            : md
            ? "12rem"
            : "18rem",
        }}
      ></Box>
    </Box>
  );
};

export default HeaderPageLayout;
