// utils/analytics.ts

import { Campaign } from "@/types/campaign";

export const getCampaignStats = (campaigns: Campaign[]) => {
  return {
    total: campaigns.length,

    active: campaigns.filter(c => c.status === "Active").length,

    paused: campaigns.filter(c => c.status === "Paused").length,

    draft: campaigns.filter(c => c.status === "Draft").length,

    totalBudget: campaigns.reduce((acc, c) => acc + c.budget, 0),

    totalLeads: campaigns.reduce((acc, c) => acc + c.leadsGenerated, 0),
  };
};