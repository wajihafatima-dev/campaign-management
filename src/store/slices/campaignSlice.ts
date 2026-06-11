import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign } from "@/types/campaign";

interface CampaignState {
  campaigns: Campaign[];
  selectedCampaign: Campaign | null;
}

const initialState: CampaignState = {
  campaigns: [],
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
        (c) => c.id === action.payload.id
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
      state.campaigns = state.campaigns.filter(
        (c) => c.id !== action.payload
      );
    },

    // SELECT 
    setSelectedCampaign: (
      state,
      action: PayloadAction<Campaign | null>
    ) => {
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