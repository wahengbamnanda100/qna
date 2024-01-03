import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { stepsToHelp } from "../common/stepData";

interface StepDesc {
  step: string;
  stepDesc: string[] | string;
}

interface StepToHelp {
  id: number;
  stepTitle: string;
  desc: string | string[];
  expanded?: boolean;
  steps?: StepDesc[];
}

interface Step1Props {
  data: StepToHelp;
}

const Step1 = ({ data }: Step1Props) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box sx={{ boxShadow: theme.shadows[2] }}>
      <Accordion
        disableGutters
        expanded={data?.expanded ? true : expanded === data.stepTitle}
        onChange={handleChange(data.stepTitle)}
        sx={{
          px: "0.5rem",
          bgcolor: theme.palette.grey[900],
        }}
      >
        <AccordionSummary
          expandIcon={
            !data?.expanded ? <ExpandMoreIcon sx={{ color: "#fff" }} /> : ""
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          //   sx={{ bgcolor: "red" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            {data.stepTitle}
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
           {data?.desc}
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          {Array.isArray(data.desc) ? (
            data.desc.map((desc, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: "0.5rem",
                }}
              >
                <Typography variant="subtitle2">*</Typography>
                <Typography variant="subtitle2">{desc}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="subtitle2">{data?.desc}</Typography>
          )}
        </AccordionDetails>
      </Accordion>
      {data?.steps?.map((step, index) => (
        <Accordion
          key={index}
          disableGutters
          expanded={expanded === step.step}
          onChange={handleChange(step.step)}
          sx={{
            px: "0.5rem",
            bgcolor: theme.palette.grey[900],
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            //   sx={{ bgcolor: "blueviolet" }}
          >
            <Typography
              sx={{ color: "text.secondary", width: "10%", flexShrink: 0 }}
            >
              {index + 1}.
            </Typography>
            <Typography sx={{ color: " #fff" }}>{step?.step}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Array.isArray(step?.stepDesc) ? (
              step?.stepDesc.map((item, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  gap={2}
                  sx={{ pl: "1.5rem", mb: "0.3rem" }}
                >
                  <Typography variant="subtitle2">o</Typography>
                  <Typography variant="subtitle2">{item}</Typography>
                </Stack>
              ))
            ) : (
              <Typography variant="subtitle2" sx={{ pl: "1.5rem" }}>
                {step?.stepDesc}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const QuestionHelp = () => {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "flex-start",
        width: "100%",
        // backgroundColor: `rgba(0,0,1,1)`,
        // boxShadow: theme.shadows[2],
        // padding: "1rem",
      }}
    >
      {stepsToHelp.map((step, index) => (
        <Step1 key={index} data={step} />
      ))}
    </Box>
  );
};

export default QuestionHelp;
