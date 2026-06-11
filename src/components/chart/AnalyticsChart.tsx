"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Scatter,
} from "recharts";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function AnalyticsChart() {
  const campaigns = useAppSelector((state) => state.campaigns.campaigns);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const chartData = (campaigns || []).map((campaign, index) => ({
    day: `C-${index + 1}`,
    leads: Number(campaign.leadsGenerated) || 0,
    budget: Number(campaign.budget) || 0,
  }));

  return (
    <Box
      sx={{
        width: "100%", // ✅ responsive
        maxWidth: 700, // optional constraint for large screens
        bgcolor: "#fff",
        borderRadius: 3,
        p: { xs: 2, sm: 3 },
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#111827",
          fontSize: { xs: "14px", sm: "16px" },
        }}
      >
        Campaign Performance
      </Typography>

      <Box sx={{ width: "100%", height: { xs: 220, sm: 260, md: 300 } }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            <XAxis dataKey="day" tick={{ fontSize: isMobile ? 9 : 11 }} />

            <YAxis
              tick={{ fontSize: isMobile ? 9 : 11 }}
              width={isMobile ? 30 : 40}
            />

            <Tooltip />

            <Bar
              dataKey="budget"
              barSize={isMobile ? 16 : 24}
              fill="#93C5FD"
              radius={[8, 8, 0, 0]}
            />

            <Line
              type="monotone"
              dataKey="leads"
              stroke="#2563EB"
              strokeWidth={2}
              dot={{ r: isMobile ? 1.5 : 3 }}
              activeDot={{ r: isMobile ? 3 : 5 }}
            />

            <Scatter dataKey="leads" fill="#10B981" />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
