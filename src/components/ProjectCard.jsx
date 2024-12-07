import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";

const ProjectCard = (data) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: "90vw", sm: "345px" },
        maxHeight: 400,
        bgcolor: "transparent",
      }}
    >
      <CardContent
        sx={{
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "row",
          color: "#fff",
          gap: "1rem",
          padding: "0.5rem",
          backgroundColor: "#222",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#fff",
            textTransform: "uppercase",
            color: "#000",
          }}
          aria-label="recipe"
          src={data.avatar}
        >
          {data.name.charAt(0)}
        </Avatar>
        <Stack flexDirection={"column"}>
          <Typography
            component="div"
            variant="h5"
            sx={{ fontSize: { xs: "0.7rem", md: "1.3rem" } }}
          >
            {data.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
              color: "#d1d1d1",
            }}
          >
            {data.date}
          </Typography>
        </Stack>
      </CardContent>
      <CardMedia
        component="img"
        alt={data.name}
        height="140"
        image={data.media}
        sx={{ bgcolor: "#fff" }}
      />
      <CardContent
        sx={{
          bgcolor: "#fff",
        }}
      >
        <Typography variant="body2" sx={{ color: "#000" }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", background: "#222" }}
      >
        <Button
          target="_blank"
          variant="contained"
          href={data.github_link}
          endIcon={<GitHubIcon />}
          sx={{ flexGrow: 1, borderColor: "yellow", color: "yellow" }}
        >
          GitHub
        </Button>
        <Button
          target="_blank"
          variant="contained"
          href={data.hosted_link}
          endIcon={<LaunchIcon />}
          sx={{ flexGrow: 1, borderColor: "yellow", color: "yellow" }}
        >
          Visit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
