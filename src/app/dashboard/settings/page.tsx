"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";

interface Profile {
  name: string;
  designation: string;
  image: string;
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<Profile>({
    name: "Wajiha Fatima",
    designation: "Frontend Developer",
    image: "",
  });

  const [preview, setPreview] = useState<string>("");

  // Handle text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      setProfile({
        ...profile,
        image: imageUrl,
      });
    }
  };

  // Save handler (API ya Redux connect yahan hoga)
  const handleSave = () => {
    console.log("Updated Profile:", profile);
    alert("Profile Updated Successfully!");
  };

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 420,
        }}
      >
        {/* Profile Image */}
        <Stack spacing={2} mb={3} sx={{ alignItems: "center" }}>
          <Avatar
            src={preview || profile.image}
            sx={{ width: 90, height: 90 }}
          />
          <Button
            variant="outlined"
            component="label"
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #2563EB, #1D4ED8)", // 🔵 Blue (Add)
              boxShadow: "0 6px 18px rgba(37,99,235,0.25)",

              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
                background: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
              },

              "&:active": {
                transform: "translateY(0px)",
                boxShadow: "none",
              },
            }}
          >
            Upload Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Stack>

        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          sx={{ my: 2 }}
        />

        {/* Designation */}
        <TextField
          fullWidth
          label="Designation"
          name="designation"
          value={profile.designation}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        {/* Save Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSave}
          sx={{
            py: 1.1,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
            fontSize: "14px",
            transition: "all 0.25s ease",
            color: "#fff",

            background: "linear-gradient(135deg, #2563EB, #1D4ED8)", // 🔵 Blue (Add)
            boxShadow: "0 6px 18px rgba(37,99,235,0.25)",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
              background: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
            },

            "&:active": {
              transform: "translateY(0px)",
              boxShadow: "none",
            },
          }}
        >
          Save Changes
        </Button>
      </Paper>
    </Box>
  );
}
