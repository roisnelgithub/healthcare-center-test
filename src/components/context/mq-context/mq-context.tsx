import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactNode, createContext } from "react";

interface MQContextProps {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
}
export const MQContext = createContext<MQContextProps>({
  xs: false,
  sm: false,
  md: false,
  lg: false,
});

interface MQContextProviderProps {
  children: ReactNode;
}
export const MQContextProvider = ({ children }: MQContextProviderProps) => {
  const theme = useTheme();
  // 0-599
  const xs = useMediaQuery(
    theme.breakpoints.up("xs") && theme.breakpoints.down("sm")
  );
  // 600-899
  const sm = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  // 900-1199
  const md = useMediaQuery(
    theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  );

  // 1200
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <MQContext.Provider value={{ xs, sm, md, lg }}>
      {children}
    </MQContext.Provider>
  );
};
