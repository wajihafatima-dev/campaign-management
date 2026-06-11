"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import CampaignForm from "@/components/forms/CampaignForm";
import { Campaign } from "@/types/campaign";

interface EditCampaignModalProps {
  open: boolean;
  initialData: Campaign | null;
  onClose: () => void;
  onSubmit: (data: Campaign) => void;
}

export default function EditModal({
  open,
  initialData,
  onClose,
  onSubmit,
}: EditCampaignModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      fullScreen={fullScreen}
      maxWidth="sm"
      keepMounted
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: fullScreen ? 0 : 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 3 },
          py: { xs: 1.5, sm: 2 },
          borderBottom: "1px solid #EEF2F7",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "15px", sm: "18px" },
            color: "#111827",
            letterSpacing: "0.2px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
         Edit Campaign
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{
            transition: "0.2s",
            "&:hover": {
              bgcolor: "#F3F4F6",
              transform: "rotate(90deg)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
          bgcolor: "#FAFAFB",
        }}
      >
        <Box
          sx={{
            animation: "fadeIn 0.25s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(10px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <CampaignForm
            mode="edit"
            initialValues={initialData}
            onSubmit={onSubmit}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}