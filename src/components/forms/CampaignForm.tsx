"use client";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import { Campaign } from "@/types/campaign";
import { campaignSchema } from "@/validations/campaignSchema";
import { v4 as uuidv4 } from "uuid";

interface CampaignFormProps {
  onSubmit: (data: Campaign) => void;
  initialValues?: Campaign | null;
  mode?: "add" | "edit";
}

export default function CampaignForm({
  onSubmit,
  initialValues,
  mode = "add",
}: CampaignFormProps) {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: initialValues?.title || "",
        budget: initialValues?.budget || "",
        status: initialValues?.status || "Active",
        leadsGenerated: initialValues?.leadsGenerated || "",
      }}
      validationSchema={campaignSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({
          id: mode === "edit" ? (initialValues?.id as string) : uuidv4(),

          title: values.title,
          budget: Number(values.budget),
          status: values.status as Campaign["status"],
          leadsGenerated: Number(values.leadsGenerated),
        });

        if (mode === "add") resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            fullWidth
          />

          <TextField
            label="Budget"
            name="budget"
            type="number"
            value={values.budget}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.budget && Boolean(errors.budget)}
            helperText={touched.budget && errors.budget}
            fullWidth
          />

          <TextField
            select
            label="Status"
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.status && Boolean(errors.status)}
            helperText={touched.status && errors.status}
            fullWidth
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Paused">Paused</MenuItem>
            <MenuItem value="Draft">Draft</MenuItem>
          </TextField>

          <TextField
            label="Leads Generated"
            name="leadsGenerated"
            type="number"
            value={values.leadsGenerated}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.leadsGenerated && Boolean(errors.leadsGenerated)}
            helperText={touched.leadsGenerated && errors.leadsGenerated}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.1,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "14px",
              transition: "all 0.25s ease",
              color: "#fff",

              background:
                mode === "edit"
                  ? "linear-gradient(135deg, #F59E0B, #D97706)" // 🟡 Yellow (Edit)
                  : "linear-gradient(135deg, #2563EB, #1D4ED8)", // 🔵 Blue (Add)

              boxShadow:
                mode === "edit"
                  ? "0 6px 18px rgba(245,158,11,0.25)"
                  : "0 6px 18px rgba(37,99,235,0.25)",

              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow:
                  mode === "edit"
                    ? "0 10px 25px rgba(245,158,11,0.35)"
                    : "0 10px 25px rgba(37,99,235,0.35)",

                background:
                  mode === "edit"
                    ? "linear-gradient(135deg, #D97706, #B45309)"
                    : "linear-gradient(135deg, #1D4ED8, #1E40AF)",
              },

              "&:active": {
                transform: "translateY(0px)",
                boxShadow: "none",
              },
            }}
          >
            {mode === "edit" ? "Edit Campaign" : "Add Campaign"}
          </Button>
        </Box>
      )}
    </Formik>
  );
}
