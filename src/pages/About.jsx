import { Box, Tab, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Certificate from "../components/Certificate";
import Skills from "../components/Skills";

const About = () => {
  const [value, setValue] = React.useState("1");
  const theme = useTheme();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      width={"100%"}
      sx={{
        height: { xs: "calc(100vh - 54px)", sm: "calc(100vh - 64px)" },
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box sx={{ width: "100%", height: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "#222",
              backgroundColor: "#222",
            }}
          >
            <TabList
            centered={!isMdUp}
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                "& .Mui-selected": {
                  color: "#000",
                  backgroundColor: "yellow",
                },
              }}
            >
              <Tab
                label={isMdUp ? "Experience" : ""}
                value="1"
                sx={{color: "#fff"}}
                icon={<EngineeringIcon />}
              />
              <Tab
                label={isMdUp ? "Education" : ""}
                value="2"
                sx={{color: "#fff"}}
                icon={<SchoolIcon />}
              />
              <Tab
                label={isMdUp ? "Certificates" : ""}
                value="3"
                sx={{color: "#fff"}}
                icon={<WorkspacePremiumIcon />}
              />
              <Tab
                label={isMdUp ? "Skills" : ""}
                value="4"
                sx={{color: "#fff"}}
                icon={<LeaderboardIcon />}
              />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            dir={theme.direction}
          >
            <Experience />
          </TabPanel>
          <TabPanel
            value="2"
            dir={theme.direction}
          >
            <Education />
          </TabPanel>
          <TabPanel
            value="3"
            dir={theme.direction}
          >
            <Certificate/>
          </TabPanel>
          <TabPanel
            value="4"
            dir={theme.direction}
          >
            <Skills/>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default About;
