import { Box, Button, Stack, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import WidgetsIcon from '@mui/icons-material/Widgets';
import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.png";
import resume from "../assets/Abhijeet_kumar.pdf"
const Hero = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      width={"100%"}
      height={"100%"}
    >
      <Stack gap={"1rem"} alignItems={"center"}>
        <Stack justifyContent={"center"} alignItems={"center"} sx={{padding: "1rem", width:"fit-content", height:"fit-content"}}>
          <img
            src={profilePic}
            alt="myImage" width={"200px"} style={{boxShadow: "0px 0px 5px 3px rgb(89, 89, 65)", border: "1px solid rgb(89, 89, 65)", borderRadius: "20%"}}/>
        </Stack>
        <Typography
          sx={{
            fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
          variant="h3"
        >
          Hii I'm Abhijeet Kumar
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
            color: "yellow",
            fontWeight: "bold"
          }}
          variant="h1"
        >
          Full Stack Developer
        </Typography>
        <Stack gap={"1rem"} direction={{xs: "column", md:"row"}}>
          <Button
          href={resume}
          download="Abhijeet_Kumar.pdf"
          target="_blank"
            varient="contained"
            endIcon={<CloudDownloadIcon />}
            sx={{
              background: "yellow",
              paddingInline: {xs: "1rem", md:"1.5rem"},
              marginTop: "1rem",
            }}
          >
            Download CV
          </Button>
          <Stack direction={"row"} gap={"1rem"}>
            <Link to={"/projects"}>
            <Button
              varient="outlined"
              endIcon={<WidgetsIcon />}
              sx={{
                paddingInline: {xs: "1rem", md:"1.5rem"},
                marginTop: "1rem",
                border: "1px solid yellow",
                color: "yellow",
              }}
            >
              Projects
            </Button>
          </Link>
          <Link to={"/contact"}>
            <Button
              varient="outlined"
              endIcon={<PermContactCalendarIcon />}
              sx={{
                paddingInline: {xs: "1rem", md:"1.5rem"},
                marginTop: "1rem",
                border: "1px solid yellow",
                color: "yellow",
              }}
            >
              Contact
            </Button>
          </Link>
          </Stack>
          
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
