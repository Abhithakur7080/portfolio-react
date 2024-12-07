import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DrawerAppBar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  const navigate = useNavigate();
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = homeRef.current;
      console.log(homeElement)
      if (homeElement) {
        const { bottom } = homeElement.getBoundingClientRect();
        if (bottom <= 0) {
          navigate('/projects');
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <Box
      ref={homeRef}
      width={"100%"}
      sx={{
        height: { xs: "calc(100vh - 54px)", sm: "calc(100vh - 64px)" }
      }}
    >
      <Hero />
    </Box>
  );
};

export default Home;
