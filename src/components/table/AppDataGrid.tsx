"use client";

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";

import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  Chip,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { AppDataGridProps } from "@/types/campaign";

const AppDataGrid = <T,>({
  rows,
  columns,
  loading = false,
  onEdit,
  onDelete,
}: AppDataGridProps<T>) => {
  // STATUS COLUMN
  const statusColumn: GridColDef = {
    field: "status",
    headerName: "Status",
    width: 140,
    align: "center",
    display: "flex",
    headerAlign: "center",

    renderCell: (params: GridRenderCellParams) => {
      const value = params.value?.toLowerCase();

      let color:
        | "success"
        | "warning"
        | "default"
        | "error" = "default";

      let bg = "#E5E7EB";
      let text = "#111827";

      switch (value) {
        case "active":
          color = "success";
          bg = "#DCFCE7";
          text = "#166534";
          break;

        case "paused":
          color = "warning";
          bg = "#FEF3C7";
          text = "#92400E";
          break;

        case "draft":
          color = "default";
          bg = "#E5E7EB";
          text = "#374151";
          break;
      }

      return (
        <Chip
          label={params.value}
          size="small"
          sx={{
            fontWeight: 600,
            fontSize: "12px",
            backgroundColor: bg,
            color: text,
            borderRadius: "8px",
            px: 1,
          }}
        />
      );
    },
  };

  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 140,
    sortable: false,
    filterable: false,
    align: "center",
    display:"flex",
    headerAlign: "center",

    renderCell: (params: GridRenderCellParams) => (
      <Stack direction="row" spacing={0.5}>
        {onEdit && (
          <Tooltip title="Edit">
            <IconButton
              size="small"
              sx={{
                color: "#F59E0B",
                "&:hover": {
                  backgroundColor: "#FFFBEB",
                },
              }}
              onClick={() => onEdit(params.row)}
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {onDelete && (
          <Tooltip title="Delete">
            <IconButton
              size="small"
              sx={{
                color: "#EF4444",
                "&:hover": {
                  backgroundColor: "#FEF2F2",
                },
              }}
              onClick={() => onDelete(params.row)}
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    ),
  };

  const finalColumns: GridColDef[] = [
    ...columns.filter((c) => c.field !== "status"),
    statusColumn,
    actionColumn,
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        borderRadius: 3,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        p: 1,
      }}
    >
      <DataGrid
        rows={rows}
        columns={finalColumns}
        loading={loading}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10, 25, 50]}
        pagination
        disableColumnMenu
        hideFooterSelectedRowCount
        autoHeight
        sx={{
          border: "none",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F9FAFB",
            borderBottom: "1px solid #E5E7EB",
            fontWeight: 700,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
            color: "#111827",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #F3F4F6",
            transition: "all 0.2s ease",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#F9FAFB",
          },
          "& .MuiDataGrid-cell": {
            fontSize: "13px",
            color: "#374151",
          },
          "& .MuiDataGrid-cell:focus": { outline: "none" },
          "& .MuiDataGrid-cell:focus-within": { outline: "none" },
          "& .MuiDataGrid-columnHeader:focus": { outline: "none" },
        }}
      />
    </Box>
  );
};
export default AppDataGrid;