import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const CertificateCard = (data) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: "90vw", sm: "345px" },
        maxHeight: 400,
        bgcolor: "#222",
        color: "#fff",
      }}
    >
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontSize: { xs: "0.7rem", md: "1.3rem" }}}>
           {data.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{display: "flex", justifyContent:"space-between", gap:"1rem", alignItems: "center", color: "yellow"}}
          >
            {data.organization}
          <Typography color='green'>{data.issue_date}</Typography>
          </Typography>
        </CardContent>
      <CardMedia
        component="img"
        alt={data.name}
        height="140"
        image={data.src}
        sx={{ bgcolor: "#fff" }}
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <Button
          variant="contained"
          href={data.link}
          target="_blank"
          sx={{ flexGrow: 1, borderColor: "yellow", color: "yellow" }}
        >
          View certificate
        </Button>
      </CardActions>
    </Card>
  );
};

export default CertificateCard;
