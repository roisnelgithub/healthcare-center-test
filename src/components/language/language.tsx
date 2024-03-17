import {
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useContext } from "react";
import { flagSpainIcon, flagUsaIcon } from "../../assets";

import { ExpandMore } from "@mui/icons-material";
import { LanguageContext } from "../../context/language-context";

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
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleChange = (event: SelectChangeEvent) => {
    const lng = event.target.value;
    changeLanguage(lng);
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
              src={flagSpainIcon}
              alt="Bandera de España"
              style={{ width: "28px" }}
            />
            {acronym && <Typography>ES</Typography>}
          </Stack>
        </MenuItem>

        <MenuItem value={"en"}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={flagUsaIcon}
              alt="Bandera de España"
              style={{ width: "28px" }}
            />
            {acronym && <Typography>EN</Typography>}
          </Stack>
        </MenuItem>
      </Select>
    </Stack>
  );
};

export default SwitchLanguage;
