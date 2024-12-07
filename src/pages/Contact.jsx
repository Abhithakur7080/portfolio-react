import React, { useState } from "react";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.comments.trim()) newErrors.comments = "Comments are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/abhijeetthakur7080@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", comments: "" });
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        height: {
          xs: "calc(100vh - 54px)",
          sm: "calc(100vh - 64px)",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "transparent",
      }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit}
        justifyContent={"center"}
        gap={"1rem"}
        sx={{
          backgroundColor: "#fff",
          maxWidth: { xs: "90vw", sm: "500px" },
          width: "100%",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" color="#000" sx={{ textAlign: "center", fontWeight: 600 }}>
          Contact Us
        </Typography>
        <Stack gap={"1rem"} direction={"row"}>
          <TextField
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
          />
          <TextField
            id="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
          />
        </Stack>
        <TextField
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
        <TextField
          id="comments"
          label="Comments"
          multiline
          rows={4}
          value={formData.comments}
          onChange={handleChange}
          error={!!errors.comments}
          helperText={errors.comments}
          fullWidth
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          sx={{ padding: "0.8rem", fontSize: "1rem", fontWeight: "600" }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Stack>
      <Typography variant="body1" color="#fff" sx={{ textAlign: "center" }}>
        Know more about me. Visit my{" "}
        <Link to="/about" style={{ color: "yellow" }}>
          About
        </Link>{" "}
        section.
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"1rem"}
      >
        <IconButton
          aria-label="github"
          href="https://github.com/Abhithakur7080"
          target="_blank"
        >
          <GitHubIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          href="https://www.linkedin.com/in/abhijeet-kumar-39800320b/"
          target="_blank"
        >
          <LinkedInIcon sx={{ color: "#0072b1" }} />
        </IconButton>
        <IconButton
          aria-label="whatsapp"
          href="https://api.whatsapp.com/send?phone=916200431323&text=Hello,%20Abhijeet%20I%20want%20to%20connect%20with%20you."
          target="_blank"
        >
          <WhatsAppIcon sx={{ color: "#25D366" }} />
        </IconButton>
        <IconButton
          aria-label="mail"
          href="mailto:abhijeetthakur7080@gmail.com"
          target="_blank"
        >
          <EmailIcon sx={{ color: "#c71610" }} />
        </IconButton>
        <IconButton aria-label="phone" href="tel:+916200431323" target="_blank">
          <PhoneInTalkIcon sx={{ color: "#4CAF50" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;
