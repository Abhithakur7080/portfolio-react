import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import certificateData from '../assets/certificateData'
import CertificateCard from './CertificateCard'

const Certificate = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: "1rem",
          width: "100%",
          height: "calc(100vh - 174px)",
          overflow: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {certificateData.map((certificate) => (
          <Grid item xs={12} sm={4} md={3} key={certificate.id}>
            <CertificateCard {...certificate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Certificate