"use client";

import { useState, ReactNode } from "react";
import { Box } from "@mui/material";
import SideNav from "@/components/layout/SideNav";
import Header from "@/components/layout/Header";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
      className="mainwrapper"
    >
      {/* Sidebar */}
      <SideNav
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          zIndex: 1,
          overflow: "hidden",
          paddingTop: "70px",
          paddingLeft: { xs: "0px", md: "240px" },
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Header */}
        <Header openMobileSidebar={setMobileSidebarOpen} />

        {/* Page Content */}
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            backgroundSize: "80%",
            height: "calc(100vh - 70px)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
