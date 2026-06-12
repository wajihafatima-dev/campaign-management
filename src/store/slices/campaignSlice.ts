import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign } from "@/types/campaign";
import { v4 as uuidv4 } from "uuid";

interface CampaignState {
  campaigns: Campaign[];
  selectedCampaign: Campaign | null;
}

const initialState: CampaignState = {
  campaigns: [
    {
      id: uuidv4(),
      title: "Facebook Lead Generation Q3",
      budget: 50000,
      status: "Active",
      leadsGenerated: 120,
    },
    {
      id: uuidv4(),
      title: "Google Ads Summer Sale",
      budget: 75000,
      status: "Paused",
      leadsGenerated: 85,
    },
    {
      id: uuidv4(),
      title: "Instagram Brand Awareness",
      budget: 45000,
      status: "Active",
      leadsGenerated: 210,
    },
    {
      id: uuidv4(),
      title: "YouTube Video Promotion",
      budget: 100000,
      status: "Active",
      leadsGenerated: 350,
    },
    {
      id: uuidv4(),
      title: "LinkedIn B2B Outreach",
      budget: 30000,
      status: "Draft",
      leadsGenerated: 40,
    },
    {
      id: uuidv4(),
      title: "Email Marketing Campaign",
      budget: 20000,
      status: "Active",
      leadsGenerated: 95,
    },
  ],
  selectedCampaign: null,
};

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    // ADD
    addCampaign: (state, action: PayloadAction<Campaign>) => {
      state.campaigns.push(action.payload);
    },

    // UPDATE
    updateCampaign: (state, action: PayloadAction<Campaign>) => {
      const index = state.campaigns.findIndex(
        (c) => c.id === action.payload.id,
      );

      if (index !== -1) {
        state.campaigns[index] = {
          ...state.campaigns[index],
          ...action.payload,
        };
      }
    },

    // DELETE
    deleteCampaign: (state, action: PayloadAction<string>) => {
      state.campaigns = state.campaigns.filter((c) => c.id !== action.payload);
    },

    // SELECT
    setSelectedCampaign: (state, action: PayloadAction<Campaign | null>) => {
      state.selectedCampaign = action.payload;
    },

    // CLEAR
    clearSelectedCampaign: (state) => {
      state.selectedCampaign = null;
    },
  },
});

export const {
  addCampaign,
  updateCampaign,
  deleteCampaign,
  setSelectedCampaign,
  clearSelectedCampaign,
} = campaignSlice.actions;

export default campaignSlice.reducer;
