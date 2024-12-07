import { Stack, Typography } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        marginTop: { xs: "54px", sm: "64px" },
        background:
          "url(https://img.freepik.com/free-vector/elegant-dark-background-with-golden-details_23-2148438266.jpg?t=st=1733389291~exp=1733392891~hmac=31fc71da2d1e881d142042e770cc60c7b0f6b3ccb2e7e13c5a35d873b1699e03&w=1060)",
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
