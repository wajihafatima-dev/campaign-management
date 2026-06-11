"use client";

import React, { memo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface HeaderProps {
  openMobileSidebar?: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ openMobileSidebar }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.08)",
        px: 2,
        pl: { xs: 2, md: "265px" },
        py: 0.5,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        disableGutters
        sx={{ justifyContent: { xs: "space-between", md: "flex-end" } }}
      >
        {/* Mobile menu button */}
        <IconButton
          disableRipple
          onClick={() => openMobileSidebar?.(true)}
          edge="start"
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#000",
            mr: 2,
          }}
        >
          <MenuOpenIcon style={{ fontSize: "35px" }} />
        </IconButton>

        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Avatar
              src={
                "https://img.freepik.com/premium-vector/smiling-woman-avatar_937492-6135.jpg?semt=ais_hybrid&w=740&q=80"
              }
              alt={"user image"}
              sx={{
                width: { sm: 37, md: 40 },
                height: { sm: 37, md: 40 },
                textTransform: "capitalize",
              }}
            />

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  color: "#404040",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "110px",
                }}
              >
                {"Wajiha Fatima"}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#404040",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "120px",
                }}
              >
                {"Frontend Developer"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
