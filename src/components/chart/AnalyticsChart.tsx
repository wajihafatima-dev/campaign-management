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

import { Box, Typography } from "@mui/material";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function AnalyticsChart() {
  const campaigns = useAppSelector((state) => state.campaigns.campaigns);

  const chartData = (campaigns || []).map((campaign, index) => ({
    day: `C-${index + 1}`,
    leads: Number(campaign.leadsGenerated) || 0,
    budget: Number(campaign.budget) || 0,
  }));

  return (
    <Box
      sx={{
        width: 500,
        bgcolor: "#fff",
        borderRadius: 3,
        p: 3,
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#111827",
        }}
      >
        Campaign Performance
      </Typography>

      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

          <XAxis dataKey="day" tick={{ fontSize: 10 }} />

          <YAxis tick={{ fontSize: 10 }} />

          <Tooltip />

          <Bar
            dataKey="budget"
            barSize={24}
            fill="#93C5FD"
            radius={[8, 8, 0, 0]}
          />

          <Line
            type="monotone"
            dataKey="leads"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ r: 2 }}
            activeDot={{ r: 4 }}
          />

          <Scatter dataKey="leads" fill="#10B981" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}
