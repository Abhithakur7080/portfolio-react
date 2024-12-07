import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../assets/projectsData";

const Projects = () => {
  return (
    <Box
      sx={{
        height: {
          xs: "calc(100vh - 54px)",
          sm: "calc(100vh - 64px)",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography
        variant="h3"
        color="#fff"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: "1rem",
          width: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {projectsData.map((project) => (
          <Grid item xs={12} sm={4} md={3} key={project.id}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
