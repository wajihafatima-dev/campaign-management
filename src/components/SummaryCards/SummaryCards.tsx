"use client";

import { Box, Grid } from "@mui/material";
import { Campaign } from "@/types/campaign";
import { getCampaignStats } from "@/utils/analytics";
import { Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface Props {
  campaigns: Campaign[];
}

export default function SummaryCards({ campaigns }: Props) {
  const stats = getCampaignStats(campaigns);

  const cards = [
    {
      title: "Total Campaigns",
      value: stats.total,
      subtitle: "All campaigns",
      icon: <CampaignIcon />,
    },
    {
      title: "Active",
      value: stats.active,
      subtitle: "Running campaigns",
      icon: <PlayArrowIcon />,
    },
    {
      title: "Paused",
      value: stats.paused,
      subtitle: "Stopped campaigns",
      icon: <PauseIcon />,
    },
    {
      title: "Budget",
      value: stats.totalBudget,
      subtitle: "Total spend",
      icon: <AttachMoneyIcon />,
    },
    {
      title: "Leads",
      value: stats.totalLeads,
      subtitle: "Generated leads",
      icon: <TrendingUpIcon />,
    },
  ];

  return (
    <Grid container spacing={1.5} sx={{ mb: 3 }}>
      {cards?.map((card, index) => (
        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={4}
          key={index}
          sx={{ flex: { xs: "auto", md: 1 } }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: 3,
              p: 2,
              display: "flex",
              flexDirection: "column", 
              alignItems: "flex-start",
              gap: 1.5,
              cursor: "pointer",
              transition: "all 0.25s ease",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                borderColor: "#D1D5DB",
              },
            }}
          >
            <Box
              sx={{
                width: 35,
                height: 35,
                borderRadius: 2,
                bgcolor: "#F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563EB",
              }}
            >
              {card.icon}
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#374151",
                  fontWeight: 800,
                  fontSize: 13,
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  color: "#111827",
                  fontWeight: 600,
                  fontSize: 13,
                  lineHeight: 1.2,
                  mt: 0.2,
                }}
              >
                {card.value}
              </Typography>

              <Typography
                sx={{
                  color: "#9CA3AF",
                  mt: 0.3,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {card.subtitle}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
