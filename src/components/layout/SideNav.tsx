"use client";

import { useMediaQuery, Box, Drawer } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { FC } from "react";
import Sidebar from "./Sidebar";

interface SideNavProps {
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
}

const SideNav: FC<SideNavProps> = ({ isMobileSidebarOpen, onSidebarClose }) => {
  const theme: Theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  const sidebarWidth = 240;

  const scrollbarStyles = {
    "&::-webkit-scrollbar": { width: "7px" },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f9f9f9",
      borderRadius: "15px",
    },
  };

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isMobileSidebarOpen}
        onClose={onSidebarClose}
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#f9f9f9",
            border: "none",
            ...scrollbarStyles,
          },
        }}
      >
        <Sidebar />
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      sx={{
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.08)",
          border: "none",
          ...scrollbarStyles,
        },
      }}
    >
      <Sidebar onSidebarClose={onSidebarClose} />
    </Drawer>
  );
};

export default SideNav;
