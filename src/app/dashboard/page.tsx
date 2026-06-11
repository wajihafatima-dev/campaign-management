"use client";

import AnalyticsChart from "@/components/chart/AnalyticsChart";
import SummaryCards from "@/components/SummaryCards/SummaryCards";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Box } from "@mui/material";

const Dashboard = () => {
  const campaigns = useAppSelector(
    (state) => state.campaigns.campaigns
  );

  return (
    <Box>
      <SummaryCards campaigns={campaigns} />

      <Box sx={{ mt: 3 }}>
        <AnalyticsChart />
      </Box>
    </Box>
  );
};

export default Dashboard;