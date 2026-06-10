import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign } from "../../types/campaign";

interface CampaignState {
  campaigns: Campaign[];
}

const initialState: CampaignState = {
  campaigns: [
    {
      id: "1",
      title: "Facebook Ads",
      budget: 5000,
      status: "Active",
      leadsGenerated: 120,
    },
    {
      id: "2",
      title: "Google Ads",
      budget: 3000,
      status: "Paused",
      leadsGenerated: 80,
    },
  ],
};

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    addCampaign: (state, action: PayloadAction<Campaign>) => {
      state.campaigns.push(action.payload);
    },

    updateCampaign: (state, action: PayloadAction<Campaign>) => {
      const index = state.campaigns.findIndex(
        (c) => c.id === action.payload.id
      );

      if (index !== -1) {
        state.campaigns[index] = action.payload;
      }
    },

    deleteCampaign: (state, action: PayloadAction<string>) => {
      state.campaigns = state.campaigns.filter(
        (campaign) => campaign.id !== action.payload
      );
    },
  },
});

export const {
  addCampaign,
  updateCampaign,
  deleteCampaign,
} = campaignSlice.actions;

export default campaignSlice.reducer;