export type CampaignStatus = "Active" | "Paused" | "Draft";

export interface Campaign {
  id: string;
  title: string;
  budget: number;
  status: CampaignStatus;
  leadsGenerated: number;
}