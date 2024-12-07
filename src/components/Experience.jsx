import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import experienceData from "../assets/experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Box
      sx={{
        p: "1rem",
        height: { xs: "calc(100vh - 144px)", md: "calc(100vh - 188px)" },
        overflow: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {experienceData.map((e) => (
        <ExperienceCard {...e} key={e.id} />
      ))}
    </Box>
  );
};

export default Experience;
