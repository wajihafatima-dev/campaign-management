import { useAppSelector } from "./useAppSelector";

export const useCampaigns = () => {
  return useAppSelector(
    (state) => state.campaigns.campaigns
  );
};
