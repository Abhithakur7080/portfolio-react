import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EducationCard = (data) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: {xs:"column-reverse",md:'row'}, width: "80vw", bgcolor: "#222", color: "#fff", boxShadow: "0px 0px 5px 3px rgb(50, 50, 45)", border: "2px solid rgb(89, 89, 65)", height: "fit-content" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: "2px solid rgb(89, 89, 65)" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           {data.specialization} ({data.achieved})
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{display: "flex", gap:"1rem", alignItems: "center", color: "yellow"}}
          >
            {data.institute}
            <Typography color='green'>(Achieved {data.percentage})</Typography>
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography>{data.description}</Typography>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: {xs: "100%", md:"151px"} }}
        image={data.logo}
        alt={data.institute}
      />
    </Card>
  )
}

export default EducationCard