import {
  InputBase,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import { flagSpain, flagUsa } from "../../assets";

import { ExpandMore } from "@mui/icons-material";

const CustomInput = styled(InputBase)(({ theme, color }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiSelect-icon": {
    color: color == "info" ? "white" : "black",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "transparent",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

interface ArrowColorProps {
  arrowColor?: string;
  acronym?: boolean;
}

const SwitchLanguage = ({ arrowColor, acronym = false }: ArrowColorProps) => {
  const [language, setLanguage] = useState("es");
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLanguage(event.target.value);
  };

  return (
    <Stack direction="row" alignItems={"center"}>
      <Select
        value={language}
        onChange={handleChange}
        input={
          // TODO:Arreglar esto
          <CustomInput color={arrowColor === "white" ? "info" : "success"} />
        }
        IconComponent={(props) => <ExpandMore {...props} />}
      >
        <MenuItem value={"es"}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={flagSpain}
              alt="Bandera de España"
              style={{ width: "28px" }}
            />
            {acronym && <Typography>ES</Typography>}
          </Stack>
        </MenuItem>

        <MenuItem value={"us"}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={flagUsa}
              alt="Bandera de España"
              style={{ width: "28px" }}
            />
            {acronym && <Typography>US</Typography>}
          </Stack>
        </MenuItem>
      </Select>
    </Stack>
  );
};

export default SwitchLanguage;
