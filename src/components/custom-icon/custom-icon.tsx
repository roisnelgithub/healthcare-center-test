import { Box } from "@mui/material";
import { colorBlue } from "../../styles";

interface CustomIconProps {
  size: number;
  icon: string;
  iconSize?: number;
}
const CustomIcon = ({ size, icon, iconSize }: CustomIconProps) => {
  return (
    <Box
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        background: colorBlue,
        borderRadius: "50%",
        p: "12px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={icon}
        alt="Icon"
        style={{
          width: iconSize ? `${iconSize}px` : "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default CustomIcon;
