import * as Yup from "yup";

export const campaignSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

  budget: Yup.number()
    .required("Budget is required")
    .min(1, "Budget must be greater than 0"),

  status: Yup.string()
    .required("Status is required"),

  leadsGenerated: Yup.number()
    .required("Leads are required")
    .min(3, "Leads must be at least 3"),
});