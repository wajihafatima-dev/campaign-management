"use client";

import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import AppDataGrid from "@/components/table/AppDataGrid";
import AppModal from "@/components/modals/AppModal";
import EditModal from "@/components/modals/EditModal";
import { Box, Button, Typography } from "@mui/material";
import CampaignForm from "@/components/forms/CampaignForm";
import { Campaign } from "@/types/campaign";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

import {
  addCampaign,
  deleteCampaign,
  setSelectedCampaign,
  updateCampaign,
} from "@/store/slices/campaignSlice";
import StatusFilterDropdown from "@/components/dropdown/StatusFilterDropdown";

export default function CampaignsPage() {
  const dispatch = useAppDispatch();

  const campaigns = useAppSelector((state) => state.campaigns.campaigns);
  const [filterBy, setFilterBy] = useState<
    "All" | "Active" | "Paused" | "Draft"
  >("All");
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<Campaign | null>(null);

  const handleAddCampaign = (data: Campaign) => {
    dispatch(addCampaign(data));
    setAddModalOpen(false);
  };

  const handleEdit = (row: Campaign) => {
    dispatch(setSelectedCampaign(row)); // optional
    setEditData(row);
    setEditModalOpen(true);
  };

  const handleUpdateCampaign = (data: Campaign) => {
    dispatch(updateCampaign(data));
    setEditModalOpen(false);
    setEditData(null);
  };

  const handleDelete = (row: Campaign) => {
    dispatch(deleteCampaign(row.id));
  };

  const filteredCampaigns = campaigns.filter((c) => {
    if (filterBy === "All") return true;
    return c.status === filterBy;
  });
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Campaign Title",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "budget",
      headerName: "Budget",
      flex: 1,
    },
    {
      field: "leadsGenerated",
      headerName: "Leads Generated",
      flex: 1,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
          p: { xs: 2, sm: 2 },
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ pb: "15px" ,fontWeight:700,color:"#111827"}}
          >
            Campaign Management
          </Typography>
          <StatusFilterDropdown value={filterBy} onChange={setFilterBy} />
        </Box>

        <Button
          variant="contained"
          onClick={() => setAddModalOpen(true)}
          sx={{
            bgcolor: "#2563EB",
            borderRadius: 2,
            px: 3,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          + Add Campaign
        </Button>
      </Box>
      <AppDataGrid
        rows={filteredCampaigns}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AppModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        title="Add Campaign"
      >
        <CampaignForm onSubmit={handleAddCampaign} />
      </AppModal>
      {/* EDIT MODAL */}
      <EditModal
        open={editModalOpen}
        initialData={editData}
        onClose={() => {
          setEditModalOpen(false);
          setEditData(null);
        }}
        onSubmit={handleUpdateCampaign}
      />
    </>
  );
}
