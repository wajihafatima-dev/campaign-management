"use client";
import { Box, Typography, MenuItem, Select } from "@mui/material";

export type CampaignStatusFilter = "All" | "Active" | "Paused" | "Draft";

interface StatusFilterDropdownProps {
  value: CampaignStatusFilter;
  onChange: (value: CampaignStatusFilter) => void;
}

export default function StatusFilterDropdown({
  value,
  onChange,
}: StatusFilterDropdownProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 1,
      }}
    >
      <Typography sx={{ color: "#6B7280", fontSize: 13, fontWeight: 500 }}>
        Filter:
      </Typography>

      <Select
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value as CampaignStatusFilter)}
        sx={{
          minWidth: 170,
          fontSize: 14,
          bgcolor: "#fff",
          borderRadius: 2,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E5E7EB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CBD5E1",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2563EB",
          },
        }}
      >
        <MenuItem value="All">All Campaigns</MenuItem>
        <MenuItem value="Active">Active Campaigns</MenuItem>
        <MenuItem value="Paused">Paused Campaigns</MenuItem>
        <MenuItem value="Draft">Draft Campaigns</MenuItem>
      </Select>
    </Box>
  );
}
