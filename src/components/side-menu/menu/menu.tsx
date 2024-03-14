import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Stack, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMore sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "0 1rem 1rem",
}));

export default function Menu() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="subtitle1">Nuestra Compañía</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column">
            <Typography sx={{ p: "0.3rem 2rem" }}>Moya Medical</Typography>
            <Typography sx={{ p: "0.3rem 2rem" }}>
              ¿Por qué nosotros?
            </Typography>
            <Typography sx={{ p: "0.3rem 2rem" }}>
              Ubicación en el mapa
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Stack spacing={2} sx={{ px: "1.5rem" }}>
        <Typography variant="subtitle1">Nuestros Servicios</Typography>
        <Typography variant="subtitle1">Contáctenos</Typography>
      </Stack>
    </div>
  );
}
