import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" color="primary" href="/dashboard">
        Go to Dashboard
      </Button>
    </Box>
  );
}
