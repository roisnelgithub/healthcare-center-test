import { Stack } from "@mui/material";

const Language = () => {
  return (
    <Stack direction="row" alignItems={"center"}>
      {/* TODO: Hacer el seleccionar del idioma */}
      <span>🇪🇸</span>
      <span>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          width={20}
          height={20}
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </span>
    </Stack>
  );
};

export default Language;
