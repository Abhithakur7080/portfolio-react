import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const SkillBar = (data) => {
  return (
    <Box
      sx={{
        display: {xs: "flex", md:"inline-flex"},
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        width: {xs: "100%", md: "49%"},
        borderRadius: "5px",
        mt: 1,
        ml: 1
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          p: 1,
        }}
      >
        <Avatar src={data.src} sx={{ width: 30, height: 30, mr: 1 }} />
        <Typography variant="p" sx={{ color: "#000", fontSize: "0.8rem" }}>
          {data.name}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mx: 1, p: 1 }}>
        <LinearProgress
          variant="determinate"
          value={data.progress}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: "yellow",
            },
            backgroundColor: "#555",
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "yellow" }}>
          {`${Math.round(data.progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillBar;
