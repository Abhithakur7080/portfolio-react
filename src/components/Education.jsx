import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import educationData from "../assets/educationData";
import EducationCard from "./EducationCard";

const Education = () => {
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
      {educationData.map((e) => (
        <EducationCard {...e} key={e.id} />
      ))}
    </Box>
  );
};

export default Education;
