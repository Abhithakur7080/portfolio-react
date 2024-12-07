import { Stack, Typography } from "@mui/material";
import React from "react";
import bgImage from "../assets/bgImage.jpeg"

const Loader = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        marginTop: { xs: "54px", sm: "64px" },
        background:
          `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: { xs: "calc(100vh - 54px)", sm: "calc(100vh - 64px)" },
      }}
    >
      <Typography variant="span" className="loader"></Typography>
    </Stack>
  );
};

export default Loader;
