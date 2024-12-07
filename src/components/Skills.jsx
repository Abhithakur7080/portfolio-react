import { Box, Stack } from "@mui/material";
import React from "react";
import SkillBar from "./SkillBar";
import skillData from "../assets/skillData";

const Skills = () => {
  return (
    <Box
      p={1}
      sx={{
        height: "calc(100vh - 188px)",
        overflow: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {skillData.map((skill) => (
        <SkillBar key={skill.id} {...skill} />
      ))}
    </Box>
  );
};

export default Skills;
