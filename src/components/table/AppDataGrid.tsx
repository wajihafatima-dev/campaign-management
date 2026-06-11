"use client";

import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { Box, IconButton, Stack, Tooltip, Chip } from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface AppDataGridProps {
  rows: any[];
  columns: GridColDef[];
  loading?: boolean;

  onView?: (row: any) => void;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

const AppDataGrid = ({
  rows,
  columns,
  loading = false,
  onView,
  onEdit,
  onDelete,
}: AppDataGridProps) => {
  // -------------------------
  // STATUS COLUMN (CHIP UI)
  // -------------------------
  const statusColumn: GridColDef = {
    field: "status",
    headerName: "Status",
    width: 140,
    display: "flex",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams) => {
      const value = params.value?.toLowerCase();

      let color: "success" | "warning" | "default" | "error" = "default";
      let label = params.value;

      switch (value) {
        case "active":
          color = "success";
          label = "Active";
          break;

        case "paused":
          color = "warning";
          label = "Paused";
          break;

        case "draft":
          color = "default";
          label = "Draft";
          break;

        default:
          color = "error";
          label = params.value || "Unknown";
      }

      return (
        <Chip
          label={label}
          size="small"
          color={color}
          variant="filled"
          sx={{
            fontWeight: 500,
            height: 24,
            fontSize: "12px",
          }}
        />
      );
    },
  };

  // -------------------------
  // ACTION COLUMN
  // -------------------------
  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    filterable: false,
    width: 150,
    display: "flex",
    align: "center",
    headerAlign: "center",

    renderCell: (params: GridRenderCellParams) => (
      <Stack direction="row" sx={{ gap: 0.5 }}>
        {onView && (
          <Tooltip title="View">
            <IconButton size="small" onClick={() => onView(params.row)}>
              <VisibilityOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {onEdit && (
          <Tooltip title="Edit">
            <IconButton size="small" onClick={() => onEdit(params.row)}>
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {onDelete && (
          <Tooltip title="Delete">
            <IconButton
              size="small"
              color="error"
              onClick={() => onDelete(params.row)}
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    ),
  };

  // -------------------------
  // FIX: REMOVE DUPLICATE STATUS COLUMN
  // -------------------------
  const finalColumns: GridColDef[] = [
    ...columns.filter((col) => col.field !== "status"),
    statusColumn,
    actionColumn,
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      <DataGrid
        rows={rows}
        columns={finalColumns}
        loading={loading}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10, 25, 50]}
        disableColumnMenu
        pagination
        hideFooterSelectedRowCount
        localeText={{ noRowsLabel: "No results found" }}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 10,
            },
          },
        }}
        sx={{
          border: "none",
          "& .MuiDataGrid-cell:focus": { outline: "none" },
          "& .MuiDataGrid-cell:focus-within": { outline: "none" },
          "& .MuiDataGrid-columnHeader:focus": { outline: "none" },
          "& .MuiDataGrid-columnHeader:focus-within": { outline: "none" },
          "& .MuiTablePagination-displayedRows": { display: "none" },
        }}
      />
    </Box>
  );
};

export default AppDataGrid;
