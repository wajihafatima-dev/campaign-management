"use client";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState } from "react";

interface SidebarProps {
  onClickItem?: () => void;
}

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    label: "Campaigns",
    icon: <CampaignIcon />,
    path: "/dashboard/campaigns",
  },
];

const Sidebar: FC<SidebarProps> = ({ onClickItem, onSidebarClose }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleLogout = () => {
    setLogoutOpen(true);
  };

  const handleCloseLogout = () => {
    setLogoutOpen(false);
    onSidebarClose?.();
  };

  const handleConfirmLogout = () => {
    setLogoutOpen(false);
    onSidebarClose?.();

    // TODO: Add your logout logic here
    // localStorage.removeItem("token");
    // sessionStorage.clear();

    router.push("/login");
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          px: 0.5,
          pt: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List>
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <ListItemButton
                key={item.path}
                disableRipple
                onClick={() => {
                  router.push(item.path);
                  onClickItem?.();
                  onSidebarClose?.();
                }}
                sx={{
                  mb: 1.5,
                  borderRadius: "10px",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",

                  "&:hover": {
                    backgroundColor: "rgba(72, 128, 255, 0.08)",
                    transform: "translateX(2px)",
                  },

                  backgroundColor: isActive
                    ? "rgba(72, 128, 255, 0.12)"
                    : "transparent",

                  "&::before": isActive
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: "4px",
                        backgroundColor: "#4880FF",
                        borderRadius: "0 4px 4px 0",
                      }
                    : {},
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "#4880FF" : "#666",
                    minWidth: "40px",
                    transition: "0.3s",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 400,
                      color: isActive ? "#4880FF" : "#333",
                      transition: "0.3s",
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        <Box
          sx={{
            mt: "auto",
            pb: 0.5,
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Tooltip title="Logout">
            <IconButton
              onClick={() => handleLogout()}
              sx={{
                border: "1px solid #E5E7EB",
                color: "#666",
                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor: "rgba(72, 128, 255, 0.08)",
                  borderColor: "#4880FF",
                  color: "#4880FF",
                },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Dialog
        open={logoutOpen}
        onClose={handleCloseLogout}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            p: 0.5,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 600,
            pb: 1,
          }}
        >
          Logout
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout from your account?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ p: 1.5 }}>
          <Button
            variant="outlined"
            onClick={handleCloseLogout}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmLogout}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sidebar;
