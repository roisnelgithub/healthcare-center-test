import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Stack, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MenuContext } from "../..";
import { useContext, useState } from "react";

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
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const { t } = useTranslation();
  const { closeMenu } = useContext(MenuContext);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleClick = () => {
    closeMenu();
  };

  return (
    <Box className="title-link">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="subtitle1" onClick={handleClick}>
            <Link to={"/about"}>{t("navCompany")}</Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column">
            <Typography sx={{ p: "0.3rem 2rem" }} onClick={handleClick}>
              <Link to={"./about"}>{t("moyaMedical")}</Link>
            </Typography>
            <Typography sx={{ p: "0.3rem 2rem" }} onClick={handleClick}>
              <Link to={"/about/why-us"}>{t("sideWhyUs")}</Link>
            </Typography>
            <Typography sx={{ p: "0.3rem 2rem" }} onClick={handleClick}>
              <Link to="/contact">{t("sideLocation")}</Link>
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Stack spacing={2} sx={{ px: "1.5rem" }}>
        <Typography variant="subtitle1" onClick={handleClick}>
          <Link to="/services">{t("navServices")}</Link>
        </Typography>
        <Typography variant="subtitle1" onClick={handleClick}>
          <Link to={"/contact"}>{t("navContact")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
}
