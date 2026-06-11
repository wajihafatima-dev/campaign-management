export type CampaignStatus = "Active" | "Paused" | "Draft";
import { GridColDef } from "@mui/x-data-grid";

export interface Campaign {
  id: string;
  title: string;
  budget: number;
  status: CampaignStatus;
  leadsGenerated: number;
}

export interface AppDataGridProps<T> {
  rows: T[];
  columns: GridColDef[];
  loading?: boolean;

  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}