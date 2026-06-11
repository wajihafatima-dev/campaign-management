"use client";

import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import AppDataGrid from "@/components/table/AppDataGrid";
import AppModal from "@/components/modals/AppModal";
import { Box } from "@mui/material";

const rows = [
  {
    id: 1,
    name: "Summer Sale",
    status: "Active",
    budget: 1000,
  },
  {
    id: 2,
    name: "Black Friday",
    status: "Paused",
    budget: 2500,
  },
];

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Campaign Name",
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
];

export default function CampaignsPage() {
  const [selectedRow, setSelectedRow] = useState<object | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleView = (row: object) => {
    setSelectedRow(row);
    setModalOpen(true);

    // View modal open
    console.log("View", row);
  };

  const handleEdit = (row: object) => {
    console.log("Edit", row);
  };

  const handleDelete = (row: object) => {
    console.log("Delete", row);
  };

  return (
    <>
      <AppDataGrid
        rows={rows}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AppModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="View Campaign"
        children={<Box>Ali</Box>}
      />
    </>
  );
}
